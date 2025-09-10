let cart = [];

// Add item
export function addToCart(product) {
  cart.push(product);
  console.log(`${product.name} added to cart!`);
}

// View cart
export function getCart() {
  return cart;
}
