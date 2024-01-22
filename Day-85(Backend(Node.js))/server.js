var slugify = require('slugify');

let a = slugify('some strings'); //some-string
console.log(a);

//if you prefer something other than '-' as separator
let b = slugify('some strings','-');
console.log(b);