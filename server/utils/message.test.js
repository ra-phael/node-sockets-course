let expect = require('expect');

const { generateMessage } = require('./message'); 

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        let generated = generateMessage('me','whatever');

        expect(generated.from).toBe('me');
        expect(generated.text).toBe('whatever');
        expect(typeof generated.createdAt).toBe('number');
        
    })
})