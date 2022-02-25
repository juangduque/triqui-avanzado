var readline = require('readline');
  
var rl = readline.createInterface(
        process.stdin, process.stdout);
  
rl.setPrompt(`What is your age? `);
rl.prompt();
let ageOut = 0;
rl.on('line', (age) => {
    rl.close();
    ageOut = age.toString().trim();
});