const Discord = require("discord.js");
const bot = new Discord.Client();



const PREFIX = "v!";

bot.on("ready", () =>{
    console.log(">> Vapinn bot, Loaded. <<");
    bot.user.setActivity("VaporWave | v!help");
})

bot.on("message", message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case "ip":
            message.channel.send("> **IP:** `UNAVAILABLE!`");
        break;
        case "help":
            message.channel.send("> ‣ **Help** \n > _ _ \n > **v!ip** \n > **v!help** \n > **v!apply** \n > _ _");
        break;
        case "apply":
            message.channel.send("Staff Applications are not open yet!");
        //    message.author.send("")
        break;

    }
})

bot.on('message', function(message){
    if(message.content == "hi"){
        message.channel.send("Hey there!");
    }
})

bot.on('message', function(message){
    if(message.content == "hello"){
        message.channel.send("Hey");
    }
})

bot.on('message', function(message){
    if(message.content == "whats the ip"){
        message.channel.send("> **IP:** `UNAVAILABLE!`");
    }
})


bot.login(process.env.token);