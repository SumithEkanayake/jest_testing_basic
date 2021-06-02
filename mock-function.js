const axios = require("axios");

function getUserData(){
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

module.exports = {getUserData}