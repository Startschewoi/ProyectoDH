const express = require ("express");
const path = require ("path");

const app = express ();


const publicPath = path.resolve(__dirname, "./Public");
app.use (express.static(publicPath));

app.listen (process.env.PORT || 3000, ()=> {
    console.log ("servidor corriendo en puerto 3000")
});

app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/home.html"))  });

app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/carrito.html"))  });

app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/payment.html"))  });

app.get ("/register", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/register.html"))
});

app.get("*", (req,res)=>{
    res.send("¡la página que estás buscando, no se encuentra!")
}); 