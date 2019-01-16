const expect = require('expect');
const { isRealString } = require('./validation');

describe('isRealString', () => {

    it('should reject non-string values', () => {
        let number = 434;
        let result = isRealString(number);
        expect(result).toBe(false);
    })

    it('should reject string with only spaces', () => {
        let spaces = '      ';
        let result = isRealString(spaces);
        expect(result).toBe(false);
    })

    it('should allow strings with non-space characters', () => {
        let string = 'example ';
        let result = isRealString(string);
        expect(result).toBe(true);
    })

})
