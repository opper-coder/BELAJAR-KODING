<?php
require_once __DIR__ . '/../../includes/bootstrap.php';
require_once __DIR__ . '/../../includes/crud.php';
require_once __DIR__ . '/../../includes/form.php';

require_login();

// 1. Logika Ambil Data (Jika Edit)
$id = isset($_GET['id']) ? (int)$_GET['id'] : null;
$data = $id ? crud_find('products', $id) : [];

$title = $id ? 'Edit Produk' : 'Tambah Produk';
require_once __DIR__ . '/../../public/partials/header.php';
?>

<h2><?= $title ?></h2>

<form action="action_test.php" method="POST">
    <input type="hidden" name="csrf_token" value="<?= csrf_token() ?>">
    
    <?php 
    // Jika edit, kirimkan ID tersembunyi
    if ($id) form_input('hidden', 'id', '', $id);

    // Gunakan flash_old jika ada, jika tidak gunakan data dari DB (untuk Edit)
    form_input('text', 'name', 'Nama Barang', flash_old('name', $data['name'] ?? ''));
    
    form_input('number', 'price', 'Harga Satuan', flash_old('price', $data['price'] ?? ''));

    // Contoh Select Option
    form_input('select', 'category', 'Kategori', flash_old('category', $data['category'] ?? ''), [
        'Elektronik' => 'Elektronik',
        'Alat Kantor' => 'Alat Kantor',
        'Hobi' => 'Hobi'
    ]);
    ?>

    <button type="submit"><?= $id ? 'Update Data' : 'Simpan Baru' ?></button>
    <a href="list.php">Batal</a>
</form>

<?php require_once __DIR__ . '/../../public/partials/footer.php'; ?>
