class Character{
    constructor (protected name: string,protected health:number ,protected level: number){}
    takeDamage(damage:number){
        this.health -= damage;
    }
    get detail(): string{
        return `${this.name}, Health: ${this.health}, Level: ${this.level}`;
    }
}
class mage extends Character{
    constructor(name:string, health:number, level:number, private mana: number){
        super(name, health, level)
    }
    get detail(): string{
        return `${super.detail}, mana: ${this.mana}`;
    }
}
class Warrior extends Character{
        constructor(name:string, health:number, level:number, private stamina: number){
        super(name, health, level)
    }
    get detail(): string{
        return `${super.detail}, stamina: ${this.stamina}`;
    }
}
const mage1 = new Maga("Gandalf",100,3,200);
console.log(mage1.detail);
mage1.takeDamage(10);
console.log(mage1.detail);

const warrior1 = new Stamina("Gandalf",120,4,100);
console.log(warrior1.detail);
warrior1.takeDamage(20);
console.log(warrior1.detail);