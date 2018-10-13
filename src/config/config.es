import path from 'path';//引入路径模块
const CONFIG = new Map();//ES6的map
CONFIG.set('port',8081);//设置监听端口
CONFIG.set("staticDir",path.join(__dirname,".."));//定义静态资源路径
CONFIG.set("viewDir",path.join(__dirname,'../views'));//定义模板路径
export default  CONFIG;//导出
