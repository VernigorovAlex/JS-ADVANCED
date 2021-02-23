'use strict';

let str = `'I don't care what you think about me. I don't think about you at all.'`;

const regexp = /^'|(\s)'|'(\s)|'$/g;
const newRegexp = `"`;
const res = str.replace(regexp, newRegexp);
console.log(res);