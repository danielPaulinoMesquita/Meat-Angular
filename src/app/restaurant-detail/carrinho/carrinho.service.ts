import { MenuItem } from "../menu-item/menu-item.model";
import { CarrinhoItem } from "./carrinho-item";

export class CarrinhoService {
    items: CarrinhoItem[]=[];

    clear() {
        this.items = [];
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((itemAdicionado) => itemAdicionado.menuItem.id === item.id);
        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1;
        } else {
            this.items.push(new CarrinhoItem(item));
        }
    }

    remove(item: CarrinhoItem) {
        this.items.splice(this.items.indexOf(item),1)
    }

    total(): number {
        return this.items.
        map(item => item.value())
        .reduce((prev,value)=>prev+value,0);
    }
}