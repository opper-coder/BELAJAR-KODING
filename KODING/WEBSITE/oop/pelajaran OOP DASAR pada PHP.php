<?php 


//CLASS********
class Coba {}									// bentuk dasar class ini sudah valid
//====
//OBJECT********
$a = new Coba();								// bntuk dasar object
$b = new Coba();								// satu class dapat dibnuat kan objct lbih dari satu
//=====
var_dump($a);									// jika di vardump sudah valid tapi install xdebug di browser agar terlihat
var_dump($b);
//======
class Nama {
	public $a;									// namun akan mmiliki fungsi jika sudah berisi "peoperty"
	public function b(){}						// dan "method/function"
}
//=====


//PROPERTY*******
class Produk{									// contoh buat class berisi property
	public 	$judul,
			$penulis,
			$penerbit,
			$harga;
} 
//======
$Produk1 = new produk ();
var_dump($Produk1);								// ini jika di var dump sudah tampil isi proptynya tapi masih blum ter "definisi" alias nilainya Null
//======

class Produk{					
	public 	$judul = "judul",					// di "definisi" kan default sbab kpluanya nanti di isi(inject di timpa) "definisinya" dari object
			$penulis = "penulis",
			$penerbit= "penerbit",
			$harga = 0;
} 

$Produk1 ->judul = "naruto";					// cara menimpa "definisi" property (ini hanya blaku untuk object bersangkutan saja)
var_dump($Produk1);								// jika di vadump maka judul biersi nilai timpaan, sdang yang lain dfault karna blum di timpa ("naruto")
//======
$produk2 = new Produk();						// jika kita mau bikin objct instanc lagi bolh 
var_dump($Produk2->judul);						// tapi nilainya masih dfault (bukan "naruto" mlainkan "judul")// contoh var dump judulnya saja 
//=====
$Produk2 ->judul = "PUBG";						// timpa nilai poduct2->judul dngan PUBG
$Produk2 ->bahasa = "jawa";						// nambah property (khusus) di object product2 karena properti bahasa jawa blum pernah di buat di class nya
//=====
$Produk3 new Produk();							// kalau kita buat instance product3 dan kita definisikan(timpa) masing2 propertynya,spt di bawah ini lah bntuknya:
$Produk3-> 	$judul = "judul",		
$Produk3->	$penulis = "penulis",
$Produk3->	$penerbit= "penerbit",
$Produk3->	$harga = 0;

echo "Komik : $product3->judul, $product3->penulis" ;  // contoh coba kita echo slain sudah di var dump bolh saja
//=====
//METHODE*******
class Produk{					
	public 	$judul = "judul",					// property
			$penulis = "penulis",
			$penerbit= "penerbit",
			$harga = 0;

	public function kataSalam(){				// method
			return "Hello World";
	}	
} 

$produk4 = new produk();						// sblum method nya di panggil pergunakan  dulu class dalam objct karna yang bisa di panggil hanya dalam objct
echo $produk4->kataSalam();						// cara manggil method pada objct
//=====
class Produk{					
	public 	$judul = "judul",					//kita TAMPILKAN PROPERTY judul dan pnulis mnggunakan method
			$penulis = "penulis",
			$penerbit= "penerbit",
			$harga = 0;

	public function labelBuku(){		
			return "$this->judul, $this->penulis"; 			// bikin returnya dari property , namun harus di tolong dngan "this->"dlm variabel untuk kpluan scoop
	}	
} 

echo "Komik : $product3->judul, $product3->penulis" ;  	// cara echo menggunakan property
echo "Komik :" . $produk4->kataSalam();					// cara echo menggunakan method

//KONSTRUCTOR*********
// dfinisinya adalah constuctor adalah "function yang otomatis di jalankan" saat objct di buat dai sbuah class yang "mnganndung constucto"
class Produk{					
	public 	$judul ,									// Nilai dfaultnya(saya kosongin) bisa di pindah di constructor
			$penulis ,
			$penerbit,
			$harga ;

	public function __constructor($judul="judul",$penulis="penulis",$penerbit="penerbit",$harga=0){		// gunakan magic mthod __constructor(magic mthod ada banyak) dan buatkan variabl lokal dngan nama yang sama (opt)dngan property
			$this->judul = $judul;						// dalam block function timpa $judul milik property(yng ada "this" nya) dngan vaiabel penerima dari constuctor
			$this->penulis = $penulis;
			$this->penerbit = $penerbit;
			$this->harga = $harga;
	}	
} 


