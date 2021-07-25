export const getCart = () =>
  window.localStorage.getItem("cart")
    ? JSON.parse(window.localStorage.cart)
    : { items: [], itemsCount: 0, amount: 0 }

export const setCart = cart =>
  window.localStorage.setItem("cart", JSON.stringify(cart))
