
CREATE TABLE login_attempts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    attempts INT NOT NULL DEFAULT 1,
    last_attempt DATETIME NOT NULL,
    blocked_until DATETIME NULL,
    UNIQUE INDEX idx_user_ip (username, ip_address)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
