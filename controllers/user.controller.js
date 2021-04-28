const { response, request } = require('express');



const userGet = (req = request, res = response) => {
    const {q, nombre = 'No name', apiKey} = req.query;
    
    res.json({
        msg: 'get Api - controller',
        q,
        nombre,
        apiKey
    });
}


const userPut = (req, res = response) => {
    const id = req.params.id;
    
    res.json({
        msg: 'put Api - controller',
        id
    });
}


const userPost = (req, res = response) => {
    const body = req.body;

    res.json({
        msg: 'post Api',
        body
    });
}


const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api - controller'
    });
}



module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}