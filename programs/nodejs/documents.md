# nodeJS
### npm的使用 
[npm官网](https://docs.npmjs.com)

+ npm -v
+ npm install npm -g
+ npm install express
+ npm install express -g
+ npm ls -g
+ npm uninstall express
+ npm ls
+ npm update express
+ npm search express
+ npm init
+ npm publish
+ npm adduser
+ npm help
    + npm help install
+ npm cache clear
+ npm unpublish \<package\>@\<version\>
###package.json
```
{
  "name": "express",
  "description": "Fast, unopinionated, minimalist web framework",
  "version": "4.13.3",
  "author": {
    "name": "TJ Holowaychuk",
    "email": "tj@vision-media.ca"
  },
  "contributors": [
    {
      "name": "Aaron Heckmann",
      "email": "aaron.heckmann+github@gmail.com"
    },
    {
      "name": "Ciaran Jessup",
      "email": "ciaranj@gmail.com"
    },
    {
      "name": "Douglas Christopher Wilson",
      "email": "doug@somethingdoug.com"
    },
    {
      "name": "Guillermo Rauch",
      "email": "rauchg@gmail.com"
    },
    {
      "name": "Jonathan Ong",
      "email": "me@jongleberry.com"
    },
    {
      "name": "Roman Shtylman",
      "email": "shtylman+expressjs@gmail.com"
    },
    {
      "name": "Young Jae Sim",
      "email": "hanul@hanul.me"
    }
  ],
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/strongloop/express.git"
  },
  "homepage": "http://expressjs.com/",
  "keywords": [
    "express",
    "framework",
    "sinatra",
    "web",
    "rest",
    "restful",
    "router",
    "app",
    "api"
  ],
  "dependencies": {
    "accepts": "~1.2.12",
    "array-flatten": "1.1.1",
    "content-disposition": "0.5.0",
    "content-type": "~1.0.1",
    "cookie": "0.1.3",
    "cookie-signature": "1.0.6",
    "debug": "~2.2.0",
    "depd": "~1.0.1",
    "escape-html": "1.0.2",
    "etag": "~1.7.0",
    "finalhandler": "0.4.0",
    "fresh": "0.3.0",
    "merge-descriptors": "1.0.0",
    "methods": "~1.1.1",
    "on-finished": "~2.3.0",
    "parseurl": "~1.3.0",
    "path-to-regexp": "0.1.7",
    "proxy-addr": "~1.0.8",
    "qs": "4.0.0",
    "range-parser": "~1.0.2",
    "send": "0.13.0",
    "serve-static": "~1.10.0",
    "type-is": "~1.6.6",
    "utils-merge": "1.0.0",
    "vary": "~1.0.1"
  },
  "devDependencies": {
    "after": "0.8.1",
    "ejs": "2.3.3",
    "istanbul": "0.3.17",
    "marked": "0.3.5",
    "mocha": "2.2.5",
    "should": "7.0.2",
    "supertest": "1.0.1",
    "body-parser": "~1.13.3",
    "connect-redis": "~2.4.1",
    "cookie-parser": "~1.3.5",
    "cookie-session": "~1.2.0",
    "express-session": "~1.11.3",
    "jade": "~1.11.0",
    "method-override": "~2.3.5",
    "morgan": "~1.6.1",
    "multiparty": "~4.1.2",
    "vhost": "~3.0.1"
  },
  "engines": {
    "node": ">= 0.10.0"
  },
  "files": [
    "LICENSE",
    "History.md",
    "Readme.md",
    "index.js",
    "lib/"
  ],
  "scripts": {
    "test": "mocha --require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/",
    "test-ci": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --require test/support/env --reporter spec --check-leaks test/ test/acceptance/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/",
    "test-tap": "mocha --require test/support/env --reporter tap --check-leaks test/ test/acceptance/"
  },
  "gitHead": "ef7ad681b245fba023843ce94f6bcb8e275bbb8e",
  "bugs": {
    "url": "https://github.com/strongloop/express/issues"
  },
  "_id": "express@4.13.3",
  "_shasum": "ddb2f1fb4502bf33598d2b032b037960ca6c80a3",
  "_from": "express@*",
  "_npmVersion": "1.4.28",
  "_npmUser": {
    "name": "dougwilson",
    "email": "doug@somethingdoug.com"
  },
  "maintainers": [
    {
      "name": "tjholowaychuk",
      "email": "tj@vision-media.ca"
    },
    {
      "name": "jongleberry",
      "email": "jonathanrichardong@gmail.com"
    },
    {
      "name": "dougwilson",
      "email": "doug@somethingdoug.com"
    },
    {
      "name": "rfeng",
      "email": "enjoyjava@gmail.com"
    },
    {
      "name": "aredridel",
      "email": "aredridel@dinhe.net"
    },
    {
      "name": "strongloop",
      "email": "callback@strongloop.com"
    },
    {
      "name": "defunctzombie",
      "email": "shtylman@gmail.com"
    }
  ],
  "dist": {
    "shasum": "ddb2f1fb4502bf33598d2b032b037960ca6c80a3",
    "tarball": "http://registry.npmjs.org/express/-/express-4.13.3.tgz"
  },
  "directories": {},
  "_resolved": "https://registry.npmjs.org/express/-/express-4.13.3.tgz",
  "readme": "ERROR: No README data found!"
}
```
package.json属性说明

+ name:包名
+ version:版本号
+ description:描述
+ homepage:包的官网
+ author:作者
+ contributors:包的贡献者
+ dependencies:依赖包列表
+ repository:包代码存放地方的类型，可以是git或是svn,git可以在github上
+ main:main字段是一个模块ID,它是一个指向你程序的主要项目。就是说，如果你包的名字叫 express,然后用户安装它，然后require('express');
+ keywords:关键字

### REPL(交互式解释器)
用`node`进入`REPL`模式;
下划线 `_`
多行表达式。
REPL命令

+ ctrl+c:退出当前终端
+ ctrl+c 按下两次：退出REPL
+ ctrl+d :退出REPL
+ 向上/向下键 :查看历史命令
+ tab :自动补全命令
+ .help :列出使用命令
+ .break :退出多行表达式
+ .clear :退出多行表达式
+ .save filename :保存当前会话到指定文件
+ .load filename :加载文件内容到当前会话

### EventEmitter

EventEmitter方法
![eventEmitter方法.jpg](https://ooo.0o0.ooo/2016/09/26/57e899669526e.jpg)

类方法
![类方法.jpg](https://ooo.0o0.ooo/2016/09/26/57e8aa438fe94.jpg)

事件
![事件.jpg](https://ooo.0o0.ooo/2016/09/26/57e8aa83001c8.jpg)

### nodeJS Buffer(缓冲区)
创建 Buffer 类

1. var buf = new Buffer(10);
2. var buf = new Buffer([10,20,30,40]);
3. var buf = new Buffer("www.runoob.com","utf-8");
    utf-8是默认的编码方式，此外它还支持“ascii,utf16le,ucs2,base64,hex";

写入缓冲区

buf.write(string[offset,[,length[,encoding]]])
- string
- offset :缓冲区开始写入的索引值，默认为0；
- length :写入的长度
- encoding :编码方式
返回实际写入的大小

从缓冲区读取数据
buf.toString([encoding[,start[,end]]])
返回字符串

将Buffer转换为JSON对象
buf.toJSON()
缓冲区合并
Buffer.concat(list[,totallength])
缓冲区比较
buf.compare(otherbuffer)
拷贝缓冲区
buf.copy(targetBuffer[,targetStart[,sourceStart[,sourceEnd]]])
缓冲区裁剪
buf.slice([start[, end]])
缓冲区长度
buf.length;
buffer方法参考:
![buffer方法.jpg](https://ooo.0o0.ooo/2016/09/26/57e8f28aae263.jpg)