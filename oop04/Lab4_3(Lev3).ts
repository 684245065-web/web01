class Hero {
    name : string;
    hp : number;
    attackPower : number;

    constructor(name:string, hp:number,attackPower:number) {
        this.name = name;
        this.hp = hp;
        this.attackPower = attackPower;
    }

    attack(target: Hero):void {
        target.hp -= this.attackPower;
        console.log(`${this.name} attack ${target.name} for ${this.attackPower} Damage`);

        if (target.hp <= 0) {
            console.log(`${target.name}  has fainted!`);
        }
    }
}
const hero1 =  new Hero("Archer", 100, 20);
const hero2 = new Hero("Knight", 150, 15);

hero1.attack(hero2);
hero2.attack(hero1);