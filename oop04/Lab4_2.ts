class Rectangle{
    constructor(public width:number,public height:number){
    }

    show():void{
        console.log(`Rectangle - ${this.width} width, ${this.height} height`);
    }
}
const Rectangle1 = new Rectangle(5,10);
Rectangle1.show();
