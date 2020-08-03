var express = require('express');
var router = express.Router();
const conexion = require('../config/conexion');

const persona = conexion.getPersona;

router.get('/', (req, res) => {
    persona()
        .then((result) => {
            res.render('index', { personas: result });
        })
        .catch((err) => console.log(err));
});

router.get('/persona/nuevo', (req, res, next) => {
    res.render('personaForm', {});
});
router.get('/persona/modificar/:id', (req, res, next) => {
    let idPersona = req.params.id;
    conexion.findId(idPersona)
        .then((result) => {
            res.render('personaForm', { persona: result[0] });
        })
        .catch((err) => console.log(err));
});

router.get('/persona/eliminar/:id', (req, res, next) => {
    let idPersona = req.params.id;
    conexion.deletePersona(idPersona)
        .then((result) => {
            console.log("se borro", result)
        })
        .catch((err) => console.log(err));
    res.redirect('/');
});

module.exports = router;