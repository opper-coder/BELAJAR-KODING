<?php 

// CLASS
	// class robot{}

// PROPERTY
	class robot{
		public $suara = "ngik ngik";
		}
	// berisi banyak property jg boleh
	class robot2{
		public $suara = "ngik ngik";
		public $berat = 30;
		}

// INSTANCE/OBJECT (bikin koneksi)
		$robot1 = new robot;
		$robot2 = new robot2;

// akses ECHO/VAR_DUMP object
		// var_dump($robot1)								// jika di vardump menghasilkan object
		echo "$robot1->suara"; 								// lihat cara penulisanya 
		echo "$robot2->suara","$robot2->berat";				// dua properti
	
	?>
	<!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->

<?php 

// METHODE	
		class robot3{
				public $suara = "ngik ngik";
				public $berat = 30;
				
				public function bersuara(){
					echo "suara robotnya ..." . $this->suara;
					}
				}

				// pada metode kita bisa menggunakan return pada function biasa 
				// atau mengisi argumen pada fungsion seperti biasa
				// this yaitu mengacu pada properti internal class ini

// ECHO METHODE
	$robot3 = new robot3;
	echo $robot3->bersuara();

	?>
	<!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->

<?php 
// SET dan GET 
		// adalah cara baca dan oper isi parameter dari luar class
		// langkahnya kita bikin kan function GET dan SET untuk nangkap trigger dari luar

	class robot4{
			// deklarasikan tanpa isi
			public $suara;
			public $berat;
			
			// bikin method pengisi properti dr luar
			public function set_suara($suara){			// HIGH LIGHT
				$this->suara=$suara;
				}

			// bikin method pembaca properti dr luar
			public function get_suara(){
				return $this->suara;
				}
			}

	// cara akses SET dan GET
	$robotaqil= new robot4;

	$robotaqil->set_suara('cring cring');	// HIGH LIGHT

	echo $robotaqil->get_suara();

	?>
	<!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->
	<?php 
	// satu class bisa bikin 2 object 
	class robot5{
			// deklarasikan tanpa isi
			public $suara;
			public $berat;
			
			// bikin method pengisi properti dr luar
			public function set_suara($ada){
				$this->suara=$ada;
				}

			// bikin method pembaca properti dr luar
			public function get_suara(){
				return $this->suara;
				}
			}
	$robotsilmi = new robot5;
	$robotizza = new robot5;
	
	$robotsilmi->set_suara('horee'); 
	$robotizza->set_suara('meong');

	echo $robotsilmi->suara;	
	echo '<br>';
	echo $robotizza->suara;
	 ?>
	 <!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->

<?php echo "<br>";
// KONSTRUCTOR
		// fungsi utama adalah metode mengisi value properti menggunakan function
		// cara kerja jika kita buat function construc, maka ketika di buatkan objec pada class tsb maka braket akan di jalankan

	class robot6{
		public function __construct(){
			echo "haloo construct robot6 ";
			}
		}

	$robotandi = new robot6;
	$robotandi2 = new robot6;
	$robotandi3 = new robot6;

		// ini bisa di manfaatkan untuk mengisi parameter properti contoh:
		// mengerti disini berarti tahu yang di atas / tidak perlu di ulangi lagi yang di atas

	echo "<br>";
	class robot7{
		public $suara;
		public $berat;

		public function __construct($tangkap){  // HIGH LIGHT
			$this->suara = $tangkap;
			}
		}

	$robotamel = new robot7('ha ha ha robot7');
	echo $robotamel->suara;
 ?>
<!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->

<?php 
// INHERITANCE
	// kita bisa membuat class warisan dari yang sudah ada namun kita tambahin kemampuan tambahan
	// dalam kasus ini kita sudah punya class robot 7 yang berisi 2 properti 
	// maka kita warisi properti tersebut sambil menabahkan method baru disini
	// cara nulis tambah extends:

	class robotHewan extends robot7{}

	// cara buat object tetep kirimkan parameter ke parent nya karena memang masih mewarisi:

	$robotdiva = new robothewan('hehe warisan');
	echo $robotdiva->suara;

	// kita juga bisa nambah kemampuan baru pada object ini:
	echo "<br>";

	class robotHewan2 extends robot7{
		public $kemampuan = 'terbang';
		}

	$robotdiva = new robothewan2('hehe warisan2');
	echo $robotdiva->suara;
	echo $robotdiva->kemampuan;
	 ?>
 
 <!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->
<?php 
// OVERRIDING
	// adalah kebalikan inheritance
	// yaitu menggunakan nama class parent nya tapi isi nya kita replace
	echo "<br>";
	
	// di bawah ini ada class normal:
	class robotMobil{
		public function tampilkanIni(){
			echo "sebelum di replace";
			}
		}

	$azza = new robotMobil;
	echo $azza->tampilkanIni();

	// lalu kita bikin inheritance namun mereplace (bukan menambah spt inheritance diatas) method nya yng sudah ada pd parentnya:
	echo "<br>";
	
	class robotmobil2 extends robotMobil {
		public function tampilkanIni(){
			echo "sekarang dah di ganti atau di replace";
			}
	}
	$azza2 = new robotMobil2;
	echo $azza2->tampilkanIni();

 ?>
<!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->
 <?php 
// ======================================================
// SAMPAI DISINI ADA KATA KONKLUSI:
// CLASS 	= class adalah template membangun properti dan methode bagi instance
// 			= adalah sebuah semacam array nya oop berisi properti dan methode
// 		 	= dapat di akses dengan ->
// 		 	= dapat di buat kan beberapa instance juga
// 		 	= dapat di umpan pada masing masing instance juga 
// 		 	= yang akhirnya dapat di echo masing masing instanya

// CLASS   	= juga bisa menduplikat diri menjadi extend dengan menambah properti&/methode baru yang tidak dimiliki parent nya
// 			= juga bisa menduplikat diri menjadi extend dengan mengganti properti&/methode lama yang dimiliki parent nya dg 
//			  bikin nama yang sama


// ======================================================

// SCOOP PADA PROPERTI DAN METHOD

 // ada tiga : "public", "protected", "private"
 // sesuai nama: bisa di akses oleh class child dan class lain, hanya child nya, khusus dirinya sendiri
 	// contoh: tiba2 kita echo $azza2->tampilkanIni ini akan tergantung dari scoop di atas 
 	// jadi kalau manggil harus melalui child dari robotmobil2 / tidak bisa langsung
 // defaultnya public(jika tak di deklarasikan)
 // tips tak usah di deklarasikan setelah selesai maka tinggal cari yang private dst

  ?>
  <!-- ---------------------------------------------------------------------------------- -->
	<br>
	<!-- ------------- -->
<?php 
// SELF DAN PARENT


 ?>