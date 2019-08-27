// No numbers are provided: Easy. It should just not beep at all and end immediately
//since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. 
//We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of 
//attempting to call setTimeout with a non-number.
const timer1 = function () {
  let arguments = process.argv.slice(2);
  arguments.sort((a, b) => a - b);
  for (let argument of arguments) {
    if (argument.length === 0 || argument < 0 || isNaN(argument)) {
      break;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, argument * 1000);
  }

}
timer1();