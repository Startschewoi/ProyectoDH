const express = require ("express");
const path = require ("path");

const app = express ();


const publicPath = path.resolve(__dirname, "./Public");
app.use (express.static(publicPath));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.log("running on port 4001"));

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
