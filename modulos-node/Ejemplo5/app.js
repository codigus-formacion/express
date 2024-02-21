import './hello.js';

import bar from './bar.js';
bar();

import * as module from './fiz.js';
module.fiz();

import { fiz } from './fiz.js';
fiz();

import * as utils from './utils.js';

utils.log('message');

console.log(utils.obj);

var date = new utils.Date('01-12-19');

console.log(date)

import { log, obj, Date } from './utils.js';

log('message');

console.log(obj);

var date = new Date('01-12-19');

console.log(date)