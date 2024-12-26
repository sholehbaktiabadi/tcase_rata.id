CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL
);

CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'completed', 'canceled') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE
);

CREATE TABLE OrderDetails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

CREATE TABLE Payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    payment_method ENUM('credit_card', 'ewallet', 'bank_transfer') NOT NULL,
    payment_channel ENUM('BCA_VA', 'BRI_VA', 'SHOPEEPAY_ID', 'BSI') NOT NULL,
    payment_status ENUM('pending', 'successful', 'failed') DEFAULT 'pending',
    amount DECIMAL(10, 2) NOT NULL,
    payment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(id) ON DELETE CASCADE
);

--Relasi Antar Tabel

-- Users -> Orders
-- Relasi satu-ke-banyak: Satu pengguna dapat memiliki banyak pesanan. (Users.id -> Orders.user_id).
 
-- Orders -> OrderDetails
-- Relasi satu-ke-banyak: Satu pesanan dapat memiliki banyak detail produk. (Orders.id -> OrderDetails.order_id).

-- Products -> OrderDetails
-- Relasi satu-ke-banyak: Satu produk dapat muncul di banyak pesanan. (Products.id -> OrderDetails.product_id).

-- Orders -> Payments
-- Relasi satu-ke-satu: Satu pesanan memiliki satu transaksi pembayaran. (Orders.id -> Payments.order_id).



-- Keputusan Desain

-- Indeks pada Kolom Pencarian:
-- Indeks pada kolom seperti username, email, dan order_id memastikan performa pencarian tetap optimal.

-- ENUM untuk Status dan Metode:
-- ENUM digunakan untuk memastikan validitas data dan menghindari kesalahan penulisan pada status pesanan atau metode pembayaran.

-- Relasi dengan Foreign Key:
-- Foreign key digunakan untuk menjaga konsistensi data antar tabel. Contoh, jika pengguna dihapus, maka pesanan terkait juga ikut dihapus (ON DELETE CASCADE).

-- Skalabilitas:
-- Desain ini modular sehingga setiap tabel dapat dioptimalkan atau diperluas tanpa memengaruhi tabel lain.

-- Normalisasi Data:
-- Data dinormalisasi untuk menghindari duplikasi, kecuali pada kolom price di OrderDetails, yang disimpan terpisah untuk menangkap harga saat transaksi terjadi.