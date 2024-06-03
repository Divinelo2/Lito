module.exports = {
 config: {
 name: "dave",
 version: "1.0",
 author: "Jaychris Garcia",
 countDown: 5,
 role: 0,
 shortDescription: "no prefix",
 longDescription: "no prefix",
 category: "no prefix",
 }, 
 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "dave") {
 return message.reply({
 body: "hello, i'm Dave. how are you .",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/yoFQmX2.jpg")
 });
 }
 }
}