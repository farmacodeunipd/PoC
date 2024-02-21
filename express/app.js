const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

// const connection = mysql.createConnection({
//     host: "db",
//     user: "myuser",
//     password: "mypassword",
//     database: "mydatabase",
//     port: 3306,
// });

// connection.connect((err) => {
//     if (err) {
//         console.error("Errore di connessione: ", err);
//         throw err;
//     }
//     console.log("Connesso al DB");
// });

// app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Server is running!");
// });

// app.get("/users", (req, res) => {
//     connection.query(
//         "SELECT cod_cli, rag_soc FROM anacli LIMIT 100",
//         (error, results, fields) => {
//             if (error) {
//                 console.error(
//                     "Errore durante il recupero dei dati dalla tabella users:",
//                     error
//                 );
//                 res.status(500).json({
//                     error: "Errore durante il recupero dei dati dalla tabella users",
//                 });
//             } else {
//                 res.json(results);
//             }
//         }
//     );
// });

// app.listen(port, () => {
//     console.log(`Server Express in esecuzione sulla porta ${port}`);
// });

// connection.end();

function connectToDB() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: "db",
            user: "myuser",
            password: "mypassword",
            database: "mydatabase",
            port: 3306,
        });
        connection.connect((err) => {
            if (err) {
                console.error("Errore di connessione: ", err);
                reject(err);
            } else {
                console.log("Connesso al DB");
                resolve(connection);
            }
        });
    });
}

async function startServer() {
    try {
        const connection = await connectToDB();
        app.use(cors());
        app.use(express.json());

        app.get("/", (req, res) => {
            res.send("Server is running!");
        });

        app.get("/users", (req, res) => {
            connection.query(
                "SELECT cod_cli, rag_soc FROM anacli LIMIT 500",
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

        app.get("/users/:id", (req, res) => {
            const userID = req.params.id;
            connection.query(
                "SELECT cod_cli, rag_soc FROM anacli WHERE cod_cli = ?",
                [userID],
                (error, results, fields) => {
                    if (error) {
                        console.error(
                            "Errore durante il recupero dei dati dalla tabella clienti:",
                            error
                        );
                        res.status(500).json({
                            error: "Errore durante il recupero dei dati dalla tabella clienti",
                        });
                    } else {
                        if (results.length === 0) {
                            res.status(404).json({
                                error: "User non trovato",
                            });
                        } else {
                            res.json([results[0]]);
                        }
                    }
                }
            );
        });

        app.get("/items", (req, res) => {
            connection.query(
                "SELECT cod_art, des_art FROM anaart LIMIT 500",
                (error, results, fields) => {
                    if (error) {
                        console.error(
                            "Errore durante il recupero dei dati dalla tabella prodotti:",
                            error
                        );
                        res.status(500).json({
                            error: "Errore durante il recupero dei dati dalla tabella prodotti",
                        });
                    } else {
                        res.json(results);
                    }
                }
            );
        });

        app.get("/items/:id", (req, res) => {
            const itemID = req.params.id;
            connection.query(
                "SELECT cod_art, des_art FROM anaart WHERE cod_art = ?",
                [itemID],
                (error, results, fields) => {
                    if (error) {
                        console.error(
                            "Errore durante il recupero dei dati dalla tabella prodotti:",
                            error
                        );
                        res.status(500).json({
                            error: "Errore durante il recupero dei dati dalla tabella prodotti",
                        });
                    } else {
                        if (results.length === 0) {
                            res.status(404).json({
                                error: "Item non trovato",
                            });
                        } else {
                            res.json([results[0]]);
                        }
                    }
                }
            );
        });

        app.listen(port, () => {
            console.log(`Server Express in esecuzione sulla porta ${port}`);
        });
    } catch (err) {
        console.error("Errore durante l'avvio del server: ", err);
    }
}

startServer();
