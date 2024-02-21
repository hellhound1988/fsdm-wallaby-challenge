import { readFileSync } from 'fs';

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const data = readFileSync('cipher.txt', 'utf8');
let result = '';
console.log('🤞 Assuming all three bugs are fixed 🤞\n');
await sleep(1000);
console.log('Printing the codeword...\n');
await sleep(500);
const сipher = data.split(' ');
let index = 0;
for (let i = index; index < cipher.length; index++) {
  if (index % 102 === 0) {
    result += '\n';
  }
  const cipherPoint = cipher[i];
  result += String.fromCharCode(+-cipherPoint);
}

console.log(result);
console.log('\n');

console.log('If you can read the codeword, email it to \'mike.beschastnov [at] gmail.com\'');
console.log('First three winners will get a prize! 🎁');
