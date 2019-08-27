const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
const regex = new RegExp(/[1-9]/);
// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("Thank you! Ciao!")
    process.exit();
  }
  else if (key === 'b'){
    process.stdout.write('\x07');
  }
  else if (key.match(regex)){
    console.log(`setting timer for ${key} seconds..."`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
//  process.stdout.write('.');
});