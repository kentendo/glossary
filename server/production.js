/* eslint-disable */
var path = require('path');
var fs = require('fs');
var chalk = require('chalk');
var express = require('express');
var utils = require('./utils');

var PORT = process.env.PORT || 80;

// Launch server

var app = express();

app.use(express.static('./build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./build/index.html'));
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  utils.clearConsole();
  console.log(chalk.cyan('Production server started on port ' + PORT));
  console.log();
});
