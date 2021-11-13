import { CaesarDecode, CaesarEncode } from './caesar.js';
import { operations, input, output } from './main.js';
let output_modified = output;
operations.map(function(elem){
   if (elem == 'C1'){
       return output_modified  += CaesarDecode(input)
   } 
   if (elem == 'C0'){
    return output_modified += CaesarDecode(input)
} 
})

console.log(output_modified);