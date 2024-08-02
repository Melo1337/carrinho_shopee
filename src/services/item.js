// Calcular preco item de acordo c quantidade 

function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal() {
            return this.price * this.quantity
        }
    }
}

export default createItem;