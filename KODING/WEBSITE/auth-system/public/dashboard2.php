<?php
require_once __DIR__ . '/../includes/bootstrap.php';

// Pastikan user sudah login
require_login();

/**
 * Authorization Guard:
 * User biasa dilempar ke halaman user
 */
if (has_role('user')) {
    header('Location: enduser.php');
    exit;
}

$title = 'Dashboard Admin';
require_once __DIR__ . '/partials/header.php';
?>

<h2>Dashboard Management</h2>
<p>Selamat datang, Anda login sebagai: <b><?= htmlspecialchars(user_role()) ?></b></p>

<hr>

<div class="dashboard-menu">
    <?php if (has_role('superadmin')): ?>
        <section>
            <h3>Owner Area</h3>
            <button>Role Management</button>
            <button>System Settings</button>
        </section>
    <?php endif; ?>

    <?php if (has_role(['superadmin', 'admin'])): ?>
        <section>
            <h3>Admin Area</h3>
            <button>User Management</button>
            <button>Audit Logs</button>
        </section>
    <?php endif; ?>

    <?php if (has_role(['superadmin', 'admin', 'collector'])): ?>
        <button>Data Collection</button>
    <?php endif; ?>

    <?php if (has_role(['superadmin', 'admin', 'collector', 'reseller'])): ?>
        <button>Sales Report</button>
    <?php endif; ?>
</div>

<p><a href="../actions/logout.php" onclick="return confirm('Yakin ingin keluar?')">Logout</a></p>

<?php require_once __DIR__ . '/partials/footer.php'; ?>
