var express = require('express');
var router = express.Router();
const conexion = require('../config/conexion');

const insert = conexion.insertPersona;
/* GET users listing. */
router.post('/persona/operar', (req, res, next) => {
    let per = [req.body.nombres, req.body.apellidos, req.body.edad];
    if (req.body._id === "") {
        try {
            insert(per);
        } catch (err) {
            console.log(err);
        }
    } else {
        try {
            conexion.editPersona(req.body._id, per);
        } catch (err) {
            console.log(err);
        }
    }

    res.redirect('/');
})

module.exports = router;