require('dotenv').config()
const express = require('express')
const seguelize = require('./database')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const pathStatic = path.resolve(__dirname, 'static')

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(pathStatic))
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)

const start = async () =>{
    try {
        await seguelize.authenticate()
        await seguelize.sync()
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    }catch (err){
        console.log(err)
    }
}

start()