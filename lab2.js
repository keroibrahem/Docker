const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`<h2>hello world from kero:)</h2><h3>docker lab</h3>`)
})

app.listen(8080);
