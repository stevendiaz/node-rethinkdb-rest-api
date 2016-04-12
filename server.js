var express = require('express'),
    module = require('./modules/crud'),
    app = express();

app.use(express.bodyParser());
app.get('/objects', module.findAll); //Addition to spec: HTTP GET all objects
app.get('/objects/:id', module.findById);
app.post('/objects', module.create);
app.delete('/objects/:id', module.delete);
//Add delete all? Is this a good decision?
app.put('/objects/:id', module.update);

app.listen(3000);
console.log('Listening on port 3000...');
