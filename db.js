const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectAlunes() {
    const res = await client.query('SELECT * FROM alunes');
    return res[0];
}

async function selectAlunes(id) {
    const res = await client.query('SELECT * FROM alunes WHERE ID=?', [id]);
    return res[0];
}

async function deleteAlunes(id) {
    return await client.query('DELETE FROM alunes where id=?;', [id]);
}

async function insertAlunes(alunes) {
    const sql = 'INSERT INTO alunes(nome,idade,nota1,nota2,professor,sala) VALUES (?,?,?,?,?,?);';
    const values = [alunes.nome, alunes.idade, alunes.nota1, alunes.nota2, alunes.professor, alunes.sala];
    await client.query(sql, values);
}

async function updateAlunes(id, alunes) {
    const sql = 'UPDATE alunes SET nome=?, idade=?, nota1=?, nota2=?, professor=?, sala=? WHERE id=?';
    const values = [alunes.nome, alunes.idade, alunes.nota1, alunes.nota2, alunes.professor, alunes.sala, id];
    await client.query(sql, values);
}

module.exports = { selectAlunes, selectAlunes, deleteAlunes, insertAlunes, updateAlunes }