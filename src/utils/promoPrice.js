export const promoPrice = (regularPrice, discount) => {
  if (typeof regularPrice === 'undefined' && typeof discount === 'undefined') {
    return null;
  } else if (typeof regularPrice === 'string' || typeof discount === 'string') {
    return null;
  } else if (typeof regularPrice === 'function' || typeof discount === 'function') {
    return null;
  } else if (Array.isArray(regularPrice) || Array.isArray(discount) ) {
    return null;
  } else if (discount >= 50) {
    return null;
  } else if (discount < 0 || regularPrice < 0 ) {
    return null;
  } else {
    const discountedPrice = regularPrice * (1 - discount/100);
    return Math.ceil(discountedPrice);
  }
};
