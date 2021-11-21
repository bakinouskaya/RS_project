const { expect } = require('@jest/globals');
const { FindInput, FindOutput, FindConfig } = require('../main.js');

describe('testing atbash cipher', () => {
    let commandLine = ['-c', 'A-R1', '-i', 'file.txt', '-o', 'output.txt'];
    let noInput = ['-c', 'A-R1', 'file.txt', '-o', 'output.txt'];
    let noOutput = ['-c', 'A-R1', '-i', 'file.txt', 'output.txt'];
    let noConfig = ['-i', 'file.txt', '-o', 'output.txt'];
    let result = 'somestring';
    beforeEach(() => {
        result = undefined;
      });

    test('input should be file.txt' , () => {
        result  = FindInput(commandLine);
        expect(result).toBe('file.txt');
    });
    
    test('output should be output.txt' , () => {
        result  = FindOutput(commandLine);
        expect(result).toBe('output.txt');
    });

    test('config should be A-R1' , () => {
        result  = FindConfig(commandLine);
        result = result.join('-');
        expect(result).toBe('A-R1');
    });

    test('input should be undefined', () => {
        result  = FindInput(noInput);
        expect(result).toBe(undefined);
    });

    test('output should be undefined', () => {
        result  = FindOutput(noOutput);
        expect(result).toBe(undefined);
    });

});
