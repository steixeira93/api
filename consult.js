const express = require('express');
const app = express();

const guiasPorCategoria = {
  'Categoria1': [
    { id: 1, nome: 'Guia 1', categorias: ['Categoria1', 'Categoria2'] },
    { id: 2, nome: 'Guia 2', categorias: ['Categoria1', 'Categoria3'] },
  ],
  'Categoria2': [
    { id: 3, nome: 'Guia 3', categorias: ['Categoria2', 'Categoria3'] },
  ],
};

app.get('/guias', (req, res) => {
  res.json(Object.values(guiasPorCategoria).flat());
});

app.get('/guias/:categoria', (req, res) => {
  const { categoria } = req.params;

  const guias = guiasPorCategoria[categoria] || [];

  if (guias.length === 0) {
    res.status(404).json({ message: 'Nenhum guia encontrado para essa categoria' });
  } else {
    res.json(guias);
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});