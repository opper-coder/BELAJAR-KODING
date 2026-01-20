<?php
// Pastikan bootstrap dimuat sekali
require_once __DIR__ . '/../../includes/bootstrap.php';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="<?= defined('APP_CHARSET') ? APP_CHARSET : 'UTF-8' ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($title ?? 'Auth System') ?></title>
    <style>
        .msg-error { background: #fee2e2; color: #991b1b; padding: 10px; margin-bottom: 10px; border: 1px solid #f87171; }
        .msg-success { background: #dcfce7; color: #166534; padding: 10px; margin-bottom: 10px; border: 1px solid #4ade80; }
    </style>
</head>
<body>

<nav>
    <a href="index.php">Home</a>
    <?php if (is_logged_in()): ?>
        | <a href="dashboard.php">Dashboard</a>
        | <a href="../actions/logout.php">Logout (<?= htmlspecialchars($_SESSION['username']) ?>)</a>
    <?php else: ?>
        | <a href="login.php">Login</a>
        | <a href="register.php">Register</a>
    <?php endif; ?>
</nav>
<hr>

<?php
/**
 * Global Flash Message Mapping
 */
$error_map = [
    'csrf_invalid'    => 'Sesi keamanan kadaluarsa, silakan ulangi.',
    'login_failed'    => 'Username atau password salah.',
    'login_blocked'   => 'Akses ditangguhkan karena terlalu banyak mencoba. Tunggu 10 menit.',
    'invalid_input'   => 'Format input tidak sesuai kriteria.',
    'user_exists'     => 'Nama pengguna sudah terdaftar.',
    'register_failed' => 'Gagal mendaftarkan akun, silakan coba lagi.',
    'insert_failed'   => 'Gagal menyimpan data ke database.', 
    'update_failed'   => 'Gagal memperbarui data.'           
];

$success_map = [
    'login_success'    => 'Selamat datang kembali!',
    'register_success' => 'Pendaftaran berhasil! Silakan login.',
    'logout_success'   => 'Anda telah berhasil keluar.',
    'insert_success'   => 'Data berhasil ditambahkan!',     
    'update_success'   => 'Data berhasil diperbarui!'
];

show_flash('error', $error_map);
show_flash('success', $success_map);
?>

