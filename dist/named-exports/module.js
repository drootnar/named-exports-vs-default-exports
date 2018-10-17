'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var print = exports.print = function print() {
	console.log('hello from named exports module');
};

var notUsed = exports.notUsed = function notUsed() {
	console.log('not used method');
};