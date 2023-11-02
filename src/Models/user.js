const fs = require('fs');


const getUser = ()=>{
    fs.readFile(__dirname.concat("\\","MOCK_DATA.json"),(err,data)=>{
        if (err) {
            throw err;
        }
            const user = JSON.parse(data);
         console.log(user);
    
        module.exports = user;
    });
}

export default getUser;

// console.log(__dirname);
// console.log(__filename);
// module.exports = user;