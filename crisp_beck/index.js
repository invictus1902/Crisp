import express from 'express'


const app = express();

app.get('/',(req,res)=>{
    res.send('hollo')
})


app.listen(5050,(err)=>{
    if(err){
        return console.log(err)
    }
    console.log('запущен')
})