const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

///***// Create a test suite using Jest
describe("Message class", function() {

  it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() { new Message();}).toThrow(new Error('Message name required.'));
  });

///*** Test that the constructor sets the name property

  it("constructor sets name", function() {
///*Arrange
    let name = 'Test message';
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
///*Act
    let message = new Message(name,commands);
///*Assert
    expect(message.name).toEqual(name);
  });

///***This test uses the toEqual matcher, which checks that two values are equal by comparing their properties recursively. This is useful for comparing arrays or objects that may have different references but the same contents.
  it("constructor sets commands", function() {
    let name = 'Test message';
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message(name, commands);
  
    expect(message.commands).toEqual(commands);
  });

});

