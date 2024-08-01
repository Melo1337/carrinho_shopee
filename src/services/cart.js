// quais acoes meu carrinho pode fazer

// adicionar item
async function addItem(userCart, item) {
    userCart.push(item)
}

// deletar item
async function deleteItem(userCart, name) {
    // percorre o cart procurando o nome que foi informado quando puxa a func
    // e armazena em index em qual index esse valor foi encontrado
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1)
    }

}

// subtrair item
async function removeItem(userCart, item) {
    const indexItem = userCart.findIndex((p) => p.name === item.name)

    // return nos casos abaixo serve para ele sair do IF e nao continuar pa os de baixo

    if (item.quantity > 1) {
        userCart[indexItem].quantity--
        return;
    }

    if (item.quantity < 1) {
        console.error("nao encontrou o item")
        return;
    }

    if (item.quantity == 1) {
        userCart.splice(indexItem, 1)
        return;
    }

}

async function displayCart(userCart) {
    console.log("Shopee cart list:")

    userCart.forEach((item, index) => {
        console.log(`Item: ${index + 1} | ${item.name} | $${item.price} | x${item.quantity} | subtotal: ${item.subtotal().toFixed(2)}`)
    });

}

// calcular total
async function calcTotal(userCart) {
    // reduce percorre o item "igual" o for permitindo uma acao com cada item
    // userCart recebe cart
    console.log("💵 total: $" + userCart.reduce((total, item) => total + item.subtotal(), 0).toFixed(2) + "\n")
}


export {
    addItem,
    deleteItem,
    removeItem,
    calcTotal,
    displayCart
}

