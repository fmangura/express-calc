const express = require('express');
const ExpressError = require("./ExpressError")
const {mean, median, mode} = require('./math')

const app = express();

app.use(express.json());

app.get('/mean', function(req, res, next){
    try {
        const {nums} = req.query;
        let arr = nums.split(',');
        arr = arr.map(Number);
        let answer = mean(arr)
        console.log(answer)

        if(!answer) {
            throw next(new ExpressError("Invalid Input", 400));
        }
    
        return res.status(200).json({
            operation: "mean",
            value: answer,
        })

    } catch (e) {
        next(e)
    }
})

app.get('/median', function(req, res, next){
    try {
        const {nums} = req.query;
        let arr = nums.split(',');
        arr = arr.map(Number);
        let answer = median(arr)

        if(!answer) {
            throw new ExpressError("Invalid Input", 400);
        }
    
        return res.status(200).json({
            operation: "median",
            value: answer,
        })

    } catch (e) {
        next(e)
    }
})

app.get('/mode', function(req, res, next){
    try {
        const {nums} = req.query;
        let arr = nums.split(',');
        arr = arr.map(Number);
        let answer = mode(arr)
        console.log(answer)

        if(!answer) {
            throw new ExpressError("Invalid Input", 400);
        }
    
        return res.status(200).json({
            operation: "mode",
            value: answer,
        })

    } catch (e) {
        next(e)
    }
})

app.use((req, res, next) => {
    const err = new ExpressError("Page Not Found <<<<<", 404)
    next(err)
})

app.use(function(error, req, res, next) {
    let status = error.status || 500;
    let message = error.message;

    return res.status(status).json({
        error: {message, status},
    });
})

app.listen(3000, function(){
    console.log('Aoo on port 3000');
})