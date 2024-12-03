/*
Usando l'array dei post con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessarie per l'entità post.
All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
*/

const express = require('express');
const port = 3000;
const app = express();



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}}`);
});

use