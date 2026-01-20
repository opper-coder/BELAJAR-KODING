<?php
if (!function_exists('user_role')) {
    function user_role(): ?string {
        return $_SESSION['role'] ?? null;
    }

    function has_role(string|array $roles): bool {
        $current_role = user_role();
        if (!$current_role) return false;
        return in_array($current_role, (array) $roles, true);
    }

    function require_role(string|array $roles): void {
        if (!isset($_SESSION['user_id'])) {
            header('Location: /login.php');
            exit;
        }
        if (!has_role($roles)) {
            http_response_code(403);
            // Anda bisa me-redirect ke dashboard dengan flash message
            die('Error 403: Akses Ditolak. Anda tidak memiliki izin untuk halaman ini.');
        }
    }
}
