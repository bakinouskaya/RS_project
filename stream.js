import fs from 'fs';
import { Transform, pipeline, Readable} from 'stream';
import  { operations, input, output } from './main.js';
import { CaesarDecode, CaesarEncode } from './caesar.js';
import { Atbash } from './atbash.js';

let stream;
stream = new fs.ReadStream(input, {encoding: 'utf-8'});
(fs.stat(input, function(err) {
  if (err) {
    stream = Readable.from([input, {encoding: 'utf-8'}]);
    console.log("Source file not found");
  } 
  // else {
    // return stream = new fs.ReadStream(input, {encoding: 'utf-8'});
    // // console.log("File found");
  // }
}));


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
    });


// pipeline(
//       input, 
//       transform,
//       newStream, 
//       err => {
//       });
    

// stream.on('end', function(){
// })

// newStream.on('error', function(err){
//     console.log('Can not write');
// })


