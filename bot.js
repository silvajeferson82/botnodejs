var telegram  = require('node-telegram-bot-api');

var token = '1633661141:AAGiMe_WL6oUPxeBwvjyw8r-1u4oxLw3knQ';

var opt = {polling:true};

var bot  = new telegram(token,opt);

bot.on('message',function(msg){

   console.log(msg);

   var text = msg.text;
   var chatId = msg.chat.id;
   var admin = 866846875;
   var id = msg.from.id;
   var user = msg.from.username;

   function welcome(){
      var sds =  ['Olá','Oi','Bem vindo','Ola', 'Oi, tudo bem?'];
      var floor = Math.floor(Math.random() * sds.length)
      return sds[floor];
   }

    var welcome = welcome();

   if(msg.text){
      bot.sendMessage(chatId,`${welcome} @${user} `);
   }
});