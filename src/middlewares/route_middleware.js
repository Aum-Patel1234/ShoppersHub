const express = require('express')
const app = express()

app.use((req,res,next)=>{
    // see whether user is signed in or not
    next()
})