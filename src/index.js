import express from 'express'
import bodyParser from 'body-parser'

import { createHtml } from './utils'
import Main from './pages/main'
import About from './pages/about'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    return res.send(
        createHtml(Main, {
            props: {
                route: req.originalUrl
            }
        })
    )
})

app.get('/about', (req, res) => {
    return res.send(
        createHtml(About, {
            props: {
                route: req.originalUrl
            }
        })
    )
})

app.listen(3000, () => {
    console.log('SERVER: started at 3000 port')
})
