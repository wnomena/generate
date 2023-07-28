const express = require('express')
const bodyParser = require('body-parser')
var generator = require('generate-password');
const cors = require('cors')
const app = express()
const port = 6000
app.use((req,res,next)=>{
    console.log(req.url)
    next()
})
app.use(bodyParser.json())
app.use(cors())
app.post('/generate/password',(req,res)=>{
    var includeNumber = parseInt(req.body.number)
    var includeMaj = req.body.maj
    var caractere = req.body.chars
    var input = parseInt(req.body.input)
    var password =   generator.generate({
	length: input,
	numbers: includeNumber,
    symbols : caractere,
    uppercase : includeMaj
})
return res.json({password})
})
app.listen(port,()=>{
    console.log(`Notre app dans http://localhost:${port}`)
})