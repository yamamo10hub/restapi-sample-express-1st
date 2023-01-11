# nodeJS + ExpressでAPIを触る
復習  
  
## 環境
vscode + wsl2 ubuntu20 + anyenv(nodenv)  
npmでexpress  
  
## 実行
```
docker build -t helloapp-img .
docker run -p 3000:3000 -d helloapp-img helloapp 
```