const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'S11@11r42ed1'
});

try{
    connection.query("SHOW TABLES",(err,result) =>{
        if(err) throw err;
        console.log(result);
    }); 
}catch (err){
    console.log(err);
}



let getRandomUser = () => {
    return {
      Id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),    
    };
 }

  