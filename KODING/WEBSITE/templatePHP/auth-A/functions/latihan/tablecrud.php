<?php
require_once "core/init.php";   // db
require_once "view/header.php"; // css
require_once "view/modal.php"; // modal

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
$filterDelete = "deleted";
if (isset($_GET["deleteFilter"])) {
  $jumlah = agregasiData("users", "id", "count", "flag", $filterDelete);
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
<a href="?modal=block&show=showEdit">ADD USER</a><br>

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
          <a href="?edit=<?php echo $row['id']; ?>&modal=block&show=showEdit">Edit</a> |
          <a href="?idDelFlag=<?php echo $row['id']; ?>&modal=block&show=showFlag">DeleteFlag</a> |
          <a href="?idDelId=<?php echo $row['id']; ?>&modal=block&show=showId">DeleteId</a>
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

