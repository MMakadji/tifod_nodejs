const Pool = require('pg').Pool;
const UserController = require('./userController');
const pool = new Pool({
    user: 'mariam',
    host: 'localhost',
    database: 'test',
    password: 'Mariam15',
    port: 5432,
});

 const userController = new UserController();
// @ts-ignore

const getUsersQuery  = function (req,res){
    const sql_getUsers = "SELECT * FROM Utilisateur;";
    pool.query(sql_getUsers, [], (err: { message: any; },result: { rows: any; }) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Liste des utilisateurs affichée");
        res.status(200).json({users: result.rows});
    });
}
// @ts-ignore
const getUserQuery = function(req,res){
    // const login = req.body;
    const login = req.params.id;
    const sql_getUsers = "SELECT * FROM Utilisateur where login = $1;";
    pool.query(sql_getUsers,[login], (err: { message: any; },result: { rows: any; }) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(" affiché:"  +req.body);

        console.log("Utilisateur affiché");
        res.status(200).json({user: result.rows});

    });
}
// @ts-ignore
const addUserQuery= function(req,res){
    const userData = req.body;
    console.log(userData);
    const user = userController.addUser(userData.nom,userData.prenom,userData.mail,userData.adresse,userData.login,userData.password,userData.telephone);
    console.log(user);

    const sql_addUtilisateur = " INSERT INTO utilisateur(nom,prenom,mail,adresse,login,password,telephone) values($1,$2,$3,$4,$5,$6,$7);";

    pool.query(sql_addUtilisateur, [userData.nom,userData.prenom,userData.mail,userData.adresse,userData.login,userData.password,userData.telephone], (err: { message: any; },result: { rows: any; }) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Ajout réussi");
        return res.status(200).json({user:user});
    });
}
// @ts-ignore
const updateUserQuery = function(req,res){
    const login = req.body.login;
    const password = req.body.password;
    const sql_updateUtilisateur = " UPDATE  utilisateur SET password = $1 where login = $2;";
    pool.query(sql_updateUtilisateur, [password,login], (err: { message: any; },result: { rows: any; }) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Modification réussie");
        res.status(200).json({ user: result.rows });

    });
}

module.exports ={
    pool,
    getUsersQuery,
    getUserQuery,
    addUserQuery,
    updateUserQuery
}
