// Calcular preco item de acordo c quantidade 

function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export default createItem;