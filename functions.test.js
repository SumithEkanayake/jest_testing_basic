const functions = require('./functions');

describe("test function", () => {    
    
    test('add 2+3 to equal 5',() => {
        expect(functions.add(2,3)).toBe(5);
    });

    test('add 2+3 to not equal 4',() => {
        expect(functions.add(2,3)).not.toBe(4);
    });
    
    test('User should be Sumith Ekanayke', () => {   
        expect(functions.createUser()).toEqual({firstName: 'Sumith', lastName: 'Ekanayake'});
    });

     //Array 
     test('Admin should be in username', () => {
        usernames = ['john', 'brad' , 'admin'];
        expect(usernames).toContain('admin');
    });

    //async
    test('User fetch name should be Leanne Graham',async() => {
        expect.assertions(1);
        const data = await functions.fetchUser();
        expect(data.name).toEqual('Leanne Graham');   
    });
});