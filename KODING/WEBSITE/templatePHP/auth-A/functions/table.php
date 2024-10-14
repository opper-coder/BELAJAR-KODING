
<?php /** TEMPLATE 
CATATAN 
  - copas aja dulu lalu sesuaikan=
	- sesuaikan import, conn, db, style, dll
	- terakhir struktur, fielddb, style 
	- praktisnya copas scrip di bawah paste di latihan.php

	require_once "core/init.php";  
	require_once "view/header.php";
	require_once "view/nav.php";

	table disini

	<?php require_once "view/footer.php"; ?>

tabel biasa
---------------------------------------------------------------- */ ?>
<?php require_once "core/init.php"; ?>

<?php $data = queryGet("SELECT * FROM users"); ?> 
<table>
	<?php foreach ($data as $key => $value) : ?> 
		<tr>
			<td><?= $value["name"] ?></td>
			<td><?= $value["user_id"] ?></td>
			<td><?= $value["type"] ?></td>
		</tr>
	<?php endforeach; ?> 
</table>

<?php /** tabel pagination
---------------------------------------------------------------- */ ?>
<!-- algoritma -->
<?php require_once "core/init.php"; ?>
<?php 
	$jumlahDataPerHalaman = 2; 
	$jumlahData = count(queryGet("SELECT * FROM users")); 
	$jumlahHalaman = ceil($jumlahData/$jumlahDataPerHalaman); 
	$halamanAktif = (isset($_GET["halaman"])) ? $_GET["halaman"] : 1; 
	$awalData = ($jumlahDataPerHalaman * $halamanAktif) - $jumlahDataPerHalaman; 
	$dataTabel = queryGet("SELECT * FROM users LIMIT $awalData, $jumlahDataPerHalaman"); 
 ?>
 <!-- table -->
<table>
	<?php foreach ($dataTabel as $key => $value) : ?> 
		<tr>
			<td><?= $value["name"] ?></td>
			<td><?= $value["user_id"] ?></td>
			<td><?= $value["type"] ?></td>
		</tr>
	<?php endforeach; ?> 
</table>
<!-- navigation -->
<style>
	.pageCursor{color: red}
</style>
<!-- arrow< -->
<?php if($halamanAktif > 1 ) : ?>
	<a href="?halaman= <?= $halamanAktif - 1 ?> ">&laquo</a>
<?php endif; ?>
<!-- page number -->
<?php for($i=1; $i <= $jumlahHalaman; $i++) : ?>
	<?php if($i == $halamanAktif): ?>
		<a href="?halaman=<?= $i; ?>" class="pageCursor"> <?= $i; ?> </a>
	<?php else : ?>
		<a href="?halaman=<?= $i; ?>"> <?= $i; ?> </a>
	<?php endif; ?>
<?php endfor; ?>
<!-- arrow> -->
<?php if($halamanAktif < $jumlahHalaman ) : ?>
	<a href="?halaman= <?= $halamanAktif + 1 ?> ">&raquo</a>
<?php endif; ?>





<?php /** table 
---------------------------------------------------------------- */ ?>
<?php /** 
- search, 
- sort, 
- table action 
- notif 
- combine 
	- pagination 
	- sort 
	- search 
	- action
---------------------------------------------------------------- */ ?>
<?php /** table crud dasar dari AI
---------------------------------------------------------------- */ ?>
<?php
session_start(); // Mulai sesi untuk menyimpan notifikasi

$host = 'localhost';
$user = 'root'; // ganti dengan username MySQL Anda
$pass = ''; // ganti dengan password MySQL Anda
$dbname = 'boxitlt';

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Function untuk menambahkan pengguna
function createUser($conn, $data) {
    $name = $data['name'];
    $flag = $data['flag'];
    $sql = "INSERT INTO users (name, flag) VALUES ('$name', '$flag')";
    return mysqli_query($conn, $sql);
}

// Function untuk memperbarui pengguna
function updateUser($conn, $data) {
    $id = $data['id'];
    $name = $data['name'];
    $flag = $data['flag'];
    $sql = "UPDATE users SET name='$name', flag='$flag' WHERE id=$id";
    return mysqli_query($conn, $sql);
}

