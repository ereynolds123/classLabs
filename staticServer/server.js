const express = require('express')
const { response } = require('express')

const app = express()

const port = process.env.PORT || 5000 

const path = require('path')
const public = path.resolve('./public')

app.use(express.static('./public'))

app.listen(port, () => console.log(`Example app listeningport ${port}!`))

app.get('/about', (req, res) => {
    res.sendFile(public + '/about.html')
})

//This is a catch block. The asterisk is for anything. 
app.get("*", (req, res)=>{
    res.sendFile(public+"/404.html")
})

