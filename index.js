const express = require('express')
require('dotenv').config()

const app = express()

console.log(process.env.key)
console.log(process.env.key2)
app.get('/', (req,res,next)  => {
    res.json({hello: 'world1234!!!'})
})

app.listen(4000, ()=> {
    console.log('Application server running on port 4000')
})