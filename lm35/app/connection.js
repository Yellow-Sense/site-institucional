var mysql = require('mysql2');

/* var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    password : 'urubu100',
    user     : 'urubu100',
    database : 'Yellow_Sensor'
}); */

var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    password : '',
    user     : 'root',
    database : 'Yellow_Sensor'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado ao BD com sucesso!')
});

module.exports = connection;