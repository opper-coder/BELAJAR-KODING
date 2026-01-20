CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,

    role ENUM(
        'superadmin',
        'admin',
        'collector',
        'reseller',
        'user'
    ) NOT NULL DEFAULT 'user',

    remember_token CHAR(64) NULL,
    remember_expired DATETIME NULL,

    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL ON UPDATE CURRENT_TIMESTAMP,

    INDEX (role)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
