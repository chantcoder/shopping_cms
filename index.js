require('dotenv').config();
const express = require('express');




const app = express();
// const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login/data',(req,res)=>{
    console.log(req.query.userId)

    let userId = req.query.userId;
    let password = req.query.password;

    if(userId ==7020481829 && password == 'password'){
        res.send(`Login Successfully`);
    }else{
        res.send(`failed to login`);
    }
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`)
})