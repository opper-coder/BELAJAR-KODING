<?php
if (!function_exists('validate_username')) {
    function validate_username(string $username): bool {
        // Alfanumerik & underscore, 4-20 karakter
        return preg_match('/^[a-zA-Z0-9_]{4,20}$/', $username) === 1;
    }

    function validate_password(string $password): bool {
        // Minimal 4 karakter (bisa ditingkatkan sesuai kebutuhan)
        return strlen($password) >= 4;
    }

    /**
     * Reusable Validation
     * @param array $data (biasanya $_POST)
     * @param array $rules (nama field => tipe aturan)
     */
    function validate_input(array $data, array $rules): array {
        $errors = [];
        foreach ($rules as $field => $type) {
            $val = trim($data[$field] ?? '');
            if ($type === 'required' && $val === '') {
                $errors[] = "Field {$field} wajib diisi.";
            }
            if ($type === 'username' && !validate_username($val)) {
                $errors[] = "Format {$field} tidak valid.";
            }
        }
        return $errors;
    }
}


