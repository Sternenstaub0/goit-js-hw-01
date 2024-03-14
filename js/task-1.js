function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = pricePerDroid * quantity;
  const strike = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  return strike;
}
