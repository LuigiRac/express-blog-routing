/*
Usando l'array dei post con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessarie per l'entità post.
All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
*/

const express = require('express');
const port = 3000;
const app = express();
app.use(express.static("public")); //http://localhost:3000/
//const { postsRouter } = require('./routers/posts') // multiple export/import
const postsRouter = require('./routers/posts')
// console.log(postsRouter);
//return;

// url: /
app.get('/', (req, res) => {
    res.send('Home page')
});


// Aggiungo Middleware con le rotte di /posts
// /routers/posts - /routers/posts/3
// /posts - /posts/3
app.use('/posts', postsRouter);

// url: tutte quelle che non corrispondono a niente di definito prima
app.get('*', (req, res) => {
    res.status(404).send('404 page')
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