$product5 = new Produk("spiderman","jk rowling");		// buatkan object dg parameter constuctor nya sesuai dngan urutan "variabel pernerima" di class
var_dump($product5);									// maka langsung bisa di var dump
//=====
//atau buatkan juga 2 mthod dalam class tsb


class Produk{					
	public 	$judul ,									
			$penulis ,
			$penerbit,
			$harga ;

	public function __constructor($judul="judul",$penulis="penulis",$penerbit="penerbit",$harga=0){		
			$this->judul = $judul;							
			$this->penulis = $penulis;
			$this->penerbit = $penerbit;
			$this->harga = $harga;
	}	

	public function labelBuku(){						// ada 2 method di class ini (__constructor dan label buku)
		return "$this->judul, $this->penulis"; 
	}	
} 

$product6 = new Produk("naruto","masashi kishimoto","shonen jump",30000);   // buatkan object dan isi parameter
$product7 = new Produk("ada","apa")						// buat object sbanyak banyaknya sesuai kebutuhan
echo "buku : " . $product6->labelBuku();				// lalu coba echo method kdua (labelBuku())



//OBJECT TYPE************
//kita mnggunakan contoh scipt sebelumnya

class Produk{					
	public 	$judul ,									
			$penulis ,
			$penerbit,
			$harga ;

	public function __constructor($judul="judul",$penulis="penulis",$penerbit="penerbit",$harga=0){		
			$this->judul = $judul;							
			$this->penulis = $penulis;
			$this->penerbit = $penerbit;
			$this->harga = $harga;
	}	

	public function labelBuku(){						
		return "$this->judul, $this->penulis"; 
	}	
} 

$product6 = new Produk("naruto","masashi kishimoto","shonen jump",30000);   
$product7 = new Produk("ada","apa")	
echo "buku : " . $product6->labelBuku();
//=====
// intinya berada di bawah ini yang terhubung dngan class poduct di atas ini. class ini di buat yang dibutuhkan adalah method nya, sbnanya bisa bikin mthod dalam class product tapi demi contoh "objct type"
class CetakInfoPoduk{								// inti nya ada di class ini, kita bikin class baru dg 1 method, yang ga ada property nya,karna property ngambil dari method class di atas
													// buatkan function dalam class untuk mnulis text yng di ambil dai class produk di atas
	public function cetak(Produk $produk ) {		// buatkan var baru ($produk)untuk menangkap parameter dari objec namun PENTING tulis type datanya (nama class yang diambil parameternya) ini hanya bfungsi jika objct mngirimkan paamt dai class $product saja
		$tulisanStringku = " {$produk->judul} {$produk->labelBuku()} {$produk->harga} "				
		return $tulisan
	}
}

$InfoPoduk1 = new CetakInfoPoduk();					// tidak perlu mmasukkan parameter karena ->
echo $InfoPoduk1->cetak($product6);					// kita ngambil parameter dari class produk yang parameternya sudah di timpa oleh object ($product6)(produc 6(di buat dai class poduct) ini yang hanya akan diterima oleh function cetak)

//INHERITANCE
//konsep menciptakan hierarki antar kelas (parent & child)
//child class, mewarisi semua property dan method dari parent nya (yang visibel)
//child class, memperluas (extends) fungsionalitas dari parent nya

//contoh :

class Mobil {										// ini ada class yang dibuat

	public 	$nama,
			$merk,
			$warna,
			$kecepatanMaksimal,
			$jumlahPenumpang;

	public function tambahKecepatan(){
			return"kecepatan bertambah!";
	}
}

class MobilSport extends Mobil {					// ini class child nya dg keyword "extends" lalu class "parent" nya
	public $turbo = false;							// sebagai perluasan dari parent

	public function jalankanTurbo(){
			$this->turbo = true;
			return "turbo di jalankan!"
	}

}

//---

$mobil1 = new MobilSport();							// cara instansiasi (bikin object nya)

echo $mobil1->tambahKecepatan();					// bisa mengakses(mnggunakan) property dan method classnya sendiri
echo $mobil1->jalankanTurbo();						// bisa mengakses(mnggunakan) property dan method classnya parent


//OVERRIDING
//mmbuat method dengan nama yang sama di class child dengan method class parent
//yang mengambil alih atau menimpa
//biasanya kita akan mnggunakan method yang sama dengan keadaan yang berbeda
// 








?>