// Function untuk menampilkan notifikasi
function displayNotification() {
    if (isset($_SESSION['notification'])) {
        echo "<div id='notification' style='color: green; padding: 10px; border: 1px solid green; margin-bottom: 10px;'>".$_SESSION['notification']."</div>";
        unset($_SESSION['notification']); // Hapus notifikasi setelah ditampilkan
    }
}

// CREATE
if (isset($_POST['add'])) {
    $data = [
        'name' => $_POST['name'],
        'flag' => $_POST['flag']
    ];
    createUser($conn, $data);
    $_SESSION['notification'] = "Pengguna berhasil ditambahkan.";
    header("Location: latihan.php"); // Redirect setelah menambah
    exit();
}

// UPDATE
if (isset($_POST['update'])) {
    $data = [
        'id' => $_POST['id'],
        'name' => $_POST['name'],
        'flag' => $_POST['flag']
    ];
    updateUser($conn, $data);
    $_SESSION['notification'] = "Pengguna berhasil diperbarui.";
    header("Location: latihan.php"); // Redirect setelah update
    exit();
}

// DELETE
if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $sql = "DELETE FROM users WHERE id=$id";
    mysqli_query($conn, $sql);
    $_SESSION['notification'] = "Pengguna berhasil dihapus.";
    header("Location: latihan.php"); // Redirect setelah delete
    exit();
}

// READ
$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);

// Edit Data
$edit_row = null;
if (isset($_GET['edit'])) {
    $id = $_GET['edit'];
    $result_edit = mysqli_query($conn, "SELECT * FROM users WHERE id=$id");
    $edit_row = mysqli_fetch_assoc($result_edit);
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>CRUD Sederhana</title>
    <script>
        function hideNotification() {
            const notification = document.getElementById('notification');
            if (notification) {
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000); // Sembunyikan setelah 5 detik
            }
        }
    </script>
</head>
<body onload="hideNotification();">

<h2>Manajemen Pengguna</h2>

<?php displayNotification(); // Tampilkan notifikasi ?>

<form method="post">
    <input type="hidden" name="id" value="<?php echo isset($edit_row) ? $edit_row['id'] : ''; ?>">
    Nama: <input type="text" name="name" value="<?php echo isset($edit_row) ? $edit_row['name'] : ''; ?>" required><br>
    Flag: <input type="text" name="flag" value="<?php echo isset($edit_row) ? $edit_row['flag'] : ''; ?>" required><br>
    <input type="submit" name="<?php echo isset($edit_row) ? 'update' : 'add'; ?>" value="<?php echo isset($edit_row) ? 'Update' : 'Add'; ?>">
</form>

<h3>Daftar Pengguna</h3>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Flag</th>
        <th>Aksi</th>
    </tr>
    <?php while ($row = mysqli_fetch_assoc($result)) { ?>
    <tr>
        <td><?php echo $row['id']; ?></td>
        <td><?php echo $row['name']; ?></td>
        <td><?php echo $row['flag']; ?></td>
        <td>
            <a href="?edit=<?php echo $row['id']; ?>">Edit</a> |
            <a href="?delete=<?php echo $row['id']; ?>">Delete</a>
        </td>
    </tr>
    <?php } ?>
</table>

</body>
</html>

<?php mysqli_close($conn); ?>


<?php /** table crud sesuaikan dengan template ini dan tinggal copas pada latihan.php
---------------------------------------------------------------- */ ?>
<?php
require_once "core/init.php";   // db
require_once "view/header.php"; // css

/*
KUSTOM DI PENYESUAIAN:
edit array sesuaikan dengan db ada di:
  - table
  - input
  - create 
  - update(kecuali id jangan di apa2kan)
*/
 
$tabelDb="users";

// Function untuk menampilkan notifikasi
function displayNotification() {
  if (isset($_SESSION['notification'])) {
    echo "<div id='notification' style='display:inline; color: green; border: 1px solid green; margin-bottom: 10px;'>".$_SESSION['notification']."</div>";
    unset($_SESSION['notification']); // Hapus notifikasi setelah ditampilkan
  }
}

