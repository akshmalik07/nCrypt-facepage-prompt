const express=require('express')
const app=express()
const path=require('path')
const port=process.env.PORT||3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',express.static('html'))
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"/html/login.html"))
}
)


app.listen(port, function(){
    console.log('Port started')
})