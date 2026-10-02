import express from "express"
import livrosRoutes from "./livrosRoutes.js"
import autoresRoutes from "./autoresRoutes.js"

const routes = (app) => {
    app.use(express.json())

    app.use(livrosRoutes)
    app.use(autoresRoutes)
}

export default routes