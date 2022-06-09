# Gomoku-vue

一个为gomoku在线五子棋开发的Vue.js前端。  

## 运行

单页面应用，可以直接部署在任何服务器上。  
需要一个部署了[gomoku-backend](https://github.com/JLUJava-S22A/gomoku-backend)的服务器。  
示例应用运行在GitHub Pages上。[演示](https://gomoku.merlyn.cc)

## 流程

第一次打开网页会有登录提示，登录后登录信息会储存在本地cookie中，之后加载自动调取。当在线人数少的情况下会等待匹配对端，匹配到对端后立即开始游戏。己方棋子颜色由标题指示。如<span style="color:green">GO</span><span style="color:black;">MOKU</span>指示己方为黑子，绿色指示本方回合；<span style="color:red">GO</span><span style="color:white;">MOKU</span>指示己方为白子，红色指示对方回合。对局结束后自动刷新页面开始下一轮游戏。

## 指定服务器

对于自己部署的gomoku-server，可以由url参数指定新的服务器地址。默认仍为wss。
如`https://gomoku.merlyn.cc/?server=localhost&port=8080`。新的服务器地址会储存在本地cookie中。每次指定新的服务器都会覆盖本地设定。  

## 协议

本项目采用MIT协议开源。[LICENSE](https://github.com/JLUJava-S22A/gomoku-backend/blob/master/LICENCE)  
