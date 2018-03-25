require ('dotenv').config();
//From Express
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//Import Session and Passport Dependency
const session = require ('express-session');
const passport = require ('passport');
var LocalStrategy = require('passport-local').Strategy;
require ('./helpers/passport');

//Import Routes
const index = require('./routes/index');
const listings = require('./routes/listings');
const events = require('./routes/events');
const users = require('./routes/users');
const auth =  require('./routes/auth');

//Use Cors to Connect to the Client Side
var app = express();
const cors = require("cors");
const corsOptions = {
  credentials:true,
  origin:true
}

app.use(cors(corsOptions));

//Create DB: Modify address as needed for dev and prod
require("mongoose").connect(process.env.mongoURL)
.then(console.log(`Connected to ${process.env.mongoURL}`));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Passport Session

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Use routes: best practice is to use /api when querying from the front
app.use('/', index);
app.use('/api/listings', listings);
app.use('/api/events', events);
app.use('/api/auth', auth);
app.use('/api/users', users);


app.all('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
