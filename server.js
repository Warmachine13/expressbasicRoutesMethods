var express = require('express')
var app = express()


app.get('/tes/:id', (req, res, nex) => {
    console.log(req.params.id)
    //  console.log(nex)
    res.send(`<h1>${req.params.id}</h1>`);
})

app.post('/post', function (req, res) {
    console.log(req.param.id)
    res.send('hello world')
})

app.put('/put:id', function (req, res) {
    console.log(req.param.id)
    res.send('hello world')
})

app.delete('/delete:id', function (req, res) {
    res.send('hello world')
})

app.listen(3000, () => {
    console.log('Esta rodando na porta 3000');
});
