
let operations = '', input = '', output = '';


let flagIndex;
flagIndex = process.argv.indexOf('-c');
try {
   
    if(flagIndex !== -1 || process.argv[flagIndex + 1].length > 0 
    ){
        operations = process.argv[flagIndex + 1].split('-')
    }
     else{
         throw error()
     };
}
catch(error){


}
flagIndex = process.argv.indexOf('-i');
try {
    
    if(flagIndex !== -1 || process.argv[flagIndex + 1].trim.length > 0 
      
    ){
        input = process.argv[flagIndex + 1];
    }
     else{
         throw error()
     };
   
}
catch(error){
    console.log('wrong config');

}
flagIndex = process.argv.indexOf('-o');
try {
   
    if(flagIndex !== -1)
    {
        output = process.argv[flagIndex + 1];
    }
     else{
         throw error()
     };
}
catch(error){
    console.log('wrong config');

}

module.exports ={ operations, input, output };
