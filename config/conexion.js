const { Pool } = require('pg');
const { find } = require('lodash');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node',
    password: 'postgres',
    port: 5432,
});

const getPersona = async(req, res) => {
    const response = await pool.query('SELECT * FROM persona');
    return response.rows;
}

async function findId(id) {
    const response = await pool.query(`SELECT * FROM persona WHERE id=${id}`);
    return response.rows;
}


async function insertPersona(per) {
    let sql = 'INSERT INTO persona(nombre, apellido, edad) VALUES($1,$2,$3)';
    await pool.query(sql, per);
}

async function editPersona(id, per) {
    let sql = `UPDATE persona SET nombre=$1, apellido=$2, edad=$3 WHERE id=${id}`;
    await pool.query(sql, per)
}
async function deletePersona(id, per) {
    let sql = `DELETE FROM persona WHERE id=${id}`;
    await pool.query(sql)
}
module.exports = {
    getPersona,
    editPersona,
    insertPersona,
    findId,
    deletePersona
};