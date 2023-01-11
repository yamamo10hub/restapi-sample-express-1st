// npmのexpressモジュール
import express from "express";
// npmのhttpserver機能のモジュール
import http from 'http';

// expressモジュール内に定義されているobjectからインスタンスを生成
const app = express();

// リクエストURLの定義と応答内容を定義する
app.get('/hello',(req,res)=>{
    res.send("hello expressjs");
});

// 機能を追加してみる
let counter = 0;
app.get('/countup', (req,res)=>{
    counter ++;
    // ""に+することで型変換している
    res.send(""+counter);
});

// expressモジュール内に定義されているobjectからインスタンスを生成
// 引数をexpressオブジェクトにして呼び出されるようにしている
const webServer = http.createServer(app);

// listenでwebserverが起動する。port番号必要
webServer.listen(3000,()=>{
    console.log("server running PORT:"+3000);
});
