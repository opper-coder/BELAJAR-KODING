<?php
require_once __DIR__ . '/../includes/bootstrap.php';

if (is_logged_in()) {
    header('Location: dashboard.php');
    exit;
}

// Map pesan untuk show_flash
$messages = [
    'csrf_invalid'  => 'Keamanan sesi kadaluarsa, silakan coba lagi.',
    'login_blocked' => 'Terlalu banyak percobaan. Silakan tunggu 1 menit.',
    'login_failed'  => 'Username atau password salah.',
    'register_success' => 'Registrasi berhasil! Silakan login.'
];
?>
<!-- Tampilkan Flash Message -->
<?php show_flash('error', $messages); ?>
<?php show_flash('success', $messages); ?>

<form method="POST" action="../actions/login.php">
    <input type="hidden" name="csrf_token" value="<?= csrf_token() ?>">
    <label>Username</label>
    <input type="text" name="username" value="<?= htmlspecialchars(flash_old('username')) ?>" required>
    
    <label>Password</label>
    <input type="password" name="password" required>
    
    <label><input type="checkbox" name="remember"> Ingat Saya</label>
    <button type="submit">Login</button>
</form>
