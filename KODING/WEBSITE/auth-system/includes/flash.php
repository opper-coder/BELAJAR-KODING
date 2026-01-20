<?php
/**
 * Flash Message Helper - Versi Stabil 2026
 */

if (!function_exists('set_flash')) {
    
    function _ensure_session() {
        if (session_status() !== PHP_SESSION_ACTIVE) session_start();
    }

    function set_flash(string $type, string $code): void {
        _ensure_session();
        $_SESSION['flash']['message'][$type] = $code;
    }

    function redirect_flash(string $url, string $type, string $code, array $old = []): void {
        _ensure_session();
        set_flash($type, $code);
        if (!empty($old)) {
            $_SESSION['flash']['old'] = $old;
        }
        header('Location: ' . $url);
        exit;
    }

    function get_flash(string $type): ?string {
        _ensure_session();
        $code = $_SESSION['flash']['message'][$type] ?? null;
        unset($_SESSION['flash']['message'][$type]);
        return $code;
    }

    function show_flash(string $type, array $map): void {
        $code = get_flash($type);
        if ($code && isset($map[$code])) {
            echo sprintf('<div class="msg-%s">%s</div>', 
                htmlspecialchars($type), htmlspecialchars($map[$code]));
        }
    }

    function flash_old(string $key, $default = '') {
        _ensure_session();
        // Ambil data tapi jangan di-unset di sini agar bisa dipakai berkali-kali di satu halaman
        return $_SESSION['flash']['old'][$key] ?? $default;
    }

    /**
     * HANYA ADA SATU DEKLARASI DI SINI
     * Dipanggil di footer.php untuk membersihkan data setelah halaman selesai tampil
     */
    function clear_flash_old(): void {
        _ensure_session();
        if (isset($_SESSION['flash']['old'])) {
            unset($_SESSION['flash']['old']);
        }
    }
}
