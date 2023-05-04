var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;



// const express = require('express');
// const app = express();
// const session = require('express-session');
// const fs = require('fs');
// const cors = require('cors');

// let corsOption = {
//   origin: 'http://localhost:8080',
//   credentials: true
// };

// app.use(cors(corsOption));

// app.use(session({
//   secret: 'secret code',
//   resave: false,
//   saveUninitialized: false,
//   cookie: {
//     secure: false,
//     maxAge: 1000 * 60 * 60 //쿠기 유효시간 1시간
//   }
// }));

// app.use(express.json({
//   limit: '50mb'
// }));

// const server = app.listen(3000, () => {
//   console.log('Server started. port 3000.');
// });

// let sql = require('./sql.js');

// fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
//   console.log('sql 변경시 재시작 없이 반영되도록 함.');
//   delete require.cache[require.resolve('./sql.js')];
//   sql = require('./sql.js');
// });

// const db = {
//   database: "introduce_myself",
//   connectionLimit: 10,
//   host: "127.0.0.1", // 일단은 로컬로, 나중에 AWS 연동
//   user: "sihoonchris",
//   password: "dltlgns^0426"
// };

// const dbPool = require('mysql').createPool(db);

// const req = {
//   async db(alias, param = [], where = '') {
//     return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
//       if (error) {
//         if (error.code != 'ER_DUP_ENTRY')
//           console.log(error);
//         resolve({
//           error
//         });
//       } else resolve(rows);
//     }));
//   }
// };


// // numOfViewers : 누적 조회수 출력
// app.get('/api/num', async (request, res) => {
//   try {
//     return (await req.db('numOfViewers', {}));
//   } catch {
//     console.error('numOfviewers Error');
//   }
// });


// // countViewers : 웹사이트 접속 시 조회수 1씩 증가
// app.post('/api/count', async (request, res) => {
//   try {
//     await req.db('countViewers', {});
//   } catch (err) {
//     console.error("countViewers Error");
//   }
// });
