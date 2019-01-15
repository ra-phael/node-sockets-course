let expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message'); 

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let generated = generateMessage('me','whatever');

        expect(generated.from).toBe('me');
        expect(generated.text).toBe('whatever');
        expect(typeof generated.createdAt).toBe('number');
        
    })
})

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        let generated = generateLocationMessage('sender', 1, 2);

        expect(generated.from).toBe('sender');
        expect(typeof generated.createdAt).toBe('number');
        expect(generated.url).toBe('https://www.google.com/maps?q=1,2');
        
    })
})