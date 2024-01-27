var express = require('express');
var bodyParser = require('body-parser');
var con = require('./conn');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

// sign up

// app.get('/signup', function(req, res) {
//     res.sendFile(__dirname + '/sign_up.html');
// });


// app.post('/signup', function(req, res) {
//     var name = req.body.name;
//     var password = req.body.password;
//     var confirm = req.body.confirm;
//     //  var license = req.body.license;
//     //  var dob = req.body.dob;
//     //  var exp = req.body.exp;
//     if(password==confirm){
//     con.connect(function(error) {
//         if (error)
//             throw error;

           
//         var sql =
//             "INSERT INTO member (username ,	password) VALUES ('" + name + "','" + password +
//             "')";
//         con.query(sql, function(error, result) {
//             if (error) throw error;
//             res.sendFile(__dirname + '/sign_in.html');
//         });
//     }
    
    
//     );
// }
// else{
//     alert("The password doesn't match with confirm password. Please try again")
// }
// });


app.get('/signup', function(req, res) {
    res.sendFile(__dirname + '/sign_up.html');
});

app.post('/signup', function(req, res) {
    var name = req.body.name;
    var password = req.body.password;
    var confirm = req.body.confirm;
console.log("object")
    if (password === confirm) {
        con.connect(function(error) {
            if (error)
                throw error;

            var sql = "INSERT INTO members (username, password) VALUES ('" + name + "','" + password + "')";
            con.query(sql, function(error, result) {
                if (error) throw error;
                res.sendFile(__dirname + '/sign_in.html');
            });
        });
    } else {
        res.send("The password doesn't match with the confirm password. Please try again.");
    }
});


app.get('/signin', function(req, res) {
    res.sendFile(__dirname + '/sign_in.html');
});

app.post('/signin', function(req, res) {
    var name = req.body.name;
    var password = req.body.password;

    con.connect(function(error) {
        if (error) throw error;

        var sql = "SELECT * FROM members WHERE username = '" + name + "' AND password = '" + password + "'";
        con.query(sql, function(error, result) {
            if (error) throw error;
            if (result.length > 0) {
                res.sendFile(__dirname + '/submit.html');
            } else {
                res.send("Invalid username or password. Please try again.");
            }
        });
    });
});


// become a driver
app.get('/driver', function(req, res) {
    res.sendFile(__dirname + '/driver.html');
});


app.post('/driver', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    var phone = req.body.phone;
     var license = req.body.license;
     var dob = req.body.dob;
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
            res.sendFile(__dirname + '/wdrwcarm.html');
        });
    });
});



// resignation of driver

app.get('/resign', function(req, res) {
    res.sendFile(__dirname + '/resigndeepak.html');
});


app.post('/resign', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    // var carname = req.body.carname;
    var phone = req.body.phone;
     var license = req.body.license;
     var dob = req.body.dob;
          var exp = req.body.exp;

    con.connect(function(error) {
        if (error)
            throw error;

            var sql =
            "DELETE FROM driver WHERE driver_cnic = '" + cnic + "'";
        con.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/wdrwcarm.html');
        });
    });
});


// Book a car

app.get('/book', function(req, res) {
    res.sendFile(__dirname + '/book.html');
});

app.post('/book', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    var phone = req.body.phone;
    var carname = req.body.carname;
    var model = req.body.model;
    var color = req.body.color;
    var pickup = req.body.pickup;
    var drop = req.body.drop;

    con.connect(function(error) {
        if (error)
            throw error;

        var sql =
            "INSERT INTO book (customer_name, cnic, phone_no, car_name, model, color, pickup_date, return_date) VALUES ('" + name + "','" + cnic +
            "', '" +
            phone +
            "', '" +
            carname +
            "','" + model + "','" + color + "','" + pickup + "','" + drop + "')";
        con.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/wdrwcarm.html');
        });
    });
});
// Return car
app.get('/return', function(req, res) {
    res.sendFile(__dirname + '/returndeepak.html');
});
app.post('/return', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    var phone = req.body.phone;
    var carname = req.body.carname;
    var model = req.body.model;
    var color = req.body.color;
    var pickup = req.body.pickup;
    var drop = req.body.drop;
 con.connect(function(error) {
        if (error)
            throw error;

            var sql =
            "DELETE FROM book WHERE customer_name = '" + name + "' AND cnic = '" + cnic + "' AND phone_no = '" + phone + "' AND car_name = '" + carname + "' AND model = '" + model + "' AND color = '" + color + "' AND pickup_date = '" + pickup + "' AND return_date = '" + drop + "'";
        con.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/wdrwcarm.html');
        });
    });
});

