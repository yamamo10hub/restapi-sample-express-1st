// npmのexpressモジュール
import express from "express";
// npmのhttpserver機能のモジュール
import http from 'http';

// expressモジュール内に定義されているobjectからインスタンスを生成
const app = express();
const PORT_NUMBER = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

let helloMessage = "hello express server";
// リクエストURLの定義と応答内容を定義する
app.get('/hello',(req,res)=>{
    res.send(helloMessage);
});

// 機能を追加してみる
let counter = 0;
app.get('/countup', (req,res)=>{
    counter ++;
    // ""に+することで型変換している
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

// expressモジュール内に定義されているobjectからインスタンスを生成
// 引数をexpressオブジェクトにして呼び出されるようにしている
const webServer = http.createServer(app);

// listenでwebserverが起動する。port番号必要
webServer.listen(3000,()=>{
    console.log("server running PORT:"+PORT_NUMBER);
});
