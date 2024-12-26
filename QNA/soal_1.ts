// 1. TypeScript

// TypeScript adalah bahasa pemrograman yang merupakan superset dari JavaScript,
// yang berarti TypeScript menambahkan fitur tambahan ke JavaScript tetapi tetap kompatibel
// dengan kode JavaScript. Kode TypeScript dikompilasi (ditranspiler) menjadi JavaScript
// agar dapat dijalankan di browser atau lingkungan lain seperti Node.js atau bun.

// contoh sederhana ( interface & func )

// interface
interface UserX {
  name: string;
  age: number;
}

const user: UserX = { name: "John Doe", age: 30 };

// func
function calculate(n1: number, n2: number) {
  return n1 + n2;
}
