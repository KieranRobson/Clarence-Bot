const { Message, Client, MessageEmbed } = require("discord.js");
const discord = require("discord.js");


module.exports = {
    name: "bong",
    aliases: [''],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        const Responses = [
            "<@365297607276363776>", 
            "<@544191902946164756>",
            "<@652830018858254346>"
            ];

            let atta = new discord.MessageAttachment("https://c.tenor.com/9kwNAT9bTkEAAAAC/bong-smoke.gif");
            message.channel.send({content: `Time to hit up: ${Responses[Math.floor(Math.random() * Responses.length)]}`, files: [atta]})
            
        }
        
    }


