var mysql=require("mysql");
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rent a car"
});

// conn.connect(function(error){
//     if(error) throw error;
//     else console.log("connected")
// })
module.exports=con;
