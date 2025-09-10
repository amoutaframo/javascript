import { getProduct } from "./products.js";
import { addToCart, getCart } from "./cart.js";
import formatCurrency from "./utils.js";

// Expose functions to HTML buttons
window.addProduct = function (name) {
  const product = getProduct(name);
  if (product) {
    addToCart(product);
  } else {
    console.log("Product not found!");
  }
};

window.viewCart = function () {
  const cart = getCart();
  console.log("🛒 Your Cart:");
  cart.forEach((item) => {
    console.log(`${item.name} - ${formatCurrency(item.price)}`);
  });
};
