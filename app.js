//Objeto express
const express = require("express");

//Application
const app = express();
app.use(express.json()); //Middleware: se usará json

//PORT DEFAULT
const PORT_DEFAULT = 3000;

//First route
app.get("/v1/explorers", (req, res) => {
  const explorer1 = {id: 1,name: "Carlitos"};
  const explorer2 = {id: 2,name: "Mohamed"};
  const explorer3 = {id: 3, name: "Natasha"};
  const explorer4 = {id: 4, name: "Jayden"};
  const explorer5 = {id: 5, name: "Vanessa"};

  const listOfExplorers = [explorer1, explorer2, explorer3, explorer4, explorer5];
  res.status(200).json(listOfExplorers);
});

//Second route
app.get("/v1/explorers/:id", (req, res) => {
    console.log(`Api Explorers GET request: ${new Date()}`)
    console.log(`Getting Explorer with id: ${req.params.id}`)
    const explorer = {id: 1, name: "Carlo"}
    res.status(200).json(explorer);
});

//Third route (POST /v1/explorers) creating a new explorer
app.post("/v1/explorers", (req, res) => {
    console.log(`Api explorers POST request ${new Date()}`)
    const response = req.body.name ? "Explorer created" : "Algo salió mal, intente de nuevo";
    if(response === "Explorer created") res.status(201)        
    else res.status(404);       
    res.json({ response })
});

//Fourth route (PUT /v1/explorers/:id) updating a new explorer
app.put("/v1/explorers/:id", (req, res) => { 
    console.log(`Api Explorers PUT request ${new Date()}`);
    console.log(`Update explorer with id: ${req.params.id}`)
    if(req.params.id === "undefined") res.status(400).json({message: "an error has ocurred"})
    else res.status(200).json({message: "explorer updated"})
})

//Initializing app
app.listen(PORT_DEFAULT, () => console.log(`Example app listening at port ${PORT_DEFAULT}`));

module.exports = app;