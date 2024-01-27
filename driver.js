var express = require('express');
var bodyParser = require('body-parser');
var con = require('./conn');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/driver', function(req, res) {
    res.sendFile(__dirname + '/driver.html');
});

// app.post('/driver', function(req, res) {
//     var name = req.body.name;
//     var cnic = req.body.cnic;
//     var phone = req.body.phone;
//     var carname = req.body.carname;
//     var model = req.body.model;
//     var color = req.body.color;
//     var pickup = req.body.pickup;
//     var drop = req.body.drop;

//     con.connect(function(error) {
//         if (error)
//             throw error;

//         var sql =
//             "INSERT INTO driver ( 	driver_name ,	driver_cnic ,	phone_no 	,license_no ,	date_of_birth ,	experience year) VALUES ('" + name + "','" + cnic +
//             "', '" +
//             phone +
//             "', '" +
//             carname +
//             "','" + model + "','" + color + "','" + pickup + "','" + drop + "')";
//         con.query(sql, function(error, result) {
//             if (error) throw error;
//             res.sendFile(__dirname + '/submit.html');
//         });
//     });
// });

// app.get('/driver', function(req, res) {
//     res.sendFile(__dirname + '/driver.html');
// });

app.post('/driver', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    // var carname = req.body.carname;
    var phone = req.body.phone;
     var license = req.body.license;
     var dob = req.body.dob;
    //  var company = req.body.company;
     var exp = req.body.exp;

    con.connect(function(error) {
        if (error)
            throw error;

        var sql =
            "INSERT INTO driver (driver_name ,driver_cnic ,	phone_no ,license_no ,date_of_birth ,experience_year) VALUES ('" + name + "','" + cnic +
            "', '" +
            license +
            "', '" +
            phone +
            "','" + dob + "','" + exp + "')";
        con.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/submit.html');
            // res.send("Renting has been registered successfully with ID: " + result.insertId);
        });
    });
});

app.listen(999);