// ----------------- logika ternary hanya bisa untuk pengkondisisan yang sebaris sebaris 
true ? aksi true : aksi false;
false ? console.log("haloo benar") : console.log("haloo salah");
bool adalah sesuatu yangb sering di tulis pada pengkondisian biasa
( x % 2 == 0 ) ? "genap" : "ganjil"

// ----------------- looping komponen di react. vid react
let daftarNama = [ "aqil", "izza", "silmi" ];

const coba = (){
	return 
		<view>
			{daftarNama.map((orang)=>{
				<text>{orang}</text>
			})};
		</view>
}