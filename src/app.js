import express from "express"

const app = express()

const livros = [
    {
        id: 1,
        nome: 'Game of Trhones'
    }, 
    {
        id: 2, 
        nome: 'O Ladrão de Raios'
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
})

export default app