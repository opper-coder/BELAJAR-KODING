<?php
require_once __DIR__ . '/../includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';
$token    = $_POST['csrf_token'] ?? '';
$remember = !empty($_POST['remember']);
$ip       = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

// 1. Verifikasi CSRF
if (!verify_csrf($token)) {
    redirect_flash('../public/login.php', 'error', 'csrf_invalid');
}

// 2. Cek Rate Limit (Brute Force)
if (is_login_blocked($username, $ip)) {
    redirect_flash('../public/login.php', 'error', 'login_blocked');
}

// 3. Proses Login
$user = login_user($username, $password);

if (!$user) {
    record_failed_login($username, $ip);
    
    // Pastikan array ini ada dan key-nya sesuai: ['username' => $username]
    redirect_flash('../public/login.php', 'error', 'login_failed', ['username' => $username]);
}

// 4. Sukses Login
clear_login_attempts($username, $ip);
login_session($user);

if ($remember) {
    set_remember_me((int) $user['id']);
}

redirect_flash('../public/dashboard.php', 'success', 'login_success');
