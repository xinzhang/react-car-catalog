const express = require('express');
const chalk = require('chalk');
const carRoutes = require('./routes/carRoute');

process.on('unhandledRejection', err => {
  throw err;
});

console.log(chalk.cyan('Starting SERVER....'));
let app = express();
app.set('trust proxy', true);
console.log(chalk.cyan('RUNNING ON NODE VERSION: ' + process.version));

//////////////////////////////
// Configure CORS
//////////////////////////////
app.use('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, apiKey');
  next();
});

app.use('/api', carRoutes);

// catch 404 and forward to error handlers
// app.use(function(req, res, next) {
//   let err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

let port = process.env.PORT || 5000;
app.set('port', port);
console.log('Listening on port: ' + port);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port);
app.on('error', onError);
app.on('listening', onListening);
app.timeout = 60000 * 60; // 1hr

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') throw error;

  let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      console.log(error);
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = app.address();
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}

module.exports = app;
