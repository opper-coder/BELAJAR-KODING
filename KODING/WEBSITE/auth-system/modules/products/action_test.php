<?php
require_once __DIR__ . '/../../includes/bootstrap.php';
require_once __DIR__ . '/../../includes/crud.php';

// 1. Cek Keamanan
require_login();
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    die("Akses ditolak");
}

// 2. Ambil Input
$id    = isset($_POST['id']) ? (int)$_POST['id'] : null;
$input = [
    'name'     => trim($_POST['name'] ?? ''),
    'price'    => (float)($_POST['price'] ?? 0),
    'category' => trim($_POST['category'] ?? 'Umum')
];

// 3. Validasi menggunakan library validation.php
$errors = validate_input($input, [
    'name'     => 'required',
    'category' => 'required'
]);

// Validasi tambahan manual untuk harga
if ($input['price'] <= 0) {
    $errors[] = "Harga harus lebih besar dari 0.";
}

// 4. Penanganan jika Validasi Gagal
if (!empty($errors)) {
    // Gabungkan error jadi string atau kirim array
    set_flash('error', 'invalid_input'); 
    redirect_flash('form_test.php', 'error', 'invalid_input', $_POST);
}

// 5. Eksekusi CRUD (Insert atau Update)
if ($id) {
    // TEST UPDATE
    $result = crud_update('products', $id, $input);
    $msg = $result ? 'update_success' : 'update_failed';
} else {
    // TEST INSERT
    $result = crud_insert('products', $input);
    $msg = $result ? 'insert_success' : 'insert_failed';
}

// 6. Redirect dengan Flash Message (Feedback UX)
if ($result) {
    redirect_flash('form_test.php', 'success', $msg);
} else {
    redirect_flash('form_test.php', 'error', $msg, $_POST);
}

// Bagian akhir action_test.php
if ($result) {
    // Pastikan kode 'insert_success' atau 'update_success' sesuai dengan header.php
    redirect_flash('form_test.php', 'success', $id ? 'update_success' : 'insert_success');
} else {
    redirect_flash('form_test.php', 'error', $id ? 'update_failed' : 'insert_failed', $_POST);
}

