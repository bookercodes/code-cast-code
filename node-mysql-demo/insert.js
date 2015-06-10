var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'articles'
});
connection.connect();

var article = {
  author: 'Alex Booker',
  title: 'Git tutorial',
  body: 'foo bar'
};

var query = connection.query('insert into articles set ?', article, function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.error(result);
});