const express = require("express");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const port = 5000;

const connection = mysql.createConnection({
    host: "localhost",
    user: "myuser",
    password: "mypassword",
    database: "mydatabase",
    port: 3306,
});

connection.connect((err) => {
    if (err) {
        console.error("Errore di connessione: ", err);
        throw err;
    }
    console.log("Connesso al DB");
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.get("/users", (req, res) => {
    connection.query(
        "SELECT cod_cli, rag_soc FROM anacli LIMIT 20",
        (error, results, fields) => {
            if (error) {
                console.error(
                    "Errore durante il recupero dei dati dalla tabella users:",
                    error
                );
                res.status(500).json({
                    error: "Errore durante il recupero dei dati dalla tabella users",
                });
            } else {
                res.json(results);
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Server Express in esecuzione sulla porta ${port}`);
});

// connection.end();
