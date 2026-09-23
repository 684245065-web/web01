class MenuItem{
    constructor(private _name:string, private _price:number, private category:string){}
    get name(): string{
        return this._name;
    }
    get price(): number{
        return this._price;
    }
    getMenuInfo(): string{
        return `${this._name} - ${this._price} - ${this.category}`;
    }
}
class Restaurant{
    constructor(private name:string, private menuItem: MenuItem[]) {}
    showMenu(): void {
        console.log(`Menuของร้าน ${this.name}: `);
        this.menuItem.forEach(item =>{
            console.log(item.getMenuInfo());
        })
    }
    calculateNetPrice(total:number):number{
        const rate = 0.10;
        if(total>500){
            return total*(1-rate);
        }else{
            return total;
        }
    }
}

class Customer{
    constructor(private name: string) {}
    placeOrder(rest: Restaurant, order: Order): void{
        const total = order.calculateNetPrice();
        const netPrice = rest.calculateNetPrice(total);
        console.log(`${this.name} สั่ง order :`);
        order.showOrder(); // แก้ไข: เพิ่มการแสดงรายการออเดอร์
        console.log(`ราคารวมปกติ: ${total.toFixed(2)} บาท`);
        console.log(`ราคาสุทธิหลังหักส่วนลด: ${netPrice.toFixed(2)} บาท`);
    }
}

class Order{
    constructor(
        private items: { item: MenuItem, quantity: number} [] = []) {}
    showOrder():void{
    console.log("รายการคำสั่งซื้อ: ");
    this.items.forEach(({item, quantity}) =>{
        console.log(`${quantity} x ${item.getMenuInfo()} = ${(item.price * quantity).toFixed(2)}`)
    })
    }
    calculateNetPrice():number{
        let total = 0;
        for (const { item, quantity } of this.items) {
            total += item.price * quantity;
        }
        return total;
    }
}
const menu1 = new MenuItem("Piazz", 199, "Italian");
const menu2 = new MenuItem("Pasts", 159, "Italian");
const menu3 = new MenuItem("Steak", 259, "Europe");
const rest1 = new Restaurant("Piazz company",[menu1,menu2,menu3]);
rest1.showMenu();

const cust1 = new Customer("สันติ");
const order1 = new Order([
    {item: menu1, quantity:2},
    {item: menu2, quantity:3}
]);
cust1.placeOrder(rest1,order1);