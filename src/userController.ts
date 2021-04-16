import {User} from "./user"

 class UserController{
    users : Array<User>;

    constructor(){
        this.users = new Array<User>();
    }

     public getUsers(){
        return this.users;
    }

    public addUser(nom: string,prenom: string,mail: string, password: string, telephone : number, login: string, adresse: string){
        const user = new User(nom,prenom,mail, password, telephone , login, adresse);
        this.users.forEach
        (function (user){
                if(user.login == user.login){
                    return null;
                }
            }
        )
        const newuser = new User(user.nom,user.prenom,user.mail,user.password,user.telephone,user.login,user.adresse);
        this.users.push(newuser);
        return newuser;
    }

    public getUser(login: string){
       this.users.forEach
            (function (user){
                if(user.login == login){
                    return user;
                }
             }
       )
        return null;
    }

    public modifyPassword(login: string,mail:string){
        this.users.forEach
        (function (user){
                if(user.login == login){
                    user.mail = mail;
                }
            }
        )

        return null;

    }

}
module.exports = UserController;
