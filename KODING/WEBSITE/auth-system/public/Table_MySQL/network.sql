CREATE TABLE networks (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    location VARCHAR(100),
    server VARCHAR(100),
    pool VARCHAR(100),
    ip_address VARCHAR(45)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
