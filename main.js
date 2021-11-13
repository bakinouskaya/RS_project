import { CaesarDecode } from './caesar.js';

// console.log(CaesarDecode('text'))
let operations, input, output;
input = './file.txt';
let flagIndex = process.argv.indexOf('-c');
if (flagIndex !== -1) {
  operations = process.argv[flagIndex + 1].split('-');
}
operations = ["C1", "C0"]
flagIndex = process.argv.indexOf('-i');
if (flagIndex !== -1) {
  input = process.argv[flagIndex + 1];
}
else input;

flagIndex = process.argv.indexOf('-o');
if (flagIndex !== -1) {
  output = process.argv[flagIndex + 1];
}
else output = '';
import { newStream, transform } from './stream.js';
// console.log(CaesarDecode(input))
pipeline(
  stream, 
  transform,
  newStream, 
  err => {
  });

// console.log(input)
export{ operations, input, output };
