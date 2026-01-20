<?php
require_once __DIR__ . '/../includes/bootstrap.php';

// 1. ACCESS GUARD (Redirect)
require_login();

// Jika role adalah 'user', tendang ke halaman enduser
if (has_role('user')) {
    header('Location: enduser.php');
    exit;
}

$title = 'Test Role Dashboard';
require_once __DIR__ . '/partials/header.php';
?>

<h2>Manajemen Hak Akses</h2>
<p>Anda login sebagai: <b><?= htmlspecialchars(user_role()) ?></b></p>
<hr>

<div class="menu-container">
    <h3>Daftar Akses Tombol:</h3>

    <!-- Skenario 1: Superadmin Saja yang bisa melihat -->
    <?php if (has_role('superadmin')): ?>
        <button style="background: red; color: white;">[KHUSUS SUPERADMIN]</button>
    <?php endif; ?>

    <!-- Skenario 2: Admin ke atas -->
    <?php if (has_role(['superadmin', 'admin'])): ?>
        <button style="background: blue; color: white;">[MENU ADMIN]</button>
    <?php endif; ?>

    <!-- Skenario 3: Collector ke atas -->
    <?php if (has_role(['superadmin', 'admin', 'collector'])): ?>
        <button style="background: green; color: white;">[MENU COLLECTOR]</button>
    <?php endif; ?>

    <!-- Skenario 4: Reseller ke atas -->
    <?php if (has_role(['superadmin', 'admin', 'collector', 'reseller'])): ?>
        <button style="background: orange;">[MENU RESELLER]</button>
    <?php endif; ?>
    
    <!-- Tombol Umum untuk semua Staff (Bukan role 'user') -->
    <button>PROFIL STAFF</button>
</div>

<p style="margin-top: 20px;">
    <a href="../actions/logout.php">Logout</a>
</p>

<?php require_once __DIR__ . '/partials/footer.php'; ?>
