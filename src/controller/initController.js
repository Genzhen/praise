'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});   

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initController = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/index/index', _indexController2.default.index()), //首页
            _.get('/index/update', _indexController2.default.update()); //数据更新接口
        }));
    }
};
exports.default = initController;
