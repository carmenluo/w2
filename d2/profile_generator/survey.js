let profile = {
  name:'',
  act: '',
  music: '',
  meal:'',
  thing: '',
  sprot:'',
  superpower: ''
};
const questions = ["What's your name? Nicknames are also acceptable\n",
  "What's an activity you like doing?\n",
  "What do you listen to while doing that?\n",
  "Which meal is your favourite (eg: dinner, brunch, etc.)\n",
  "What's your favourite thing to eat for that meal?\n",
  "Which sport is your absolute favourite?\n",
  "What is your superpower? In a few words, tell us what you are amazing at!\n"
];
let answers = [];
const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  return new Promise((resolve, reject) => {
    // resolve to active 'then' chaining (empty array for answers)
    let chainQ = Promise.resolve([]);
    questions.forEach(question => {
      chainQ = chainQ.then(answers => new Promise((resolveQ, rejectQ) => {
        r1.question(`${question}`, (answer) => {
          console.log(`Thank you for you feedback: ${answer}\n`);
          answers.push(answer);
          resolveQ(answers);
        })
      }))
    });
    //Have to call then to return answers, otherwise it will return at the beginning without waiting for all questions
    chainQ.then(answers => {
      r1.close();
      resolve(answers);
    })
  })
}

let result = askQuestion();
result
.then(data =>{
  let i = 0;
  for (let item in profile){
    profile[item] = data[i];
    i++;
  }
  console.log(profile);
});