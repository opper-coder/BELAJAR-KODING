<?php
/**
 * Reusable CRUD Library 2026 - Final Version
 * Desain: Functional, Ringan, Aman
 */

require_once __DIR__ . '/../config/database.php';

/**
 * Helper internal untuk mendeteksi tipe data bind_param
 */
if (!function_exists('_crud_types')) {
    function _crud_types(array $values): string {
        $types = '';
        foreach ($values as $v) {
            if (is_int($v)) $types .= 'i';
            elseif (is_double($v)) $types .= 'd';
            else $types .= 's';
        }
        return $types;
    }
}

/**
 * Ambil semua data dari sebuah tabel
 */
function crud_all(string $table): array {
    $sql = "SELECT * FROM `$table` ORDER BY id DESC";
    $res = mysqli_query(db(), $sql);
    if (!$res) return [];
    return mysqli_fetch_all($res, MYSQLI_ASSOC);
}

/**
 * Cari satu data berdasarkan ID
 */
function crud_find(string $table, int $id): ?array {
    $stmt = mysqli_prepare(db(), "SELECT * FROM `$table` WHERE id = ? LIMIT 1");
    if (!$stmt) return null;
    mysqli_stmt_bind_param($stmt, 'i', $id);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($res);
    mysqli_stmt_close($stmt);
    return $row ?: null;
}

/**
 * Tambah data baru
 */
function crud_insert(string $table, array $data): bool {
    $fields = array_keys($data);
    $place  = array_fill(0, count($fields), '?');
    $sql    = "INSERT INTO `$table` (`" . implode('`,`', $fields) . "`) VALUES (" . implode(',', $place) . ")";
    
    $stmt = mysqli_prepare(db(), $sql);
    if (!$stmt) return false;
    
    mysqli_stmt_bind_param($stmt, _crud_types($data), ...array_values($data));
    $ok = mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    return $ok;
}

/**
 * Update data berdasarkan ID
 */
function crud_update(string $table, int $id, array $data): bool {
    $set = [];
    foreach ($data as $key => $val) { $set[] = "`$key` = ?"; }
    $sql = "UPDATE `$table` SET " . implode(',', $set) . " WHERE id = ?";
    
    $stmt = mysqli_prepare(db(), $sql);
    if (!$stmt) return false;

    $types = _crud_types($data) . 'i';
    $vals  = array_values($data);
    $vals[] = $id;

    mysqli_stmt_bind_param($stmt, $types, ...$vals);
    $ok = mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    return $ok;
}

/**
 * Hapus data berdasarkan ID
 */
function crud_delete(string $table, int $id): bool {
    $stmt = mysqli_prepare(db(), "DELETE FROM `$table` WHERE id = ?");
    if (!$stmt) return false;
    mysqli_stmt_bind_param($stmt, 'i', $id);
    $ok = mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);
    return $ok;
}

/**
 * Menghitung jumlah (SUM) dari kolom tertentu
 */
function crud_sum(string $table, string $column, array $where = []): float {
    $conds = [];
    $vals  = [];
    foreach ($where as $f => $v) {
        $conds[] = "`$f` = ?";
        $vals[]  = $v;
    }
    
    $whereSql = $conds ? 'WHERE ' . implode(' AND ', $conds) : '';
    $sql = "SELECT SUM(`$column`) as total FROM `$table` $whereSql";
    
    $stmt = mysqli_prepare(db(), $sql);
    if (!$stmt) return 0;

    if ($vals) {
        mysqli_stmt_bind_param($stmt, _crud_types($vals), ...$vals);
    }
    
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    $row = mysqli_fetch_assoc($res);
    mysqli_stmt_close($stmt);
    
    return (float) ($row['total'] ?? 0);
}

/**
 * Filter, Search, dan Pagination Lengkap
 */

function crud_filter_paginate(
    string $table,
    array $where = [],
    string $keyword = '',
    array $searchFields = [], // Default kosong
    int $page = 1,
    int $perPage = 10
): array {
    $page   = max(1, $page);
    $offset = ($page - 1) * $perPage;
    $conds  = [];
    $values = [];

    // Filter WHERE
    foreach ($where as $f => $v) { 
        if ($v !== '') {
            $conds[] = "`$f` = ?"; 
            $values[] = $v; 
        }
    }

    // Filter LIKE (Hanya jika keyword DAN searchFields ada)
    if ($keyword !== '' && !empty($searchFields)) {
        $likes = [];
        foreach ($searchFields as $f) { 
            $likes[] = "`$f` LIKE ?"; 
            $values[] = "%$keyword%"; 
        }
        $conds[] = '(' . implode(' OR ', $likes) . ')';
    }

    $whereSql = $conds ? 'WHERE ' . implode(' AND ', $conds) : '';

    // 1. TOTAL
    $sqlTotal = "SELECT COUNT(*) total FROM `$table` $whereSql";
    $stmtT = mysqli_prepare(db(), $sqlTotal);
    if (!$stmtT) {
        error_log("CRUD Error (Total): " . mysqli_error(db()));
        return ['data' => [], 'total' => 0, 'page' => 1, 'pages' => 0];
    }
    
    if ($values) mysqli_stmt_bind_param($stmtT, _crud_types($values), ...$values);
    mysqli_stmt_execute($stmtT);
    $total = (int) mysqli_fetch_assoc(mysqli_stmt_get_result($stmtT))['total'];
    mysqli_stmt_close($stmtT);

    // 2. DATA
    $sql = "SELECT * FROM `$table` $whereSql ORDER BY id DESC LIMIT ? OFFSET ?";
    $stmt = mysqli_prepare(db(), $sql);
    if (!$stmt) {
        error_log("CRUD Error (Data): " . mysqli_error(db()));
        return ['data' => [], 'total' => $total, 'page' => $page, 'pages' => (int)ceil($total/$perPage)];
    }

    $finalValues = array_merge($values, [$perPage, $offset]);
    mysqli_stmt_bind_param($stmt, _crud_types($finalValues), ...$finalValues);
    mysqli_stmt_execute($stmt);
    
    $res  = mysqli_stmt_get_result($stmt);
    $data = mysqli_fetch_all($res, MYSQLI_ASSOC);
    mysqli_stmt_close($stmt);

    return [
        'data'  => $data,
        'total' => $total,
        'page'  => $page,
        'pages' => (int) ceil($total / $perPage)
    ];
}

/**
 * Ambil data unik dari kolom tertentu dengan filter opsional
 */
function crud_distinct(string $table, string $column, array $where = []): array {
    $conds = [];
    $vals  = [];
    foreach ($where as $f => $v) {
        if ($v !== '') {
            $conds[] = "`$f` = ?";
            $vals[]  = $v;
        }
    }
    $whereSql = $conds ? 'WHERE ' . implode(' AND ', $conds) : '';
    $sql = "SELECT DISTINCT `$column` FROM `$table` $whereSql ORDER BY `$column` ASC";
    
    $stmt = mysqli_prepare(db(), $sql);
    if (!$stmt) return [];
    if ($vals) mysqli_stmt_bind_param($stmt, _crud_types($vals), ...$vals);
    
    mysqli_stmt_execute($stmt);
    $res = mysqli_fetch_all(mysqli_stmt_get_result($stmt), MYSQLI_ASSOC);
    mysqli_stmt_close($stmt);
    return array_column($res, $column);
}

