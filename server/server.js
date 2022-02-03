const express = require('express');
const cors = require('cors');
const firebase = require('./firebase');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const port = 4000;


app.get('/api', (req, res) => {
    res.json({
        message: 'Server is up and running ...'
    })
})

app.post('/post', (req, res) => {
    const a = Number(req.body.a);
    const b = Number(req.body.b);
    const message = {
        notification: {
          title: 'Result : ',
          body: `${a}+${b} = ${a+b}`
        },
        token: ''
    };
    firebase.sendMessage(message);
    res.json({result: String(a+b)})
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})