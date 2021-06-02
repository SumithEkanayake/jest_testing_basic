const axios = require('axios');
jest.mock('axios');

describe("Mock api calls", () => {
    //mock
    test('mocking external endpoint in axios', () => {
        //arrange
        const mockedResponse = {data: {username:"test-user", address:"India"}}
        axios.get.mockResolvedValue(mockedResponse)
        const mock = require('./mock-function');

        //act
        mock.getUserData()

         //asserts
         expect(axios.get).toHaveBeenCalled();
         expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
         expect(axios.get).toHaveBeenCalledTimes(1);

    });
});