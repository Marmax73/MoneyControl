const express = require('express')
const app = express()
const path = require('path')
const routes = express.Router()
const plugin = require('../routes')
const res = require('express/lib/response')

//App settings
app.set('port',process.env.PORT || 3000)

//Static files
app.use(express.static(path.join(__dirname, 'public')))


//Routes
app.use(require('../routes/index'))
app.use('./plugins',plugin)

//Get
app.get('/',(req,res) =>{
    res.send('<h1>Hola, Marcelo</h1>')
}
  
)

//App port
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`)
})