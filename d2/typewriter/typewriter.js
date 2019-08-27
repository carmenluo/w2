const sentence = "hello there from lighthouse labs";
let newSentence = sentence+'\n';
let timer = 1000;
for (const char of newSentence) {
  timer += 50;
  setTimeout(()=>
  {
    process.stdout.write(char);
  },timer);
}
