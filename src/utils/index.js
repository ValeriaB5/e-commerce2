//This function calculates the total price of an order
//El parametro (products) que es un array de objetos del Cart
//retorna un numero de precio total
export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
}