function welcome(){
   var sds =  ['Olá','Oi','Bem vindo', 'Oi, tudo bem?'];
   var floor = Math.floor(Math.random() * sds.length)
   return sds[floor];
}

function menu(){
   var option = ['Você esta no canal de clientes IKOstripes, com tecnologia estamos inovando a forma de consumir e entregar o CBD'];

   return option;
}
module.exports = welcome
module.exports = menu