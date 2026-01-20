<?php
if (!function_exists('login_session')) {
    function login_session(array $user) {
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();
        session_regenerate_id(true);
        $_SESSION['user_id']  = $user['id'];
        $_SESSION['username'] = $user['username'];
        $_SESSION['role']     = $user['role'] ?? 'user';
    }

    function is_logged_in(): bool {
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();
        return isset($_SESSION['user_id']);
    }

    function logout_session() {
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();
        $_SESSION = [];
        if (ini_get('session.use_cookies')) {
            $p = session_get_cookie_params();
            setcookie(session_name(), '', time() - 42000, 
                $p['path'], $p['domain'], $p['secure'], $p['httponly']
            );
        }
        session_destroy();
    }
}
