export class User{



      nom: string ;
      prenom: string ;
      mail: string;
      password: string;
      adresse: string;
    telephone : number;
      login: string;

     constructor (nom: string,prenom: string,mail: string, password: string, telephone : number, login: string, adresse: string){
         this.nom = nom;
         this.prenom = prenom;
         this.mail = mail;
         this.password = password;
         this.telephone = telephone;
         this.login = login;
         this.adresse = adresse;
     }





}

