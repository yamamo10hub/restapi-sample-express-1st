import express from "express";
import http from 'http';

// expressのインスタンス作成
const app = express();
const PORT_NUMBER = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// お試しサンプル
let helloMessage = "hello express server";

app.get('/hello',(req,res)=>{
    res.send(helloMessage);
});


let counter = 0;
app.get('/countup', (req,res)=>{
    counter ++;
    res.send(""+counter);
});

app.post('/post-hello',(req,res)=>{
    if(req.body.message){
        helloMessage = req.body.message;
        res.send("OK:"+helloMessage);
    }else{
        res.status(400).send("ERROR");
    }
});

// RESTらしいサンプルを作成する
let message = "hello";
app.get('/message', (req,res)=>{
    res.status(200).send(message);
});

app.post('/message',(req,res)=>{
    if(req.body.text){
        message = req.body.text;
        res.status(201).send();
    }else{
        res.status(401).send();
    }
});

app.delete('/message', (req,res)=>{
    message = "hello"
    res.status(200).send();
});

// moduleを利用したwebserver機能
const webServer = http.createServer(app);

webServer.listen(3000,()=>{
    console.log("server running PORT:"+PORT_NUMBER);
});
