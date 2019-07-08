const express = require('express');
const bodyParse =require('body-parser');
const path = require('path');

const port=3000;
const api = require('./server/routes/api');

const Server = express();

Server.use(express.static(path.join(__dirname, 'dist/experiment')));
Server.use(bodyParse.urlencoded({extended:true}));
Server.use(bodyParse.json());


Server.use('/api' ,api);

Server.get('*', function(req, res){
res.sendfile(path.join(__dirname,'dist/experiment/index.html'));
});

Server.listen(port, function(){
console.log('server is running on '+ port);
});
