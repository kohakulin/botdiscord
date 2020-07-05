const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('NzI1MDQ4NjQ2NjcyMDU2Mzkx.XvJE7g.8B3-_NxYGSgbNL0FIBRJd1cJMWg');

var num = [];
var num2 = [];
var num3 = [];
var i = 0;

bot.on('message', message=>{ 
    if(message.content.startsWith('goto/bingo')){
        i++;
        if(i<=99){
            num[i]=Math.floor(Math.random() * 99);
            
            for(j=0;j<=99;j++)
            {
                if(num[i]==num2[j]){
                    num[i]=Math.floor(Math.random() * 99);
                    j=0;
                }
            }
            j=0;
            
            num3[i]=num[i]+1
            message.channel.send(`BINGO SAFE LUGS 
Bola ${i}: 
${num3[i]}`);
            num2[i]=num[i];
        }
        else{
            
            i=0; 
            num = [];
            num2 = [];
            message.channel.send("SAFE LUGS BINGO");
        }
    }
});

