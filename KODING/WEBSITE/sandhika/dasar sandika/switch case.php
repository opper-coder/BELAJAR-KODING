<?php 

// ============ contoh 1

$perubahan = 2;

switch ($perubahan) {
	case 1:
		echo "catat 1";
		break;
	
	case 2:
		echo "catat 2";
		break;

	case 3:
		echo "catat 3";
		break;

	default:
		echo "anda salah 5";
		break;
}

// ============ contoh 2 soal break yng masih sama yang di kerjakan
echo "<br>";

$makanan = "mi goreng";

switch ($makanan) {
	case 'anggur':
		echo "makanan SEHAT";
		break;

	case 'apple':
		echo "makanan SEHAT";
		break;

	case 'pisang':
		echo "makanan SEHAT";
		break;

	case 'strowberry':
		echo "makanan SEHAT";
		break;

	case 'gorengan':
		echo "makanan TIDAK SEHAT";
		break;

	case 'coto makasar':
		echo "makanan TIDAK SEHAT";
		break;

	case 'junk food':
		echo "makanan TIDAK SEHAT";
		break;

	case 'mi goreng':
		echo "makanan TIDAK SEHAT";
		break;

	default:
		echo "anda SALAH";
		break;
}

echo "<br>";
// ============ contoh 3 refactoring
$makanan3 = "blueberry";

switch ($makanan3) {
	case 'anggur':
	case 'apple':
	case 'pisang':
	case 'strowberry':
		echo "makanan yang anda pilih SEHAT";
		break;

	case 'gorengan':
	case 'coto makasar':
	case 'junk food':
	case 'mi goreng':
		echo "makanan yang anda pilih TIDAK SEHAT";
		break;

	default:
		echo "makanan yang anda pilih TIDAK TERDAFTAR";
		break;
}


 ?>