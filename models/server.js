const express = require('express');
require('dotenv').config();
var cors = require('cors')

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userRoutePath = '/api/users';


        //Middlewares
        //config de cors pa
        this.app.use( cors() );
        
        //parseo y lectura de body
        this.app.use(express.json());

        this.middlewares();
        
        //rutas de mi aplicacvion
        this.routes();
    }

    middlewares(){
        //directorio publico
        this.app.use(express.static('public'));
    }


    routes(){

        this.app.use(this.userRoutePath, require('../routes/user'));


    }


    listen(){
        this.app.listen(this.port, () =>{
            console.log('Servidor run port', this.port);
        });
    }
}


module.exports = Server;