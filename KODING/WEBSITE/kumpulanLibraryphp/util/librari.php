<?php
	function format_angka($angka){
		$hasil=number_format($angka,0,",",".");
		return $hasil;
	}
	
	function format_angka2($angka){
		$hasil=number_format($angka,2,",",".");
		return $hasil;
	}
	
	function format_angka3($angka){
		$hasil=number_format($angka,2,".",",");
		return $hasil;
	}
	
	function tgl_eng_to_ind($tgl){
		$tgl_ind=substr($tgl,8,2)."-".substr($tgl,5,2)."-".substr($tgl,0,4);
		return $tgl_ind;
	}
	
	function tgl_eng_to_ind3($tgl){
		$tgl_ind=substr($tgl,8,2)."-".substr($tgl,5,2)."-".substr($tgl,0,4)." ".substr($tgl,11,2).":".substr($tgl,14,2).":".substr($tgl,17,2);
		return $tgl_ind;
	}
	
	function tgl_eng_to_ind2($tgl){
		$bulan['01']="Januari";
		$bulan['02']="Februari";
		$bulan['03']="Maret";
		$bulan['04']="April";
		$bulan['05']="Mei";
		$bulan['06']="Juni";
		$bulan['07']="Juli";
		$bulan['08']="Agustus";
		$bulan['09']="September";
		$bulan['10']="Oktober";
		$bulan['11']="November";
		$bulan['12']="Desember";	
		$tgl_ind=substr($tgl,8,2)." ".$bulan[substr($tgl,5,2)]." ".substr($tgl,0,4);
		return $tgl_ind;
	}
	
	function romawi($i){
		$romawi['1']="I";
		$romawi['2']="II";
		$romawi['3']="III";
		$romawi['4']="IV";
		$romawi['5']="V";
		$romawi['6']="VI";
		$romawi['7']="VII";
		$romawi['8']="VIII";
		$romawi['9']="IX";
		$romawi['10']="X";
		$romawi['11']="XI";
		$romawi['12']="XII";	
		$angkaromawi=$romawi["$i"];
		return $angkaromawi;
	}
	
	function romawiabjad($i){
		$romawiabjad['1']="A";
		$romawiabjad['2']="B";
		$romawiabjad['3']="C";
		$romawiabjad['4']="D";
		$romawiabjad['5']="E";
		$romawiabjad['6']="F";
		$romawiabjad['7']="G";
		$romawiabjad['8']="H";
		$romawiabjad['9']="I";
		$romawiabjad['10']="J";
		$romawiabjad['11']="K";
		$romawiabjad['12']="L";	
		$angkaromawiabjad=$romawiabjad["$i"];
		return $angkaromawiabjad;
	}
	
	function kdauto($tabel,$inisial){
		$struktur=mysql_query("select * from $tabel");
		$field=mysql_field_name($struktur,0);
		$panjang=mysql_field_len($struktur,0);
		
		$qry=mysql_query("select max(".$field.") from ".$tabel);
		$row=mysql_fetch_array($qry);
		
		if ($row[0]==""){
			$angka=0;			
		}else{
			$angka=substr($row[0],strlen($inisial));
		}
		
		$angka++;
		$angka=strval($angka);
		$temp="";
		for($i=1;$i<=($panjang-strlen($inisial)-strlen($angka));$i++){
			$temp=$temp."0";		
			
		}

		return $inisial.$temp.$angka;
	}
	
	function kdauto2($tabel,$inisial){
		
		$qry=mysql_query("select count(id_menu) from ".$tabel." where id_menu like '$inisial%'") or die(mysql_error());
		
		$row=mysql_fetch_array($qry);
		
		if ($row[0]==""){
			$angka=0;			
		}else{
			$angka=$row[0];
		}
		
		$angka=strval($angka);
		$angka++;
		
		$temp="";
		for($i=1;$i<=10-strlen($inisial)-strlen($angka);$i++){
			$temp=$temp."0";		
			
		}

		return $inisial.$temp.$angka;
		//return "select count(id_menu) from ".$tabel." where id_menu like '$inisial%'";
	}
	
	function Terbilang($x){
		  $abil = array("", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", "sebelas");
  		if ($x < 12){
		    return " " . $abil[$x];
		}elseif ($x < 20){
		    return Terbilang($x - 10) . "belas";
		}elseif ($x < 100){
		    return Terbilang($x / 10) . " puluh" . Terbilang($x % 10);
		}elseif ($x < 200){
		    return " seratus" . Terbilang($x - 100);
		}elseif ($x < 1000){
		    return Terbilang($x / 100) . " ratus" . Terbilang($x % 100);
		}elseif ($x < 2000){
		    return " seribu" . Terbilang($x - 1000);
		}elseif ($x < 1000000){
		    return Terbilang($x / 1000) . " ribu" . Terbilang($x % 1000);
		}elseif ($x < 1000000000){
		    return Terbilang($x / 1000000) . " juta" . Terbilang($x % 1000000);
		}
	}
	
	function filter($var){
		$var=stripslashes(strip_tags(htmlspecialchars($var)));
		$var=str_replace("0x20","",$var);
		$var=str_replace("'","",$var);
		$var=str_replace("-","",$var);
		$var=str_replace("#","",$var);
		$var=str_replace("outfile","",$var);
		return $var;
	}
	
	function filter2($var){
		$var=str_replace("0x20","",$var);
		$var=str_replace("-","",$var);
		$var=str_replace("#","",$var);
		$var=str_replace("outfile","",$var);
		return $var;
	}
	
	function filter3($var){
		$var=str_replace("0x20","",$var);
		$var=str_replace("#","",$var);
		$var=str_replace("outfile","",$var);
		return $var;
	}
?>