enum Role {
    Admin,
    Editor,
    Viewer,
}

interface User{
    name: string,
    email: string,
    role: Role
}
function  checkAccess(user: User){
    if(user.role === Role.Admin){
        console.log(`${user.name} เป็นแอดมิน ได้สิทธิ์ทุกอย่าง`);
    }else if(user.role === Role.Editor){
        console.log(`${user.name} เป็นอีดิดเตอร์ ได้สิทธิ์ดูและแก้ไข`);
    }else if(user.role === Role.Viewer){
        console.log(`${user.name} เป็นวิวเวอร์ ได้สิทธิ์ดูข้อมูลเพียงอย่างเดียว`);
    }
}
const user1: User = {name:"Suvimol",email:"suvimol@npru.ac.th",role:Role.Admin};
let user2: User = {name:"Anukul",email:"k@npru.ac.th",role:Role.Viewer};
checkAccess(user1);
checkAccess(user2);