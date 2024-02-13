/*
METHOD AMBIL DATA KE FIREBASE
- init firestore
- fungsi ambildata dengan parameter collection
- ambil data dengan getDocs() dan getDoc()
- simpan data dalam variabel
- kembalikan data
---
silahkan ambildata dari collection manapun dengan retrieve data, atau data tunggal dengan id
*/

import {
  getFirestore,
  collection,
  getDoc,
  getDocs,
  addDoc,
  doc,
  query,
  where,
  updateDoc,
} from "firebase/firestore";
import app from "./init";
import bcrypt from "bcrypt";

const firestore = getFirestore(app);

// Get Data Jamak
export async function retrieveData(collectionName: string) {
  const snapshot = await getDocs(collection(firestore, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
}

// Get Data Tunggal
export async function retrieveDataById(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(firestore, collectionName, id));
  const data = snapshot.data();
  return data;
}

// register simpan di firebase
// register ini untuk admin, nanti buatkan register untuk reguler ya
// tinggal ubah role admin, ke: super_admin, reguler
export async function registerAdmin(data: {
  // terima params
  fullname: string;
  email: string;
  password: string;
  role?: string;
}) {
  // syntax query ke tabel user, cari data dengan email
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );
  const snapshot = await getDocs(q);
  const users = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // jika ditemukan maka gagalkan, karena email harus uniq
  // jika kosong tambah kan role dan juga encryp password, agar di database tidak terbaca oleh admin nantinya
  // import dulu bcrypt manual seperti di atas
  // bcryp install dulu ya typescript librarynya :> npm i --save-dev @types/bcrypt
  if (users.length > 0) {
    return {
      status: false,
      statusCode: 400,
      message: "Email already exist",
    };
  } else {
    // jika kosong tambahkan role, isinya sesuaikan root, superAdmin, admin, agency, reseller, reguler
    // ini masih manual nanti buatkan otomatisnya ya dengan wajib mengirim dan menerima data role dari UI input hidden
    data.role = "admin";
    data.password = await bcrypt.hash(data.password, 10);
    try {
      await addDoc(collection(firestore, "users"), data);
      return { status: true, statusCode: 200, message: "Register Success" };
    } catch (error) {
      return { status: false, statusCode: 400, message: "Register Failed" };
    }
  }
}

// login firebase
export async function login(data: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}

// login dengan oAuth google
export async function loginWithGoogle(data: any, callback: any) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const user: any = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (user.length > 0) {
    data.role = user[0].role;
    // cek update dulu siapa tahu account google pernah di ganti
    await updateDoc(doc(firestore, "users", user[0].id), data).then(() => {
      callback({ status: true, data: data });
    });
  } else {
    // jika belum pernah daftar tambah role(member karena untuk enduser saja)
    data.role = "member";
    await addDoc(collection(firestore, "users"), data).then(() => {
      callback({ status: true, data: data });
    });
  }
}
