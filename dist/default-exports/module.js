'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var print = function print() {
	console.log('hello from default exports module');
};

var notUsed = function notUsed() {
	console.log('not used method');
};

exports.default = {
	print: print,
	notUsed: notUsed
};