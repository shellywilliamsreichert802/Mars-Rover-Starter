class Message {
   // Write code here!
   // Message.js

   ///write a Message class in JavaScript that has two properties: name and commands
   constructor(name, commands) {
     this.name = name;
     if (!name) {
       throw Error("Message name required.");
     }
     this.commands = commands;
   }
 }

 ///*code uses the same syntax as the command.js and checks if the name parameter is given. Commands parameter is an array of Command objects to access using the commands property of the Message instance
 module.exports = Message;
 
