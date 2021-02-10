var json = {name:"Jeferson",number:12,jop:{skill:100,lang:'node.js'}};

function welcome(){
   var sds =  ['Olá','Oi','Bem vindo','Ola', 'Oi, tudo bem?'];
   var flor = Math.floor(Math.random() * sds.length)
   return sds[flor];
}

console.log(welcome());



