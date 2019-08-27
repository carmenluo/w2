const profiles = [];
let profile ={};
const questions = ["What's your name? Nicknames are also acceptable\n", 
"What's an activity you like doing?",
"What do you listen to while doing that?",
"Which meal is your favourite (eg: dinner, brunch, etc.)",
"What's your favourite thing to eat for that meal?",
"Which sport is your absolute favourite?",
"What is your superpower? In a few words, tell us what you are amazing at!"
];
const readline = require('readline');
const r1 = readline.createInterface({
  input : process.stdin,
  output: process.stdout
});
r1.question("What's your name? Nicknames are also acceptable\n",(answer) =>{
  console.log(`Thank you for your valuable feedback: ${answer}`);
  profile.name = answer;
//  r1.close();
})

// var read = require('readline'),
//     input = read.createInterface(process.stdin, process.stdout),
//     questions = ['test1: ', 'test2: '],
//     counter = 0;

// input.setPrompt(questions[0]);
// input.prompt();

// input.on('line', function (a) {
//     console.log('answer: ', a);
//     counter++;
//     if (counter < questions.length) {
//         input.setPrompt(questions[counter]);
//         input.prompt();
//     } else {
//         process.exit(0);
//     }
// });
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!