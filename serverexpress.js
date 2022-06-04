const express = require("express");
const fs = require("fs");
const app = express();

//1. Crear un servidor con Express en el puerto 3000.
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});

//2. Definir la carpeta “assets” como carpeta pública del servidor.
app.use(express.static("assets"));//middleware
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.use("/abracadabra/juego/:usuario", (req, res, next) => {
    //3. Crear en el servidor un arreglo de nombres y devolverlo en formato JSON a través de la ruta /abracadabra/usuarios
    const {
        usuarios
    } = JSON.parse(fs.readFileSync("usuarios.json"))
    const usuario = req.params.usuario
    //4. Crear un middleware con la ruta /abracadabra/juego/:usuario para validar que el usuario recibido 
    //como parámetro “usuario” existe en el arreglo de nombres creado en el servidor.
    //En caso de ser exitoso, permitir el paso a la ruta GET correspondiente, de lo contrario devolver la imagen “who.jpeg”.
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

//5. Crear una ruta /abracadabra/conejo/:n que valide si el parámetro “n” coincide con el número generado de forma aleatoria.
//En caso de ser exitoso, devolver la imagen del conejo, de lo contrario devolver la imagen de Voldemort.
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

//6. Crear una ruta genérica que devuelva un mensaje diciendo “Esta página no existe...” al consultar una ruta que no esté definida en el servidor.
app.get("*", (req, res) => {
    // Paso 2
    res.send("<center><h1>“Esta página no existe...” :/ </h1> </center>");//generico de error
});


