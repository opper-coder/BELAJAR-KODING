<?php
require_once __DIR__ . '/../../includes/bootstrap.php';
require_once __DIR__ . '/../../includes/crud.php';

require_login(); // Hanya user login yang bisa ngetes

echo "<h2>🛠️ Testing Modul Products</h2>";

// --- 1. TEST INSERT ---
$newProduct = [
    'name'     => 'Router WiFi 6',
    'category' => 'Elektronik',
    'price'    => 750000,
    'stock'    => 10
];
$insertStatus = crud_insert('products', $newProduct);
echo $insertStatus ? "✅ Insert Berhasil<br>" : "❌ Insert Gagal<br>";

// --- 2. TEST ALL ---
$allProducts = crud_all('products');
echo "📦 Total produk di DB: " . count($allProducts) . "<br>";

// --- 3. TEST FIND ---
$lastId = (int)db()->insert_id;
$product = crud_find('products', $lastId);
echo "🔍 Mencari ID $lastId: " . ($product ? $product['name'] : 'Tidak ketemu') . "<br>";

// --- 4. TEST UPDATE ---
$updateData = ['stock' => 25, 'price' => 700000];
$updateStatus = crud_update('products', $lastId, $updateData);
echo $updateStatus ? "✅ Update Berhasil<br>" : "❌ Update Gagal<br>";

// --- 5. TEST SUM ---
$totalStok = crud_sum('products', 'stock', ['category' => 'Elektronik']);
echo "💰 Total Stok Elektronik: " . $totalStok . "<br>";

// --- 6. TEST FILTER & PAGINATE ---
$keyword = 'Router';
$searchFields = ['name'];
$filter = crud_filter_paginate('products', ['category' => 'Elektronik'], $keyword, $searchFields, 1, 5);

echo "📑 Hasil Filter: " . $filter['total'] . " data ditemukan. Halaman: " . $filter['page'] . "/" . $filter['pages'] . "<br>";

// --- 7. TEST DELETE ---
// (Opsional) Jika ingin tes hapus, buka komentar di bawah:
// $deleteStatus = crud_delete('products', $lastId);
// echo $deleteStatus ? "🗑️ Delete Berhasil" : "❌ Delete Gagal";
