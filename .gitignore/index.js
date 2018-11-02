



const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = ';';


client.login("NDc5MTkzNDM2NTcwOTEwNzIz.DlYEyw.kDp9WnQnvozs9PN168hUuX2qU2o");

client.on("ready", () => {
    console.log("Bot Prêt");
    client.user.setActivity("L'actualité, même sur discord !");
});

client.on('message', message => {





//                               A                          I                           D                            E                         // 


    if(message.content === prefix + "aide") {
        var embed = new Discord.RichEmbed()
        .setColor("#3333FF")
        .setTitle("**Commandes du serveur**")

        .addField("__**Commandes utiles à tous :**__" , "*Commandes utilisables par tout le monde*")

        .addField("__;aide :__" , "-Affiche Les commandes du Bot Tournois")
        .addField("__;rules :__" , "-Affiche les règles")
        .addField("__;infos__ :" , "Affiche les informations serveurs")
        .addField("__;aideadm :__" , "-Aide aux commandes administrateur")

        .setFooter("KeyShëlter ?News | Server")
        message.channel.send(embed)
    }



    if(message.content === prefix + "aideadm") {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");
        var admaide = new Discord.RichEmbed()
        
        .setColor("#3333FF")
        .setTitle("**Commandes du serveur**")
        .setDescription("Commande Bot ADM")

        .addField("__;clear + [nombre]__" , "-Clear le chat celon un nombre précis de messages")


        
        .setFooter("KeyShëlter News | Server")

        message.channel.send(admaide)
        console.log("Un joueur à demandé le menu d'aideadm")
    }



//                  R               U          L              E             S   //




    if(message.content === prefix + "rules") {
        message.channel.send("@everyone")
    
        var rules = new Discord.RichEmbed()
    
        .setColor("#3333FF")
        .setTitle("__**Règles du serveurs à respecter**__")
        .addField("__**Règle 1 :**__  Aucune Pub n'est autorisée , les liens sont supprimés et les divulgants sont sanctionnés tout comme le spam , les messages raciste , haineux , pornographique." , "** **")
        .addField("__**Règle 2 :**__ Toute les menaces (DDOS,DOX etc) seront suivies d'un ban." , "** **")
        .addField("__**Merci de respecter ces seules règles pour la bonne entente dans le serveur.**__","** **")
        .addField("*Merci d'ajouter l'annotation validé quand le règlement est lu.*","** **")
        .setFooter("KeyShëlter News")

        message.channel.send(rules);
    }





//                                        C                  L                  E               A           R                            //



    if(message.content.startsWith(prefix + "clear")) {
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission !");

        let args = message.content.split(" ").slice(1);

        if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messages à supprimer !")
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`**${args[0]} messages ont été supprimés !**`);
        })
    }




//                         I                 N                     F                    O                S



    if(message.content === prefix + "infos") {
        var infos_embed = new Discord.RichEmbed()

        .setColor("#CC0000")
        .setTitle("Infos concernant le serveur !")
        .setThumbnail(message.author.avatarURL)
        .addField("Nom du bot :robot: :", `${client.user.tag}`, true)
        .addField("Descriminateur du bot :hash: :", `${client.user.discriminator}`)
        .addField("ID du bot :id: :", `${client.user.id}`)
        .addField("Nombre de bots :", message.guild.members.filter(m => m.user.bot).size)
        .addField("Nombre de Membres :", message.guild.members.filter(m => ! m.user.bot).size)
        .addField("Nombre de membres en ligne :", message.guild.members.filter(m => m.presence.status === 'online').filter(m => ! m.user.bot).size)
        .addField("Nombre de membres hors-ligne :", message.guild.members.filter(m => m.presence.status === 'offline').filter(m => ! m.user.bot).size)
        .addField("Nombre de Catégories :", message.guild.channels.filter(chan => chan.type === 'category').size)
        .addField("Nombre de salons textuels :", message.guild.channels.filter(chan => chan.type === 'text').size)
        .addField("Nombre de salons vocaux :", message.guild.channels.filter(chan => chan.type === 'voice').size)
        .addField("Nombre de salons et catégories :", message.guild.channels.size)
        .setFooter("KeyShelter News |Infos Server");
        message.channel.send(infos_embed)
    }


    if(message.content === prefix + "Twitter") {
        message.channel.send("@everyone")
    
        var twitter1 = new Discord.RichEmbed()
    
        .setColor("#3333FF")
        .setTitle("Infos du Twitter OFFICIEL de PUBG France")
        .setFooter("KeyShëlter News")

        message.channel.send(twitter1);
    }

    if(message.content === prefix + "Defis") {
    
        var Defis = new Discord.RichEmbed()
    
        .setColor("#3333FF")
        .setTitle("__**Aide aux défis passe de combats (Astuces,lieux,etc)**__")
        .setFooter("KeyShëlter News")

        message.channel.send(Defis);
    }

    if(message.content === prefix + "PatchF") {

        var patch = new Discord.RichEmbed()
    
        .setColor("#3333FF")
        .setTitle("PatchNote PUBG")
        .setFooter("KeyShëlter News")

        message.channel.send(patch);
    }


});
