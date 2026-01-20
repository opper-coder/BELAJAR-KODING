<?php
/**
 * CSRF Protection (2026 Standards)
 */
if (!function_exists('csrf_token')) {
    function csrf_token(): string {
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();
        
        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }
        return $_SESSION['csrf_token'];
    }

    function verify_csrf(?string $token): bool {
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();
        
        if (!$token || empty($_SESSION['csrf_token'])) {
            return false;
        }

        $isValid = hash_equals($_SESSION['csrf_token'], $token);
        
        // Hapus token setelah verifikasi (Single Use Token)
        unset($_SESSION['csrf_token']);
        
        return $isValid;
    }
}
