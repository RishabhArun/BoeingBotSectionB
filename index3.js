const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//patch notes daily update
client.on('message' , msg => {
  if (msg.content === "+patchnotes") {
    const polembed = new Discord.MessageEmbed()
    .setColor('#29e684')
    .setTitle('PatchNotes 1.5.3')
    .setAuthor('@d3ca')
    .setDescription('1/27/2021')
    .addFields(
      { name: 'Major Changes', value: 'Added +content' },
      { name: 'Major Changes', value: 'Updated help menu +help' },
      { name: 'Minor Changes', value: 'bug fixes' },
      { name: '\u200B', value: '\u200B' },
         )
         .setFooter('2020-2021 Firey Inc/2021 Power RnD/2020-2021 BBT')
        .setTimestamp()

        msg.channel.send(polembed)
    
  } 
});

//help
client.on('message' , msg => {
  if (msg.content === "+help") {
    const polembed = new Discord.MessageEmbed()
    .setColor('#29e684')
    .setTitle('You Asked For help')
    .setDescription('updated last 1/1/2021')
    .addFields(
      { name: 'Help', value: 'Want more help, or want to report a bug? Contact @d3ca or @Boeing787' },
      { name: 'Commands', value: 'Here is a list of command' },
      { name: '\u200B', value: '\u200B' },
      { name: 'Want to roll dice', value: '+d6roll change the number for more sided dice goes up to 12', inline: true },
      { name: 'Want A vaild win95 key', value: '+95rpk, now you have one', inline: true },
      { name: 'Need someone too say hi to you', value: '+hello', inline: true },
      { name: 'Want the curent patch-notes and version', value: '+patchnotes', inline: true },
      { name: 'Want to Make Polls', value: '+poll ; question? ; ans1 ; ans2 - type the question in question? and the answers in ans1 and 2', inline: true },
      { name: 'Want to know what is boeing bot all about', value: 'type in +about and find out', inline: true },
      { name: 'Want to flip a coin', value: 'type in +flipacoin and find out', inline: true },
      { name: 'Want an OEM Key 2', value: 'type in +win95kg oem', inline: true },
      { name: 'Want a random number', value: 'use +randnum[flt/int][maximum number] for a chance to win. DO NOT USE THE BRACKETS', inline: true },
      { name: 'Want to know the word of the day', value: '+wordofday', inline: true },
      { name: 'Want To know the joke of the day', value: '+jokeofday', inline: true },
      { name: 'Want To know the member of the day', value: '+memberofday', inline: true },
      { name: 'Want To knowwher the best content is' , value: '+content', inline: true },
      { name: 'Want To the help menu for boeing bot pro', value: '$help', inline: true },
         )
         .setFooter('2020-2021 Firey Inc/2021 Power RnD/2020-2021 BBT')
        .setTimestamp()

        msg.channel.send(polembed)
    
  } 
});

//random number genarator

//random memeber picker

//word of the day
client.on('message' , msg => {
  if (msg.content === "+wordofday") {
    const polembed = new Discord.MessageEmbed()
    .setColor('#29e684')
    .setTitle('Word Of the Day')
    .setDescription('Word Of the day 12/29/2020')
    .addFields(
      { name: 'Geild', value: 'Definition- extremely cold or icy' },
      { name: '\u200B', value: '\u200B' },
         )
         .setFooter('2020-2021 Firey Inc/2021 Power RnD/2020-2021 BBT')
        .setTimestamp()

        msg.channel.send(polembed)
    
  } 
});

//joke of the day
client.on('message' , msg => {
  if (msg.content === "+jokeofday") {
    const polembed = new Discord.MessageEmbed()
    .setColor('#29e684')
    .setTitle('Joke Of the Day')
    .setDescription('Joke Of the day 12/29/2020')
    .addFields(
      { name: 'Computer Joke of the day', value: 'Q. What do you call it when you have your moms mom on speed dial? A. Instagram.' },
      { name: 'Joke of the day', value: 'Why did the chicken cross the road?  Because the chicken behind it didn’t know how to socially distance properly.' },
      { name: '\u200B', value: '\u200B' },
         )
         .setFooter('2020-2021 Firey Inc/2021 Power RnD/2020-2021 BBT')
        .setTimestamp()

        msg.channel.send(polembed)
    
  } 
});

//member of the day
client.on('message' , msg => {
  if (msg.content === "+memberofday") {
    const polembed = new Discord.MessageEmbed()
    .setColor('#29e684')
    .setTitle('THE BEST MEMBER')
    .setDescription('Member the day 12/29/2020')
    .addFields(
      { name: 'Member the day', value: '@boeing bot pro'},
      { name: 'Not Member the day', value: '@clapsking'},
      
      { name: '\u200B', value: '\u200B' },
         )
         .setFooter('2020-2021 Firey Inc/2021 Power RnD/2020-2021 BBT')
        .setTimestamp()

        msg.channel.send(polembed)
    
  } 
});

//content
client.on('message' , msg => {
  if (msg.content === "+content") {
    const polembed = new Discord.MessageEmbed()
    .setColor('#29e684')
    .setTitle('content')
    .setDescription('Do yo want to see the best content go to the websites below')
    .addFields(
      { name: 'Check out Boeings youtube', value: 'https://www.youtube.com/channel/UCYYvkIJ0h67FowZSO_JK8cA' },
      { name: 'Check out D3cas twitch', value: 'https://www.twitch.tv/thed3ca' },
      { name: '\u200B', value: '\u200B' },
         )
         .setFooter('2020-2021 Firey Inc/2021 Power RnD/2020-2021 BBT')
        .setTimestamp()

        msg.channel.send(polembed)
    
  } 
});



// change this client.login('');
