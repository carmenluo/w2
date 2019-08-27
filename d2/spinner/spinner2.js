//process.stdout.write('hello from spinner1.js... \rheyyy\n');
const symbols = ['\r|   ','\r/   ', '\r-   ','\r\\   ','\r|   '];
let timer = 100;
for (let i =0 ;i <2 ; i++){;
  for (let symbol of symbols){
    timer += 200;
    setTimeout(() => {
      process.stdout.write(symbol);
    }, timer);
  }
}
