const priceConverter = (price) => {
    let returnPrice;
    let p = price?.toString().length

    if (p === 1 || p === 2) returnPrice = (`$ ${price}.00`)
    if (p === 3) returnPrice = (`$ ${price}0`)
    if (p >= 4) returnPrice = (`$ ${price}`)   
    return returnPrice;
};

export default priceConverter;

