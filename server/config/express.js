var express = require('express')
    ,app = express()
    ,path =  require('path');

app.set('clientPath', path.join(__dirname, '../..', 'client'));

app.use(express.static(app.get('clientPath')));

app.all('/*', function(req, res) {
        res.sendFile(path.join(app.get('clientPath'), 'index.html'));
});

module.exports = app;