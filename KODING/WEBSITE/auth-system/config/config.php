<?php
/**
 * Global Configuration
 */

define('BASE_PATH', dirname(__DIR__));

// Database configuration
define('DB_HOST', 'localhost');
define('DB_NAME', 'boxits5');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_PORT', '3306'); // Tambahan port

// Environment
define('APP_ENV', 'development'); // Ubah ke production saat live
define('APP_DEBUG', APP_ENV === 'development');

// Global defaults
define('APP_TIMEZONE', 'Asia/Makassar');
define('APP_CHARSET', 'utf8mb4'); // Konsistensi dengan MySQL

