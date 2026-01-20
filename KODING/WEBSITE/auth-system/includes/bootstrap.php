<?php
// Load Config & DB Pertama kali
require_once __DIR__ . '/../config/config.php';
require_once __DIR__ . '/../config/database.php';

// Load All Helpers
require_once __DIR__ . '/session.php';
require_once __DIR__ . '/flash.php';
require_once __DIR__ . '/remember.php';
require_once __DIR__ . '/role.php';
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/csrf.php';
require_once __DIR__ . '/validation.php';
require_once __DIR__ . '/rate_limit.php';

// Pastikan Session Aktif
if (session_status() !== PHP_SESSION_ACTIVE) {
    session_start();
}

// Global Guard: Auto login via remember me
if (!is_logged_in() && isset($_COOKIE['remember_me'])) {
    $user = check_remember_me();
    if ($user) {
        login_session($user);
    }
}
