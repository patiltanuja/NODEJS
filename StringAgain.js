// //string method
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()

const { Console } = require("console");

let str1 = new String("hello");
console.log(str1);

var str = "Alchemist Team15";
console.log(str.length);

var str = "Alchemist Team15";
var output=str.lastIndexOf("team15")
console.log(output);

var str = "Alchemist Team15";
var output=str.toUpperCase();
console.log(output);

var str = "Alchemist Team15";
var output=str.toLowerCase();
console.log(output);

var str = "    Alchemist Team15";
var output=str.trim();
console.log(output);
console.log(str);

var str2 = "CDAC MUMBAI";
str2.slice();
console.log(str2);

var str2 = "CDAC MUMBAI";
var str3=str2.search('e');//-1 /* not match
var r =str2.search('CDAC');//0
console.log(str3);
console.log(r);
str2.toString();
console.log(str2);
var str3 = "Na"
