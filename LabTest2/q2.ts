class Vehicle {
    constructor (public brand: string, public speed: number) {}

    sellcar(quantity: number) {
        if(this.speed < quantity) {
            console.error(`Sole out`)
        } else {
            console.log(`${this.brand},${this.speed} km/h`);
        }
    }
}

class Car extends Vehicle {
    constructor (public brand: string, public speed: number, public doors: number){
        super(brand,speed);
    }
    sellcar() {
        console.log(`${this.brand}, ${this.speed} km/h, ${this.doors} doors `);
    }
}

const vehicle1 = new Vehicle("Toyota",120);
vehicle1.sellcar(1);

const car1 = new Car("Toyota",120,4);
car1.sellcar();