sumber youtube: 
1. Semmi Verian > [NGE-React] #17 Mengirimkan data dari child ke parent component
2. dea afrizal > Code Yang Harus React JS Developer Ketahui

kirimdata dari parent ke child
------------------------------------------
 const Parent = () => {                          // 1. komponen parent nya
 return
    <>
        <Child name="aqil">                      // 3. panggil komponen dengan oper data ke child
    </>  
 }
 -----
const Child = (props) => {                       // 2. komponen child tangkap data dengan props
 return
 <>
  <div>"Halo nama saya "{props.name}</div>       // 4. gunakan props
 </>
}

kirim data dari Child ke Parent
------------------------------------------
 const Parent = () => {                          // 1. parent 
  const operAlamat = (terimaData) => {           // 4. sebelumnya sudah kita persiapkan ada function penerima data
    return
      <>
        "alamat saya" {terimaData}               // 5. data yang di terima dari child bisa di gunakan di parent ini 
      </>
    }
  return
  <>
        <Child name="aqil" alamat={operdata()}>  // 6. function di invite sudah bisa di tampilkan
  </>  
 }
 -----
const Child = (props) => {                       // 2. child
 return
 <>
  <div>Halo nama saya {props.name} dan {props.operAlamat("saiti")}</div>  // 3. kirim data dari child: dg cara menerima props berisi function
 </>                                                                      //    karena function kita bisa kirim via argument "saiti"
}


 
