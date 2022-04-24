import mysql from 'mysql2';



// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'jwt'
});

const handleHelloWord = (req,res)=>{
    return res.render("home.ejs");

}
const handleUser = (req,res)=>{
    return res.render("user.ejs");

}

const createUser = (req,res)=>{
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;


    console.log("check" , req.body)
    connection.query(
        'SELECT * FROM users',
        function(err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );

    return res.send("OK");

}


module.exports = {
    handleHelloWord,
    handleUser,
    createUser
}