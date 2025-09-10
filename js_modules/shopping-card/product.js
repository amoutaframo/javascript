// Named export
export const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 700 },
  { name: "Headphones", price: 150 },
];

// Named export
export function getProduct(name) {
  return products
}
console.log(getProduct()); // { name: "Laptop", price: 1200 }