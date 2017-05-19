var Botkit = require('botkit');
// npm module for slack bot

var Witbot = require('witbot');

var slackToken= process.env.SLACK_TOKEN;
var witToken=process.env.WIT_TOKEN;

var controller=Botkit.slackbot({
   debug:false
});

controller.spawn({
   token:slackToken
}).startRTM(function(err,bot,payload){

    if(err){
        throw new Error("not able to connect to slack due to"+err);
    }


    /**
     * Callback function
     */

    console.log("****Connected to Slack*****")
});

var witbot=Witbot(witToken);

controller.hears('.*','direct_message,direct_mention',function(bot,message){

    console.log(message);
    var wit = witbot.process(message.text, bot, message)


});

