#!/usr/bin/env node
var fs = require('fs');
var path = require('path');
var args = require('minimist')(process.argv.slice(2));

if ((args.h || args.help) || JSON.stringify(args._) == '[]') {
  //Help Text
  console.log('Usage: dirt-lang [-hop] filename');
  console.log('     -h Displays this help message');
  console.log('     -o Counts the number of dirt operands and echos it.');
  console.log('     -p Doesn\'t actually do anything. Just wanted to spell `hop`.');
  process.exit(0);
}

var input = fs.readFileSync(args._[0], 'utf8');
var i = 0; //For counting
input.match(/dirt/g).forEach(function (cmd) {
  if (!args.o) {
    console.log('dirt');
  }
  i++;
});

if (args.o) {
  console.log(i + ' `dirt`' + (i==1 ? '' : 's') + ' would\'ve been echoed. Instead only two dirts were echoed.');
}