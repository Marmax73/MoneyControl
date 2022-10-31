const express = require('express')
const app = express()
const path = require('path')
const routes = express.Router()
const plugin = require('../routes')

//App settings
app.set('port',process.env.PORT || 3000)

//Static files
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use(require('../routes/index'))
app.use('./plugins',plugin)



//App port
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`)
})