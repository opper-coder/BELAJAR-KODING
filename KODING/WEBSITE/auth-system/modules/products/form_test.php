<?php
$title = 'Test CRUD & Validation';
require_once __DIR__ . '/../../public/partials/header.php';
require_once __DIR__ . '/../../includes/crud.php';

// Mapping pesan sukses/error khusus modul produk
$product_msgs = [
    'insert_success' => 'Produk baru berhasil ditambahkan!',
    'update_success' => 'Data produk berhasil diperbarui!',
    'invalid_input'  => 'Mohon periksa kembali inputan Anda.',
    'insert_failed'  => 'Gagal menyimpan ke database.'
];

show_flash('success', $product_msgs);
show_flash('error', $product_msgs);
?>

<h3>🛒 Kelola Produk</h3>

<form action="action_test.php" method="POST">
    <!-- CSRF Protection -->
    <input type="hidden" name="csrf_token" value="<?= csrf_token() ?>">
    
    <!-- Input ID (Kosongkan untuk Test Insert, Isi untuk Test Update) -->
    <input type="hidden" name="id" value="<?= htmlspecialchars(flash_old('id')) ?>">

    <div style="margin-bottom: 10px;">
        <label>Nama Produk:</label><br>
        <input type="text" name="name" value="<?= htmlspecialchars(flash_old('name')) ?>">
    </div>

    <div style="margin-bottom: 10px;">
        <label>Harga:</label><br>
        <input type="number" name="price" value="<?= htmlspecialchars(flash_old('price')) ?>">
    </div>

    <div style="margin-bottom: 10px;">
        <label>Kategori:</label><br>
        <input type="text" name="category" value="<?= htmlspecialchars(flash_old('category')) ?>">
    </div>

    <button type="submit">Simpan Produk</button>
</form>

<hr>
<a href="../../public/dashboard.php">Kembali ke Dashboard</a>

<?php require_once __DIR__ . '/../../public/partials/footer.php'; ?>
