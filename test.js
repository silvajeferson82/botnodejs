
const fs = require('fs');

let write = fs.writeFileSync(__dirname+ '/text.txt','Ola Mundo');

let read = fs.readFileSync(__dirname+'/text.txt');

console.log(read.toString());

/*
var json = {name:"Jeferson",number:12,jop:{skill:100,lang:'node.js'}};

function welcome(){
   var sds =  ['Olá','Oi','Bem vindo','Ola', 'Oi, tudo bem?'];
   var flor = Math.floor(Math.random() * sds.length)
   return sds[flor];
}

console.log(welcome());*/



