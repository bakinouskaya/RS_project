
let operations, input, output;


let flagIndex = process.argv.indexOf('-c');
flagIndex !== -1? operations = process.argv[flagIndex + 1].split('-'): operations;


flagIndex = process.argv.indexOf('-i');
flagIndex !== -1? input = process.argv[flagIndex + 1]:input;

flagIndex = process.argv.indexOf('-o');
flagIndex !== -1? output = process.argv[flagIndex + 1]: output;


export{ operations, input, output };
