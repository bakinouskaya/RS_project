
let operations, input, output;
const commandLine = process.argv;

let flagIndex;

function FindConfig(text){
    flagIndex = text.indexOf('-c');
    // text.indexOf('-c')
    try {
       
        if(flagIndex !== -1 || text[flagIndex + 1].length > 0 
        ){
            
            return operations = text[flagIndex + 1].split('-')
           
        }
         else{
             throw error()
         };
    }
    catch(error){
        console.log('wrong config');

    }
}
FindConfig(commandLine);


function FindInput(text){
    flagIndex = text.indexOf('-i');
    try {
        
        if(flagIndex !== -1 || text[flagIndex + 1].trim.length > 0 
        
        ){
           
            return input = text[flagIndex + 1];
        }
        else{
            throw error()
        };
    
    }
    catch(error){
        console.log('wrong input');
    
    }
}
FindInput(commandLine);

function FindOutput(text){
    flagIndex = text.indexOf('-o');
    try {
       
        if(flagIndex !== -1)
        {
           return output = text[flagIndex + 1];
        }
         else{
             throw error()
         };
    }
    catch(error){
        console.log('wrong output');
    
    }
}
FindOutput(commandLine);


module.exports ={ FindInput, FindOutput, FindConfig, operations, input, output };
