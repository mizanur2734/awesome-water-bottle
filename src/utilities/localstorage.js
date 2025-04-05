/**
 * 1. to get something from localstorage, you will get it as a string.
 * 2. convert this to javascript object/array
 */

const getCartFromLocalstorage = () => {
  const storedCardString = localStorage.getItem("cart");
  if (storedCardString) {
    const storedCart = JSON.parse(storedCardString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalstorage = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addItemToCartLocalstorage = (id) => {
  const cart = getCartFromLocalstorage();
  console.log(cart);
  let newCart = [];
  if (cart.length === 0) {
    newCart.push(id);
  } else {
    newCart = [...cart, id];
  }

  // save new cart to the localstorage
  saveCartToLocalstorage(newCart);
};

const removeFromLocalStorage = (id) => {
  const storedCart = getCartFromLocalstorage();
  const remainingCart = storedCart.filter((storedId) => storedId !== id);
  saveCartToLocalstorage(remainingCart);
};

export {
  getCartFromLocalstorage as getStoreCart,
  addItemToCartLocalstorage as addToStoredCart,
  removeFromLocalStorage as removeFromCart,
};
