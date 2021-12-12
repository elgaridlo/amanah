const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

const connectDB = require('./config/db')
const inventoryRouter = require('./router/inventoryRouter')
const qrCodeRouter = require('./router/qrCodeRouter')
const { notFound, errorHandler } = require('./utils/errorHandler')
const appError = require('./utils/appError')
// const kidRoute = require('./routers/kidRoutes')
// const workshopRoute = require('./routers/workshopRoutes')
// const errorHandler = require('./controllers/errorController')


dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/inventory', inventoryRouter)
app.use('/api/qrcode', qrCodeRouter)

const __dirname = path.resolve()

if(process.env.NODE_ENV ==='production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

app.all('*', (req, res, next) => {
    next(
        new appError(`Cannot find this url ${req.originalUrl} on this server!`, 404)
    );
});

app.use(notFound)
app.use(errorHandler)
// app.use(errorHandler);

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))