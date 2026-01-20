<?php
require_once __DIR__ . '/../../includes/bootstrap.php';
require_once __DIR__ . '/../../includes/crud.php';

require_login();

$id = isset($_GET['id']) ? (int)$_GET['id'] : null;

if ($id) {
    $result = crud_delete('products', $id);
    if ($result) {
        redirect_flash('list.php', 'success', 'delete_success');
    } else {
        redirect_flash('list.php', 'error', 'delete_failed');
    }
}

redirect_flash('list.php', 'error', 'invalid_id');
