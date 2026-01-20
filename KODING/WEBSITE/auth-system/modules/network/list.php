<?php
require_once __DIR__ . '/../../includes/bootstrap.php';
require_once __DIR__ . '/../../includes/crud.php';
require_once __DIR__ . '/../../includes/form.php';

require_login();

// 1. Tangkap Filter dari URL
$loc    = $_GET['location'] ?? '';
$srv    = $_GET['server'] ?? '';
$pool   = $_GET['pool'] ?? '';

// PERBAIKAN: Definisikan variabel $page
$page   = isset($_GET['page']) ? (int)$_GET['page'] : 1;

// 2. Siapkan Data untuk Select Option
$locations = crud_distinct('networks', 'location');
$servers   = $loc ? crud_distinct('networks', 'server', ['location' => $loc]) : [];
$pools     = ($loc && $srv) ? crud_distinct('networks', 'pool', ['location' => $loc, 'server' => $srv]) : [];

// 3. Bangun Filter WHERE
$where = [];
if ($loc)  $where['location'] = $loc;
if ($srv)  $where['server']   = $srv;
if ($pool) $where['pool']     = $pool;

// 4. Ambil Data Tabel (Gunakan variabel $page yang sudah didefinisikan)
$networks = crud_filter_paginate('networks', $where, '', [], $page, 100);

$title = 'Network Inventory';
require_once __DIR__ . '/../../public/partials/header.php';
?>

<h3>🌐 Network Inventory Filter</h3>

<form method="GET" id="filterForm" style="display: flex; gap: 10px; margin-bottom: 20px;">
    <!-- Select Location -->
    <div style="flex:1">
        <label>Location:</label>
        <select name="location" onchange="document.getElementById('filterForm').submit()">
            <option value="">-- All Locations --</option>
            <?php foreach ($locations as $l): ?>
                <option value="<?= $l ?>" <?= $loc == $l ? 'selected' : '' ?>><?= $l ?></option>
            <?php endforeach; ?>
        </select>
    </div>

    <!-- Select Server (Hanya muncul jika Location dipilih) -->
    <div style="flex:1">
        <label>Server:</label>
        <select name="server" onchange="document.getElementById('filterForm').submit()" <?= !$loc ? 'disabled' : '' ?>>
            <option value="">-- All Servers --</option>
            <?php foreach ($servers as $s): ?>
                <option value="<?= $s ?>" <?= $srv == $s ? 'selected' : '' ?>><?= $s ?></option>
            <?php endforeach; ?>
        </select>
    </div>

    <!-- Select Pool (Hanya muncul jika Server dipilih) -->
    <div style="flex:1">
        <label>Pool:</label>
        <select name="pool" onchange="document.getElementById('filterForm').submit()" <?= !$srv ? 'disabled' : '' ?>>
            <option value="">-- All Pools --</option>
            <?php foreach ($pools as $p): ?>
                <option value="<?= $p ?>" <?= $pool == $p ? 'selected' : '' ?>><?= $p ?></option>
            <?php endforeach; ?>
        </select>
    </div>

    <div style="align-self: flex-end;">
        <a href="list.php">Reset Filter</a>
    </div>
</form>

<table border="1" cellpadding="10" width="100%" style="border-collapse: collapse;">
    <thead>
        <tr style="background: #f4f4f4;">
            <th>Location</th>
            <th>Server</th>
            <th>Pool</th>
            <th>IP Address</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($networks['data'] as $row): ?>
        <tr>
            <td><?= htmlspecialchars($row['location']) ?></td>
            <td><?= htmlspecialchars($row['server']) ?></td>
            <td><?= htmlspecialchars($row['pool']) ?></td>
            <td><?= htmlspecialchars($row['ip_address'] ?? '-') ?></td>
        </tr>
        <?php endforeach; ?>
        <?php if (!$networks['data']): ?>
            <tr><td colspan="4" align="center">Pilih filter untuk melihat data.</td></tr>
        <?php endif; ?>
    </tbody>
</table>

<?php require_once __DIR__ . '/../../public/partials/footer.php'; ?>
