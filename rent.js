// var express = require('express');
// // var con = require('./conn');
// var cons = require('./conn');
// // var app = express();
// var apps = express();

// // Remove unnecessary mysql package import
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// apps.use(bodyParser.json());
// apps.use(bodyParser.urlencoded({ extended: true }));

// // app.set('view engine','ejs');
// // app.set('view engine', 'ejs');

// apps.set('view engine', 'ejs');

// // app.get('/', function(req, res) {
// //     res.sendFile(__dirname + '/book.html');
// // });

// // app.post('/', function(req, res) {
// //     var name = req.body.name;
// //     var cnic = req.body.cnic;
// //     var phone = req.body.phone;
// //     var carname = req.body.carname;
// //     var model = req.body.model;
// //     var color = req.body.color;
// //     var pickup = req.body.pickup;
// //     var drop = req.body.drop;

// //     con.connect(function(error) {
// //         if (error)
// //             throw error;

// //         var sql =
// //             "INSERT INTO book (customer_name, cnic, phone_no, car_name, model, color, pickup_date, return_date) VALUES ('" + name + "','" + cnic +
// //             "', '" +
// //             phone +
// //             "', '" +
// //             carname +
// //             "','" + model + "','" + color + "','" + pickup + "','" + drop + "')";
// //         con.query(sql, function(error, result) {
// //             if (error) throw error;
// //             res.send("Booking has been registered successfully with ID: " + result.insertId);
// //         });
// //     });
// // });

// apps.get('/rent', function(req, res) {
//     res.sendFile(__dirname + '/rent.html');
// });

// apps.post('/rent', function(req, res) {
//     var name = req.body.name;
//     var cnic = req.body.cnic;
//     var carname = req.body.carname;
//     var phone = req.body.phone;
//     var model = req.body.model;
//     var color = req.body.color;
//     var company = req.body.company;
//     var reg = req.body.reg;

//     cons.connect(function(error) {
//         if (error)
//             throw error;

//         var sql =
//             "INSERT INTO rent (owner_name, owner_cnic, car_name, phone_no, rmodel, color, car_company, reg_no) VALUES ('" + name + "','" + cnic +
//             "', '" +
//             carname +
//             "', '" +
//             phone +
//             "','" + model + "','" + color + "','" + company + "','" + reg + "')";
//         cons.query(sql, function(error, result) {
//             if (error) throw error;
//             res.send("Renting has been registered successfully with ID: " + result.insertId);
//         });
//     });
// });

// apps.listen(999);
var express = require('express');
var bodyParser = require('body-parser');
var cons = require('./conn');

var apps = express();

apps.use(bodyParser.json());
apps.use(bodyParser.urlencoded({ extended: true }));

apps.set('view engine', 'ejs');

apps.get('/rent', function(req, res) {
    res.sendFile(__dirname + '/rent.html');
});

apps.post('/rent', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    var carname = req.body.carname;
    var phone = req.body.phone;
    var model = req.body.model;
    var color = req.body.color;
    var company = req.body.company;
    var reg = req.body.reg;

    cons.connect(function(error) {
        if (error)
            throw error;

        var sql =
            "INSERT INTO rent (owner_name, owner_cnic, car_name, phone_no, rmodel, color, car_company, reg_no) VALUES ('" + name + "','" + cnic +
            "', '" +
            carname +
            "', '" +
            phone +
            "','" + model + "','" + color + "','" + company + "','" + reg + "')";
        cons.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/submit.html');
        });
    });
});

apps.listen(999);