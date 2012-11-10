#!/usr/bin/env node
var util   = require('util'),
    fs     = require('fs'),
    colors = require('colors'),
    path   = require('path');

var inspect = function (v, levels) {
    levels = levels || 10;
    console.log(util.inspect(v, false, levels, true));
};

// load automaton
var automaton = require(__dirname + '/../index');

// TODO: create a proper CLI
var autofile = path.resolve(process.cwd(), process.argv[2] || 'autofile.js');

if (!fs.existsSync(autofile)) {
    console.log('Could not find autofile: '.error + autofile);
    process.exit(1);
}

autofile = require(autofile);
    
// TODO: pass any option to the task that was provided as a CLI arg
automaton.run(autofile);