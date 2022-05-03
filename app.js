//Objeto express
const express = require('express');

//Application
const app = express();
app.use(express.json()); //Middleware: se usará json

//PORT DEFAULT
const PORT_DEFAULT = 3004;

//Initializing app
app.listen(PORT_DEFAULT, () => console.log(`Example app listening at port ${PORT_DEFAULT}`));