app.get('/rent', function(req, res) {
    res.sendFile(__dirname + '/rent.html');
});

app.post('/rent', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    var carname = req.body.carname;
    var phone = req.body.phone;
    var model = req.body.model;
    var color = req.body.color;
    var company = req.body.company;
    var reg = req.body.reg;

    con.connect(function(error) {
        if (error)
            throw error;

        var sql =
            "INSERT INTO rent (owner_name, owner_cnic, car_name, phone_no, rmodel, color, car_company, reg_no) VALUES ('" + name + "','" + cnic +
            "', '" +
            carname +
            "', '" +
            phone +
            "','" + model + "','" + color + "','" + company + "','" + reg + "')";
        con.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/wdrwcarm.html');
        });
    });
});



app.get('/updaterent', function(req, res) {
    res.sendFile(__dirname + '/updatedeepak.html');
});

app.post('/updaterent', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    var carname = req.body.carname;
    var phone = req.body.phone;
    var model = req.body.model;
    var color = req.body.color;
    var company = req.body.company;
    var reg = req.body.reg;

    con.connect(function(error) {
        if (error)
            throw error;

        var sql =
            "UPDATE rent SET owner_name = '" + name + "', car_name = '" + carname + "', phone_no = '" + phone + "', rmodel = '" + model + "', color = '" + color + "', car_company = '" + company + "', reg_no = '" + reg + "' WHERE owner_cnic = '" + cnic + "'";
        con.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/wdrwcarm.html');
        });
    });
});

app.get('/withdraw', function(req, res) {
    res.sendFile(__dirname + '/book.html');
});

app.post('/withdraw', function(req, res) {
    var name = req.body.name;
    var cnic = req.body.cnic;
    var carname = req.body.carname;
    var phone = req.body.phone;
    var model = req.body.model;
    var color = req.body.color;
    var company = req.body.company;
    var reg = req.body.reg;

    con.connect(function(error) {
        if (error)
            throw error;

            var sql =
            "DELETE FROM rent WHERE reg_no = '" + reg + "'";
        con.query(sql, function(error, result) {
            if (error) throw error;
            res.sendFile(__dirname + '/wdrwcarm.html');
        });
    });
});



// to read data
app.get('/rentdata', (req, res) => {
    const query = 'SELECT * FROM rent';
  
    // Execute the SQL query
    con.query(query, (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).send('Error retrieving data from the database');
        return;
      }
  
      // Display the data on the web page
      res.send(results);
    });
  });

//   table read rented cars


app.get('/renttable', (req, res) => {
    const query = 'SELECT * FROM book';
  
    // Execute the SQL query
    con.query(query, (error, results) => {
      if (error) {
        console.error('Error executing the query: ', error);
        res.status(500).send('Error retrieving data from the database');
        return;
      }
  
      // Generate the HTML table
      let tableHtml = '<table>';
      tableHtml += '<tr><th>car_name </th><th>customer_name</th><th>COLOR</th></tr>';
  
      for (const row of results) {
        tableHtml += '<tr>';
        tableHtml += `<td>${row.car_name}</td>`;
        tableHtml += `<td>${row.customer_name}</td>`;
        tableHtml += `<td>${row.color}</td>`;
        // ... add other columns as needed
        tableHtml += '</tr>';
      }
  
      tableHtml += '</table>';
  
      // Send the HTML response
      res.send(tableHtml);
    });
  });
  
app.listen(999);



