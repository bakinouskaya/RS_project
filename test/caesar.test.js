const { expect } = require('@jest/globals');
const { CaesarDecode, CaesarEncode } = require('../caesar.js')

describe('testing caesar cifers', () => {
    
    test('should be BbCc*!6Aa' , () => {
        let str = 'AaBb*!6Zz';
        let result  = CaesarDecode(str, 1);
        expect(result).toBe('BbCc*!6Aa');
    });
    
    test('should be AaBb*!6Zz' , () => {
        let str = 'BbCc*!6Aa';
        let result  = CaesarEncode(str, 1);
        expect(result).toBe('AaBb*!6Zz');
    });
    
});


