const { expect } = require('@jest/globals');
const { Atbash } = require('../atbash.js');

describe('testing atbash cipher', () => {

    test('should be Aa123zZ' , () => {
        let str = 'Zz123aA';
        let result  = Atbash(str);
        expect(result).toBe('Aa123zZ');
    });
    
});

