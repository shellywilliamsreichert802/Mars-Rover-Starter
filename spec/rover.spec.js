const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');
// *Import the Rover, Command, and Message classes


// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// * this creates a test suite for the Rover class
describe("Rover class", function() {

  // 7 tests here!
  // Test 7: constructor sets position and default values for mode and generatorWatts
  it("constructor sets position and default values for mode and generatorWatts", function() {
    // Create a new rover instance with a position of 98382
    let rover = new Rover(98382);
    // Expect the rover's position to be 98382
    expect(rover.position).toEqual(98382);
    // Expect the rover's mode to be 'NORMAL'
    expect(rover.mode).toEqual('NORMAL');
    // Expect the rover's generatorWatts to be 110
    expect(rover.generatorWatts).toEqual(110);
  });

  // Test 8: response returned by receiveMessage contains the name of the message
  it("response returned by receiveMessage contains the name of the message", function() {
    let rover = new Rover(98382);

    // Create a new message instance with a name of 'Test message with two commands' and two commands
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    // Call the receiveMessage method on the rover with the message as an argument
    let response = rover.receiveMessage(message);
    // Expect the response's message property to be 'Test message with two commands'
    expect(response.message).toEqual('Test message with two commands');
  });

  // Test 9: response returned by receiveMessage includes two results if two commands are sent in the message
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let rover = new Rover(98382);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let response = rover.receiveMessage(message);

    // Expect the response's results property to be an array of length 2
    expect(response.results.length).toEqual(2);
  });

  // Test 10: responds correctly to the status check command
  it("responds correctly to the status check command", function() {
    let rover = new Rover(98382);

    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message with one command', commands);
    // Call the receiveMessage method on the rover with the message as an argument
    let response = rover.receiveMessage(message);

     // Expect the response to have a results property that is an array
    expect(response.results).toBeInstanceOf(Array);

    
    // Expect the response's results property to be an array of length 1
    expect(response.results.length).toBe(1);
      //expect the results array to have 1 element
    

    // Expect the first element of the results array to be an object with a completed property of true
    expect(response.results[0].completed).toBe(true);

    // Expect the first element of the results array to have a roverStatus property that is an object
    expect(response.results[0].roverStatus).toBeInstanceOf(Object);
   
    // Expect the roverStatus object to have a mode property that is 'NORMAL'
    // expect(response.results[0].roverStatus.mode).toEqual('NORMAL');
    expect(response.results[0].roverStatus.mode).toBe(rover.mode);

    // Expect the roverStatus object to have a generatorWatts property that is 110
    expect(response.results[0].roverStatus.generatorWatts).toBe(110);

    // Expect the roverStatus object to have a position property that is 98382
    // expect(response.results[0].roverStatus.position).toEqual(98382);
    expect(response.results[0].roverStatus.position).toBe(rover.position);
    });
  });

  // Test 11: responds correctly to the mode change command
  it("responds correctly to the mode change command", function() {
    // Create a new message instance with a name of 'Test message with one command' and a mode change command to 'LOW_POWER'
    let rover = new Rover(98382);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test message with one command', commands);
    // Call the receiveMessage method on the rover with the message as an argument
    let response = rover.receiveMessage(message);
    // Expect the response's results property to be an array of length 1
    expect(response.results.length).toEqual(1);
    // Expect the first element of the results array to be an object with a completed property of true
    expect(response.results[0].completed).toEqual(true);
    // Expect the rover's mode to be 'LOW_POWER'
    expect(rover.mode).toEqual('LOW_POWER');
  });

  // Test 12: responds with a false completed value when attempting to move in LOW_POWER mode
  it("responds with a false completed value when attempting to move in LOW_POWER mode", function() {
    // Create a new rover instance with a position of 98382
    let rover = new Rover(98382);
    // Create a new message instance with a name of 'Test message with two commands' and a mode change command to 'LOW_POWER' and a move command to 4321
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 4321)];
    let message = new Message('Test message with two commands', commands);
    // Call the receiveMessage method on the rover with the message as an argument
    let response = rover.receiveMessage(message);
    // Expect the response's results property to be an array of length 2
    expect(response.results.length).toEqual(2);
    // Expect the first element of the results array to be an object with a completed property of true
    expect(response.results[0].completed).toEqual(true);
    // Expect the second element of the results array to be an object with a completed property of false
    expect(response.results[1].completed).toEqual(false);
    // Expect the rover's position to be unchanged at 98382
    expect(rover.position).toEqual(98382);
  });

  // Test 13: responds with the position for the move command
  it("responds with the position for the move command", function() {
    // Create a new rover instance with a position of 98382
    let rover = new Rover(98382);
    // Create a new message instance with a name of 'Test message with two commands' and a mode change command to 'NORMAL' and a move command to 4321
    let commands = [new Command('MODE_CHANGE', 'NORMAL'), new Command('MOVE', 4321)];
    let message = new Message('Test message with two commands', commands);
    // Call the receiveMessage method on the rover with the message as an argument
    let response = rover.receiveMessage(message);
    // Expect the response's results property to be an array of length 2
    expect(response.results.length).toEqual(2);
    // Expect the first element of the results array to be an object with a completed property of true
    expect(response.results[0].completed).toEqual(true);
    // Expect the second element of the results array to be an object with a completed property of true
    expect(response.results[1].completed).toEqual(true);
    // Expect the rover's position to be updated to 4321
    expect(rover.position).toEqual(4321);
  });

