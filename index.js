const express = require('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('simple Node Server');
});


app.listen(port, ()=>{
    console.log(`simple is not server running on port ${port}`)
})