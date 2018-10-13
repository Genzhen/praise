# 第四周周实战

## 第一个要求

1.dns预获取，[dns-pretch](https://www.cnblogs.com/lhm166/articles/6073787.html),提升页面加载速度  

```js
<meta http-equiv="x-dns-prefetch-control" content="on"></meta>
<link rel="dns-prefetch" href="//cdnjs.cloudflare.com"> //设置要预提取的cdn域名
 <script src="https://cdnjs.cloudflare.com/ajax/libs/lazyloadjs/3.2.2/lazyload.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/x-tag/1.5.11/x-tag-core.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.pjax/2.0.1/jquery.pjax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/localforage/1.7.2/localforage.min.js"></script>
```

## 第二个要求

2.widget目录下新建star.html,views目录下新建star.js  
3.配置路由，修改public中star.js  
4.配置webpack的config增加star.es文件编译，star模板chunk编译  
5.注意chunk中的配置，都是tag，不是star  
6.五角星可以使用三个三角形进行拼接，一个div加伪元素

## 第三个要求

7.[localForage](https://www.cnblogs.com/rubylouvre/p/3633404.html)轻松实现web离线存储,存在了IndexedDB非关系型数据库中  
8.[webpack-manifest](https://www.npmjs.com/package/webpack-manifest), 当编译器(compiler)开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "Manifest"，当完成打包并发送到浏览器时，会在运行时通过 Manifest 来解析和加载模块。主要是HTML5缓存清单文件生成。生成HTML5缓存清单文件、用于生成资产清单的webpack插件，并将清单属性插入<html>标记。  
9.通过localstorage实现前端缓存的负载均衡操作，修改webAssetsHelp.js,修改index.js  

## 第四个要求

在prodwebpack配置文件中的output添加publicpath，动态网址配置

## 第五个要求

在src,index.js中进行配置，lazyload  

## 第六个要求

[pm2](http://pm2.keymetrics.io/ )  
[在线监控平台](https://keymetrics.io/)