import fs from 'fs';
import { Transform,pipeline } from 'stream';
import  { operations, input as filename, output } from './main.js';
import { CaesarDecode, CaesarEncode } from './caesar.js';
// console.log(filename);
let d1;
let stream = new fs.ReadStream(filename, {encoding: 'utf-8'});
let newStream = new fs.WriteStream('./newStream.txt');
let transform = new Transform({
    writableObjectMode: true,
    transform(chunk) {
      operations.map(function(element){
      // let _this = this;
        if(element === 'C1'){
          transform.push(CaesarDecode(chunk));
        }
        if(element === 'C0'){
          transform.push(CaesarEncode(chunk));
        }
      })
      this.push(CaesarDecode(chunk));
      // callback();  
    }  
  });
  

// stream.on('data', function(chunck){
//     let data = stream.read();
//     console.log(data);
    // newStream.write(chunck);
// })
 
// const transform = new Transform({
//     writableObjectMode: true,
//     transform(chunk, encoding, callback) {
//       this.push(JSON.stringify(chunk));
//       callback();  
//     }  
//   });
  
// stream.pipe(newStream);
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

export{ filename };
