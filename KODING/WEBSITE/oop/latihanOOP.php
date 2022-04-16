<?php 
echo "halo latihan!"."<br><br>";

// =============================================?><h1><?php 





class asa{
	public $satu;
	public function __construct($umpan)
	{
		$this->satu=$umpan;
	}
}

class ada extends asa {
	public $satu2="indo";
}





$coba = new asa("halo saiti");
$coba2= new ada(" halo ");

 echo $coba2->satu2;


?></h1><?php// ============================================= ?>