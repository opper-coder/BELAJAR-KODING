<?php
require_once __DIR__ . '/../../includes/bootstrap.php';
require_once __DIR__ . '/../../includes/crud.php';

require_login();

// 1. Tangkap Parameter (Search & Pagination)
$q    = $_GET['q'] ?? '';
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$limit = 5; // Batasi 5 data per halaman untuk tes pagination

// 2. Eksekusi Library CRUD
// Kita cari di kolom 'name' dan 'category'
$result = crud_filter_paginate('products', [], $q, ['name', 'category'], $page, $limit);

$title = 'Daftar Produk';
require_once __DIR__ . '/../../public/partials/header.php';
?>

<h2>📦 Manajemen Produk</h2>

<!-- Form Pencarian -->
<form method="GET" style="margin-bottom: 20px;">
    <input type="text" name="q" value="<?= htmlspecialchars($q) ?>" placeholder="Cari nama atau kategori...">
    <button type="submit">Cari</button>
    <?php if($q): ?> <a href="list.php">Reset</a> <?php endif; ?>
</form>

<div style="margin-bottom: 10px;">
    <a href="form.php" style="padding: 5px 10px; background: green; color: white; text-decoration: none; border-radius: 3px;">+ Tambah Produk</a>
</div>

<table border="1" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse;">
    <thead>
        <tr style="background: #eee;">
            <th>ID</th>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Harga</th>
            <th>Stok</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        <?php if ($result['total'] > 0): ?>
            <?php foreach ($result['data'] as $row): ?>
                <tr>
                    <td><?= $row['id'] ?></td>
                    <td><?= htmlspecialchars($row['name']) ?></td>
                    <td><?= htmlspecialchars($row['category']) ?></td>
                    <td>Rp <?= number_format($row['price'], 0, ',', '.') ?></td>
                    <td><?= $row['stock'] ?></td>
                    <td>
                        <a href="form.php?id=<?= $row['id'] ?>">Edit</a> | 
                        <a href="action_delete.php?id=<?= $row['id'] ?>" 
                           onclick="return confirm('Yakin ingin menghapus data ini?')" 
                           style="color: red;">Hapus</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        <?php else: ?>
            <tr>
                <td colspan="6" align="center">Data tidak ditemukan.</td>
            </tr>
        <?php endif; ?>
    </tbody>
</table>

<!-- Navigasi Pagination -->
<div style="margin-top: 20px;">
    <span>Halaman: </span>
    <?php for ($i = 1; $i <= $result['pages']; $i++): ?>
        <a href="?page=<?= $i ?>&q=<?= urlencode($q) ?>" 
           style="margin-right: 5px; <?= $i == $page ? 'font-weight: bold; text-decoration: underline;' : '' ?>">
           <?= $i ?>
        </a>
    <?php endfor; ?>
</div>

<?php require_once __DIR__ . '/../../public/partials/footer.php'; ?>
