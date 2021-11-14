import fs, { ReadStream } from 'fs';
import { Transform,pipeline } from 'stream';
import  { operations, input, output } from './main.js';
import { CaesarDecode, CaesarEncode } from './caesar.js';
import { Atbash } from './atbash.js';

let stream = new fs.ReadStream(input, {encoding: 'utf-8'});
stream.push(input);
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
    

// stream.on('end', function(){
// })
stream.on('error', function(err){
    stream.push(input);
    console.log('Something went wrong');
})
// newStream.on('error', function(err){
//     console.log('Can not write');
// })


