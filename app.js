var express = require("express");
var app = express();

app.get("/", inicio);

app.use(express.static("public"));

function inicio (peticion, resultado)
{
   resultado.sendFile(__dirname + "/public/atm.html");
}

app.listen(8989);

console.log("Servidor express escuchando");
