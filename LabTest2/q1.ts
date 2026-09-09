class Student{
    constructor(public name: string,public age: number[]) {}

    addage(age: number): void {
        this.age.push(age);
    }
}

const student1 = new Student("สมชาย",20);
    
