<?php 
require_once "view/header.php"; // css
$tabelDb="users";

function toggle(){
	if(!isset($_GET["modal"]) || $_GET["modal"] == "none" ){
		return "none";
	}else{
		return "block";
	}
}

// Edit Data
$edit_row = null;
if (isset($_GET['edit'])) {
  $id = $_GET['edit'];
  $result_edit = mysqli_query($conn, "SELECT * FROM $tabelDb WHERE id=$id");
  $edit_row = mysqli_fetch_assoc($result_edit);
}

?>
<style>
.modal{
	position: fixed;
	background-color: #00000070;
	width: 100%;
	height: 100%;
}
.modalContent{
	background-color: white; 
  width: 60vw;
  margin: 16vh auto 0;
  position: relative;
}
</style>

<div class="modal" style="display: <?= toggle(); ?>">
	<div class="modalContent">	
	<a href="?modal=none" class="x">x</a>
		<b>isi modal</b><br>
		<hr>	

<!-- isi modal switch edit, flag, deleteId  ------------------------------------ -->
		<?php 
			switch ($_GET["show"]) {
				case 'showEdit': ?>
					<form method="post">
					    <input type="hidden" name="id" value="<?php echo isset($edit_row) ? $edit_row['id'] : ''; ?>">
					    Nama: <input type="text" name="username" value="<?php echo isset($edit_row) ? $edit_row['username'] : ''; ?>" required><br>
					    Flag: <input type="text" name="flag" value="<?php echo isset($edit_row) ? $edit_row['flag'] : ''; ?>" required><br>
					    <input type="submit" name="<?php echo isset($edit_row) ? 'update' : 'add'; ?>" value="<?php echo isset($edit_row) ? 'Update' : 'Add'; ?>">
					</form>
			<?php break;
				case 'showFlag':  ?>
					<p>Apakah anda akan menghapus <?= $_GET['idDelFlag']; ?> </p>
					<a href="?deleteFlag=<?= $_GET['idDelFlag']; ?>">Hapus Flag</a>
			<?php break;
				default:  ?>
					<p>Apakah anda akan menghapus <?= $_GET['idDelId']; ?> </p>
					<a href="?deleteId=<?= $_GET['idDelId'] ?>">Hapus ID</a>
			<?php break; } ?>
		<hr>	
		<a href="">Simpan | </a>
		<a href="?modal=none">Tutup</a>
</div>
</div>
<!-- copas trigger di halaman yang di sukai -->
<!-- <a href="?modal=block">klik modal</a> -->

<?php /* end modal */ ?>

