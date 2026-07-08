class Animal{
    constructor(public species:string,public sound:string){
    }

    show():void{
        console.log(`Animal - ${this.species} species, ${this.sound} sound `);
    }
}
const Animal1 = new Animal("Dog", "Woof");
const Animal2 = new Animal("Cat", "Meow");
Animal1.show();
Animal2.show();