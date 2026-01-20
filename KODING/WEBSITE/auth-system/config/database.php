<?php
/**
 * Database Connection (Procedural Singleton)
 */

if (!function_exists('db')) {
    function db()
    {
        static $conn = null;

        if ($conn === null) {
            // Set error reporting untuk mysqli
            mysqli_report(MYSQLI_REPORT_OFF);

            $conn = @mysqli_connect(
                DB_HOST,
                DB_USER,
                DB_PASS,
                DB_NAME,
                defined('DB_PORT') ? DB_PORT : 3306
            );

            if (!$conn) {
                if (defined('APP_DEBUG') && APP_DEBUG === true) {
                    die('DB Connection failed: ' . mysqli_connect_error());
                }

                error_log('Database connection failed: ' . mysqli_connect_error());
                die('Service temporarily unavailable');
            }

            mysqli_set_charset($conn, defined('APP_CHARSET') ? APP_CHARSET : 'utf8mb4');
        }

        return $conn;
    }
}
