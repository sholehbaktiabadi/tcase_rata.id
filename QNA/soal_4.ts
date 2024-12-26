// 4. GraphQL for Microservice

// 4.1 Bagaimana Anda mendesain schema GraphQL yang efisien dan scalable untuk sebuah aplikasi e-commerce yang memiliki entitas produk, pengguna, dan pesanan?
class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
  }
  
  class User {
    id: string;
    name: string;
    email: string;
    orders: Order[];
  }
  
  class Order {
    id: string;
    user: User;
    products: { product: Product; quantity: number }[];
    totalAmount: number;
    status: "PENDING" | "COMPLETED" | "CANCELED";
  }

// 4.2 Peran Resolvers dalam GraphQL ?
// Resolvers adalah fungsi yang bertanggung jawab untuk memproses dan mengembalikan data untuk
// setiap field di dalam skema GraphQL. Mereka memungkinkan aplikasi untuk terhubung ke sumber
// data seperti basis data, API eksternal, atau layanan lainnya.