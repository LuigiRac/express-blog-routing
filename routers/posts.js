const express = require("express");
const router = express.Router();



//READ - INDEX
router.get('/post', (req, res) => {
    res.send('Lista dei post')
});


