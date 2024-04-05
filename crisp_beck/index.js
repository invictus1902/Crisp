import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from "mongoose";
import {registerValidation} from "./validations/auth.js";
import {body, validationResult} from "express-validator";
import UserModel from './models/Users.js'


mongoose
    .connect('mongodb+srv://emir:qwer1234@cluster0.9qiujce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>console.log('db okey'))
    .catch((err)=>console.log('db is not okey',err));

const app = express();

app.use(express.json());



app.post('/register', registerValidation, (req, res) => {


    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors.array())
    }

    const doc = new UserModel({
        email:req.body.email,
        name:req.body.name,
        avatarUrl:req.body.avatarUrl
    })

    res.json({
        success:true
    })
});


app.listen(5050, (err) => {
    if (err) {
        return console.log(err)
    }
    console.log('запущен')
});