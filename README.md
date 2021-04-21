<p align="center"><a href="http://hai2007.gitee.io/debug-phone/test/index.html" target="_blank">
<img width="400" src="http://hai2007.gitee.io/debug-phone/debug-phone.png" alt="Debug Phone"></a></p>

# Debug Phone - 🔧 一个可用于调试手机的调试工具

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=debug-phone"><img src="https://img.shields.io/npm/dm/debug-phone.svg" alt="downloads"></a>
  <a href="https://packagephobia.now.sh/result?p=debug-phone"><img src="https://packagephobia.now.sh/badge?p=debug-phone" alt="install size"></a>
  <a href="https://www.jsdelivr.com/package/npm/debug-phone"><img src="https://data.jsdelivr.com/v1/package/npm/debug-phone/badge" alt="CDN"></a>
  <a href="https://www.npmjs.com/package/debug-phone"><img src="https://img.shields.io/npm/v/debug-phone.svg" alt="Version"></a>
  <a href="https://github.com/hai2007/Debug-Phone/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/debug-phone.svg" alt="License"></a>
  <a href="https://github.com/hai2007/Debug-Phone" target='_blank'>
        <img alt="GitHub repo stars" src="https://img.shields.io/github/stars/hai2007/Debug-Phone?style=social">
    </a>
</p>

- 如果你想查看运行效果，可以[点击此次查看](http://hai2007.gitee.io/debug-phone/test/index.html)。

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/hai2007/Debug-Phone/issues)，欢迎参与维护！

## 本地调试

```bash
npm install
```

首先，你需要安装必要的包，安装好了以后，直接执行下面启动命令：

```bahs
npm run dev
```

此刻，在浏览器中打开调试地址即可 localhost:20000

如果你需要发布前打包，执行下面命令完成打包：

```bash
npm run build
```

## 如何使用
由于是调试工具，实际只应该出现在开发或测试环境中，请直接在index.html中引入即可：

```html
<script src="https://cdn.jsdelivr.net/npm/debug-phone"></script>
```

如果你想通过npm方式管理，请先安装：

```bash
npm install --save-dev debug-phone
```

安装好以后引入即可：

```js
import 'debug-phone';
```

## 关于Promise中的错误无法捕获问题等相关问题解决方案说明

以```Promise```举例子，我们无法获取其错误内容，不过，你可以在合适的地方添加类似如下的语句来实现：

```js
new Promise()
 ......
    .catch(function (error) {
        console.error(error.stack);
    })
......
```

开源协议
---------------------------------------
[MIT](https://github.com/hai2007/Debug-Phone/blob/master/LICENSE)

Copyright (c) 2020-2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
