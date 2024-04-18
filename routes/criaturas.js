const express = require('express');
const router = express.Router();

let listaCriaturas = [
    {
        id: 1,
        nome: "Grifo",
        idade: 100,
        email: "grifo@gmail.com",
        telefone: "123456789"
    },
    {
        id: 2,
        nome: "Fênix",
        idade: 500,
        email: "fenix@gmail.com",
        telefone: "987654321"
    },
    {
        id: 3,
        nome: "Unicórnio",
        idade: 300,
        email: "unicornio@gmail.com",
        telefone: "456789123"
    }
];

router.get('/', (req, res) => {
    res.json(listaCriaturas);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json(listaCriaturas[id]);
});

router.post('/', (req, res) => {
    const { nome, idade, email, telefone } = req.body;
    const novaCriatura = { nome, idade, email, telefone };
    listaCriaturas.push(novaCriatura);
    res.json({ mensagem: "Criatura criada com sucesso!" });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    listaCriaturas.splice(id, 1);
    res.json({ mensagem: "Criatura excluída com sucesso!" });
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { nome, idade, email, telefone } = req.body;
    const criaturaAlterada = { nome, idade, email, telefone };
    listaCriaturas[id] = criaturaAlterada;
    res.json({ mensagem: "Criatura alterada com sucesso!" });
});

module.exports = router;

