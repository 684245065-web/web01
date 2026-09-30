import { UserDAO } from './UserDAO.ts';

const userDAO = new UserDAO();

userDAO.insert('อนุกูล','amporn@gmail.com');
userDAO.insert('ท่าผา','amporn@gmail.com');

const users = userDAO.findAll();
users.forEach(u => {
    console.log(u.getInfo());
})