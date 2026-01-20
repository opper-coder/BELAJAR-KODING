<?php
$title = 'Register';
require_once __DIR__ . '/partials/header.php';

// Jika sudah login, jangan boleh register
if (is_logged_in()) {
    header('Location: dashboard.php');
    exit;
}
?>

<h2>Pendaftaran Akun</h2>

<form method="POST" action="../actions/register.php">
    <!-- TEST 1: Cek apakah CSRF Token tergenerate -->
    <input type="hidden" name="csrf_token" value="<?= csrf_token() ?>">

    <div>
        <label>Username (4-20 karakter, Alfanumerik):</label><br>
        <input type="text" name="username" value="<?= htmlspecialchars(flash_old('username')) ?>" required>
    </div>

    <div style="margin-top:10px">
        <label>Password (Min. 4 karakter):</label><br>
        <input type="password" name="password" required>
    </div>

    <div style="margin-top:10px">
        <button type="submit">Daftar Sekarang</button>
    </div>
</form>

<p>Sudah punya akun? <a href="login.php">Login di sini</a></p>

<?php require_once __DIR__ . '/partials/footer.php'; ?>

