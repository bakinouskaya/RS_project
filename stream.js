import fs from 'fs';
import { Transform,pipeline } from 'stream';
import  { operations, input, output } from './main.js';
import { CaesarDecode, CaesarEncode } from './caesar.js';


let stream = new fs.ReadStream(input, {encoding: 'utf-8'});
let newStream = new fs.WriteStream(output);
let transform = new Transform({
    writableObjectMode: true,
    transform(chunk) {
      operations.map(function(element){
        if(element === 'C1'){
          transform.push(CaesarDecode(chunk));
        }
        if(element === 'C0'){
          transform.push(CaesarEncode(chunk));
        }
      })
      this.push(CaesarDecode(chunk));
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
// stream.on('error', function(err){
//     console.log('Something went wrong');
// })
// newStream.on('error', function(err){
//     console.log('Can not write');
// })

