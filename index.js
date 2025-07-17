const express = require('express');
const app = express();
const rootPath = process.cwd();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./qr'),
    code = require('./pair');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/server', server);
app.use('/code', code);

app.use('/', async (req, res, next) => {
    res.sendFile(rootPath + '/pair.html')
})

app.listen(PORT, () => {
    console.log(`Don't Forget To Give Star KAMRAN-XD Server running on http://localhost:` + PORT)
})

module.exports = app;
