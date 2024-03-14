function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const Fee = `Shipping to ${country} will cost ${totalPrice} credits`;
  return Fee;
}
