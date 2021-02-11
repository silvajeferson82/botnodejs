var telegram  = require('node-telegram-bot-api');
let fs = require('fs');
var init = require('./dialog');

var token = '';
var opt = {polling:true};
var bot  = new telegram(token,opt);

bot.on('message',function(msg){
   console.log(msg);

   var text = msg.text;
   var chatId = msg.chat.id;
   var user = msg.from.username;


   if(text){
      fs.writeFileSync(__dirname+'/text.txt',text);
      
   }
});