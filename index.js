//importa todas as funcoes do cart.js
import * as cartService from "./src/services/cart.js";
// importa apenas 1 item
import createItem from "./src/services/item.js";

const cart = [];

const item1 = await createItem("feijao", 22.90, 3);
const item2 = await createItem("arroz", 30.99, 2);
const item3 = await createItem("algodao", 5.99, 1);
const item4 = await createItem("pepino", 10.99, 4);

(async function main() {
    
    console.log("Welcome to Shopee Cart! \n")

    await cartService.addItem(cart, item1);
    await cartService.addItem(cart, item2);
    await cartService.addItem(cart, item3);
    await cartService.addItem(cart, item4);

    await cartService.deleteItem(cart, item2.name)

    await cartService.removeItem(cart, item4)
    
    await cartService.displayCart(cart)
    
    cartService.calcTotal(cart)

})();