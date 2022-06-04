const express = require("express");
const fs = require("fs");
const app = express();

app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

app.use(express.static("assets"));
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    const {
        usuarios
    } = JSON.parse(fs.readFileSync("usuarios.json"))
    const usuario = req.params.usuario
    if (usuarios.some(u => u == usuario)) {
        console.log(`${usuario} pertenece a los usuarios`)
        next()
    } else {
        res.redirect("/who.jpeg")
    }
})

app.get("/abracadabra/juego/:usuario", (req, res) => {
    res.send("ok")
})

app.get("/abracadabra/conejo/:n", (req, res) => {// permite que lo que envies por el navegador se pueda agregar al param un parametro número
    const numeroAzar = Math.floor(Math.random() * (5 - 1)) + 1;
    //  Utilizar la propiedad "params" del objeto request para guardar en una constante el parámetro "numero".
    const numeroSeleccionado = req.params.n;//el n es el entregado en la ruta
    console.log(numeroSeleccionado)
    console.log(numeroAzar)
    // Paso 3
    numeroSeleccionado == numeroAzar
        ? res.redirect("/conejito.jpg")
        : res.redirect("/voldemort.jpg")
});

app.get("*", (req, res) => {
    // Paso 2
    res.send("<center><h1>“Esta página no existe...” :/ </h1> </center>");//generico de error
});


