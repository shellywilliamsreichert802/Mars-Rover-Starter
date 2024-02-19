// *Define Rover class
class Rover {

   // Write code here!
  // Define the constructor
  constructor(position) {
    // Set the position property to the parameter value
    this.position = position;
    // Set the mode property to 'NORMAL'
    this.mode = 'NORMAL';
    // Set the generatorWatts property to 110
    this.generatorWatts = 110;
  }

  // Define the receiveMessage method
  receiveMessage(message) {
    // Create an empty array to store the results
    let results = [];
    // Loop through the commands in the message
    for (let command of message.commands) {
      // Create an object to store the result of each command
      let result = {};
      // Check the command type
      if (command.commandType === 'MODE_CHANGE') {
        // Change the mode property to the value of the command
        this.mode = command.value;
        // Set the completed property to true
        result.completed = true;
      } else if (command.commandType === 'MOVE') {
        // Check if the mode is not 'LOW_POWER'
        if (this.mode !== 'LOW_POWER') {
          // Change the position property to the value of the command
          this.position = command.value;
          // Set the completed property to true
          result.completed = true;
        } else {
          // Set the completed property to false
          result.completed = false;
        }
      } else if (command.commandType === 'STATUS_CHECK') {
        // Set the completed property to true
        result.completed = true;
        // Set the roverStatus property to an object with the current state of the rover
        result.roverStatus = {
          mode: this.mode,
          generatorWatts: this.generatorWatts,
          position: this.position
        };
      }
      // Push the result object to the results array
      results.push(result);
    }
    // Return an object with the message name and the results array
    return {
      message: message.name,
      results: results
    };
  }
}

module.exports = Rover;