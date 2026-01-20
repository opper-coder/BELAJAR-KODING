<?php
require_once __DIR__ . '/../includes/bootstrap.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

$username = trim($_POST['username'] ?? '');
$password = $_POST['password'] ?? '';
$token    = $_POST['csrf_token'] ?? '';

if (!verify_csrf($token)) {
    redirect_flash('../public/register.php', 'error', 'csrf_invalid');
}

if (!validate_username($username) || !validate_password($password)) {
    redirect_flash('../public/register.php', 'error', 'invalid_input', ['username' => $username]);
}

if (user_exists($username)) {
    redirect_flash('../public/register.php', 'error', 'user_exists', ['username' => $username]);
}

if (!register_user($username, $password)) {
    redirect_flash('../public/register.php', 'error', 'register_failed');
}

redirect_flash('../public/login.php', 'success', 'register_success');
