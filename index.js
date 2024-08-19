require("dotenv").config();
const db = require("./db");

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/alunes/:id', async (req, res) => {
    const results = await db.selectAlunes(req.params.id);
    res.json(results);
})

app.get('/alunes', async (req, res) => {
    const results = await db.selectAlunes();
    res.json(results);
})

app.delete('/alunes/:id', async (req, res) => {
    await db.deleteAlunes(req.params.id);
    res.sendStatus(204);
})

app.post('/alunes', async (req, res) => {
    await db.insertAlunes(req.body);
    res.sendStatus(201);
});

app.patch('/alunes/:id', async (req, res) => {
    await db.updateAlunes(req.params.id, req.body);
    res.sendStatus(200);
})

app.listen(port);

console.log('API funcionando!');