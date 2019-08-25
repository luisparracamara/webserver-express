const http = require("http");

http.createServer( (req,res) =>{
    res.writeHead(200, {"Content-Type": "application/json"});
    let salida = {
        nombre : "luis",
        edad : 7,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
} )
.listen(8080);
console.log("escuchando el 8080");
