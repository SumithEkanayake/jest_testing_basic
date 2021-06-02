const reverseString = require('./reverseString');

describe("Reverse String functions", () => {

    test('reverseString function exists',() => {
        expect(reverseString).toBeDefined();
    })

    test('String reverse',() => {
        expect(reverseString('hello')).toEqual('olleh');
    })

    test('String reverse',() => {
        expect(reverseString('Hello')).toEqual('olleh');
    })
})
