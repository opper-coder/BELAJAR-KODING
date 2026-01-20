<?php
require_once __DIR__ . '/../includes/bootstrap.php';

// Cek login sebelum menghapus
if (is_logged_in()) {
    $user_id = (int)$_SESSION['user_id'];
    
    // 1. Hapus token di database & cookie
    clear_remember_me($user_id);
    
    // 2. Hancurkan session
    logout_session();
}

// Redirect ke halaman login
header('Location: ../public/login.php');
exit;
