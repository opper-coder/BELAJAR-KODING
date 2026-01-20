<?php
require_once __DIR__ . '/../includes/bootstrap.php';

// 1. Guard: Pastikan sudah login
require_login();

// 2. Opsi: Jika admin nyasar ke sini, beri navigasi kembali ke dashboard
$isAdmin = has_role(['superadmin', 'admin', 'collector', 'reseller']);

$title = 'Halaman User';
require_once __DIR__ . '/partials/header.php';
?>

<div class="container">
    <header>
        <h1>Halo, <?= htmlspecialchars($_SESSION['username']) ?>!</h1>
        <p>Status Akun: <span class="badge">Standard User</span></p>
    </header>

    <hr>

    <main>
        <section class="user-content">
            <h3>Selamat Datang</h3>
            <p>Ini adalah halaman khusus untuk pengguna publik/client. Anda tidak memiliki akses ke panel manajemen admin.</p>
            
            <div class="user-actions">
                <button onclick="alert('Fitur Profil Segera Hadir')">Edit Profil</button>
                <button onclick="alert('Belum ada notifikasi')">Notifikasi</button>
            </div>
        </section>

        <?php if ($isAdmin): ?>
            <div style="margin-top: 20px; padding: 15px; background: #f0f0f0; border: 1px solid #ccc;">
                <p><b>Info Staff:</b> Anda memiliki akses admin. Klik tombol di bawah untuk kembali ke panel kontrol.</p>
                <a href="dashboard.php" style="color: blue; text-decoration: underline;">Kembali ke Dashboard Admin</a>
            </div>
        <?php endif; ?>
    </main>

    <footer style="margin-top: 50px;">
        <p><a href="../actions/logout.php" style="color: red;">Keluar dari Sistem</a></p>
    </footer>
</div>

<?php require_once __DIR__ . '/partials/footer.php'; ?>
