'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入路径模块
var CONFIG = new Map(); //ES6的map
CONFIG.set('port', 8081); //设置监听端口
CONFIG.set("staticDir", _path2.default.join(__dirname, '../public')); //定义静态资源路径
CONFIG.set("viewDir", _path2.default.join(__dirname, '../views')); //定义模板路径
exports.default = CONFIG; //导出