// CREATE
if (isset($_POST['add'])) {
    $rowData = [
        'username' => $_POST['username'],
        'flag' => $_POST['flag']
    ];
  addDataArrAssoc($tabelDb, $rowData); // import function dr db
  $_SESSION['notification'] = "Pengguna berhasil ditambahkan.";
  header("Location: latihan.php"); // Redirect setelah menambah
  exit();
}

// UPDATE
if (isset($_POST['update'])) {
  $data = [
    'id' => $_POST['id'],
    'username' => $_POST['username'],
    'flag' => $_POST['flag']
  ];
  editDataArrAssc($tabelDb, $data, $data["id"]); // import function dr db
  $_SESSION['notification'] = "Pengguna berhasil diperbarui.";
  header("Location: latihan.php"); 
  exit();
}

// DELETE (FLAG)
if (isset($_GET['deleteFlag'])) {
  $id = $_GET['deleteFlag'];
  editField($tabelDb, "flag", "deleted", $id); // import function dr db
  $_SESSION['notification'] = "Flag Pengguna berhasil dihapus.";
  header("Location: latihan.php"); // Redirect setelah delete
  exit();
}

// DELETE FILTER
if (isset($_GET["deleteFilter"])) {
  $jumlah = agregasiData("users", "id", "count", "flag", "deleted");
  if (deleteDataFilter("users", $_GET["deleteFilter"])){
    $_SESSION['notification'] = $jumlah . " data di hapus dengan Filter BERHASIL.";
  }else{
    $_SESSION['notification'] = "Hapus GAGAL/item tidak tersedia";
  }
  header("Location: latihan.php"); // Redirect setelah delete
  exit();
}

// DELETE
if (isset($_GET['deleteId'])) {
  deleteData("users", $_GET['deleteId']); // import function dr db
  $_SESSION['notification'] = "Id Pengguna berhasil dihapus. yaaa";
  header("Location: latihan.php"); // Redirect setelah delete
  exit();
}

// READ
$query1 = "SELECT * FROM $tabelDb"; 
$result = queryGet($query1);

// Edit Data
$edit_row = null;
if (isset($_GET['edit'])) {
  $id = $_GET['edit'];
  $result_edit = mysqli_query($conn, "SELECT * FROM $tabelDb WHERE id=$id");
  $edit_row = mysqli_fetch_assoc($result_edit);
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>CRUD Sederhana</title>
  <script>
    function hideNotification() {
      const notification = document.getElementById('notification');
      if (notification) {
        setTimeout(() => {
          notification.style.display = 'none';  
        }, 3000); // Sembunyikan setelah 5 detik
      }
    }
  </script>
</head>
<body onload="hideNotification();">

<h2>Manajemen Pengguna</h2>

<form method="post">
    <input type="hidden" name="id" value="<?php echo isset($edit_row) ? $edit_row['id'] : ''; ?>">
    Nama: <input type="text" name="username" value="<?php echo isset($edit_row) ? $edit_row['username'] : ''; ?>" required><br>
    Flag: <input type="text" name="flag" value="<?php echo isset($edit_row) ? $edit_row['flag'] : ''; ?>" required><br>
    <input type="submit" name="<?php echo isset($edit_row) ? 'update' : 'add'; ?>" value="<?php echo isset($edit_row) ? 'Update' : 'Add'; ?>">
</form>

<?php displayNotification(); // Tampilkan notifikasi ?>

<h3>Daftar Pengguna</h3>
<table border="1">
    <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Flag</th>
        <th>Aksi</th>
    </tr>

    <?php foreach ($result as $col => $row) : ?>
    <tr>
        <td><?php echo $row['id']; ?></td>
        <td><?php echo $row['username']; ?></td>
        <td><?php echo $row['flag']; ?></td>
        <td>
            <a href="?edit=<?php echo $row['id']; ?>">Edit</a> |
            <a href="?deleteFlag=<?php echo $row['id']; ?>">DeleteFlag</a> |
            <a href="?deleteId=<?php echo $row['id']; ?>">DeleteId</a>
        </td>
    </tr>
    <?php endforeach; ?>
   
</table>

<!-- hapus dengan filter -->
<a href="?deleteFilter=deleted">DeleteFilter</a><br>

</body>
</html>

<!-- selesai -->
<?php mysqli_close($conn);  ?>
