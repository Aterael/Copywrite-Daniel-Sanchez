const express = require("express");
const app = express();

app.get("/", (req, res) => {
    try {
        let word = req.body

        res.send("Hola mundo");
    } catch (error) {

    }
})

app.listen(3000, () => {
    console.log("Escuchando al puerto 3000")
});