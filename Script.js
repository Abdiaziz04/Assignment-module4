// Assuming there are arrays of names provided in the starter code
var names = ["John", "Jane", "Bob", "Alice", /* ... */];

// Loop through the array of names
for (var i = 0; i < names.length; i++) {
  // Get the current name
  var name = names[i];

  // Check if the name starts with 'J' or 'j'
  if (name.charAt(0).toLowerCase() === 'j') {
    // Print "Goodbye JSomeName" to the console
    console.log("Goodbye " + name);
  } else {
    // Print "Hello SomeName" to the console
    console.log("Hello " + name);
  }
}
