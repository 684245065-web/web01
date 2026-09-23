class University{
    students: Student[];
    teachers: Teacher[];
    constructor(students: Student[], teachers: Teacher[]){
        this.students = students;
        this.teachers = teachers;
    }

    showUniversityInfo(): void{
        console.log("University Information: ");
        console.log("Students: ")
        this.students.forEach(s => {
            console.log(s.getStudentInfo())
        });
        console.log("Teachers: ")
        this.teachers.forEach(t => {
            console.log(t.getTeacherInfo())
        });
    }
}

class Student{
    constructor(private id:string, private name:string, private faculty: string) {}
    getStudentInfo(): string {
        return `นักศึกษารหัส ${this.id} ชื่อ ${this.name} คณะ ${this.faculty}`;
    }
}

class Teacher{
    constructor(private name:string, private major:string) {}
    getTeacherInfo(): string {
        return `ชื่ออาจารย์ ${this.name} สาขาวิชา ${this.major}`;
    }
    teach(student: Student):void{
        console.log(`${this.getTeacherInfo()} สอน ${student.getStudentInfo()}`);
    }
}

const student1 = new Student("684245065","อนุกูล","Science");
const student2 = new Student("684245001","วันเพ็ญ","Science");
const teacher1 = new Teacher("สมประสงค์","วิทยาการคอมพิวเตอร์");

const npru = new  University([student1,student2],[teacher1]);
npru.showUniversityInfo();
console.log("----------");
teacher1.teach(student1);