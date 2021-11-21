const fs = require ('fs');
const { Transform, pipeline, Readable} = require ('stream');
const { operations, input, output } = require ('./main.js');
const { CaesarDecode, CaesarEncode } = require ('./caesar.js');
const { Atbash } = require ('./atbash.js');


let stream, stats;
console.log(input);


try {
stats = fs.statSync(input);
stream = new fs.ReadStream(input, {encoding: 'utf-8'});
}
catch (error) {
console.log("File does not exist. Reading from console...");
stream = Readable.from([input, {encoding: 'utf-8'}]);
}

let newStream = new fs.WriteStream(output);
let transform = new Transform({
    writableObjectMode: true,
    transform(chunk) {
      operations.map(function(element){
        if(element === 'C0'){
          transform.push(CaesarDecode(chunk, 1));
        }
        if(element === 'C1'){
          transform.push(CaesarEncode(chunk, 1));
        }
        if(element === 'R0'){
          transform.push(CaesarDecode(chunk, 8));
        }
        if(element === 'R1'){
          transform.push(CaesarEncode(chunk, 8));
        }
        if(element === 'A'){
          transform.push(Atbash(chunk));
        }
      })
    }  
  });

pipeline(
    stream, 
    transform,
    newStream, 
    err => {
      console.log('Wrong input!')
    });



// let stream, stats;

// try {
// stats = fs.statSync(input);
// stream = new fs.ReadStream(input, {encoding: 'utf-8'});
// if (input.includes('-c')){
//   console.log('Source doesn\'t exist');
//   throw(error);
  
// };
// }
// catch (error) {
// console.log("File does not exist. Reading from console...");
// stream = Readable.from([input, {encoding: 'utf-8'}]);
// }

// let newStream = new fs.WriteStream(output);
// let transform = new Transform({
//     writableObjectMode: true,
//     transform(chunk) {
//       operations.map(function(element){
//         if(element === 'C0'){
//           transform.push(CaesarDecode(chunk, 1));
//         }
//         if(element === 'C1'){
//           transform.push(CaesarEncode(chunk, 1));
//         }
//         if(element === 'R0'){
//           transform.push(CaesarDecode(chunk, 8));
//         }
//         if(element === 'R1'){
//           transform.push(CaesarEncode(chunk, 8));
//         }
//         if(element === 'A'){
//           transform.push(Atbash(chunk));
//         }
//       })
//     }  
//   });

// pipeline(
//     stream, 
//     transform,
//     newStream, 
//     err => {
//       console.log('Not done!')
//     });


// module.exports = { input, output };