# Poc

## Releases and tests

Latest release: ![GitHub Release](https://img.shields.io/github/v/release/farmacodeunipd/poc).\
Code coverage: [![codecov](https://codecov.io/gh/farmacodeunipd/poc/graph/badge.svg?token=BECENNCPRE)](https://codecov.io/gh/farmacodeunipd/poc)

[Codecov page](https://app.codecov.io/gh/farmacodeunipd/poc?search=&displayType=tree)

## Sunburst graph (codecov)

![Coverage grah](https://codecov.io/gh/farmacodeunipd/poc/graphs/sunburst.svg?token=BECENNCPRE)

Il cechio centrale rappresenta il progetto nella sua totalità, spostandosi verso l'esterno ci sono le directory, e infine, i singoli file. La grandezza e il colore di ogni "slice" (o spicchio) rappresenta rispettivamente il numero di statements e il coverage.


## Come usare il PoC

### Download Docker

Per scaricare l'applicazione Docker cliccare sul link seguente [Docker](https://www.docker.com/).

### Creare e avviare il container

Una volta installato Docker, aprire la cartella del progetto da terminale e scrivere il seguente codice:

> docker compose up

inizierà a creare le immagini del container e ad avviarle

### Accedere al sito

Se si vuole visitare e utilizzare l'applicazione dirigersi a questo indirizzo [localhost:3000](https://localhost:3000) con il conteiner avviato.

Per sapere come usare e interagire con l'applicazione, fare riferimento al manuale utente "Guida_Utente.pdf" presente nella cartella di progetto.

### Spegnere il container

Per spegnere il container basta da terminale scrivere:

> docker compose down

oppure tramite la combinazione di tasti "CTRL + C".

### Documentazione

Per la documentazione completa di Docker e le sue funzionalità, cliccare sul seguente link [Docker Docs](https://docs.docker.com/)
