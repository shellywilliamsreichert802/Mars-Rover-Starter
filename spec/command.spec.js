const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });

  it("constructor sets command type", function() {
    let command = new Command('MOVE', 10);
    expect(command.commandType).toBe('MOVE');
  });

  ///*This test creates a new Command object with the command type ‘STATUS_CHECK’ and the value ‘rover1’. It then checks that the value property of the object is equal to ‘rover1’. This test verifies that the constructor correctly sets the value property in the new object
  it("constructor sets a value passed in as the 2nd argument", function() {
    let command = new Command('STATUS_CHECK', 'rover1');
    expect(command.value).toBe('rover1');
  });

});

 
    ///*Code represents a command type and a value. The code also defines a constructor for the Command class, which takes two parameters: commandType and value. The constructor sets the commandType property of the new object to the value of the parameter, and throws an error if command type is NOT passed into constructor as the first parameter. Code uses expect and to be modules to check that the Command class works as expected. The test suite has two tests: one that verifies that the constructor throws an error and another that verifies that the constructor sets the command type correctly.

