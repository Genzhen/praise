import index from './indexController';
const initController = {
    init(app, router) {
        app.use(router(_ => {
            _.get('/index/index', index.index()); //首页
            _.get('/index/update', index.update()); //数据更新接口
            _.get('/index/praise', index.praise()); //大拇指pjax
            _.get('/index/star', index.star()); //星星pjax
            _.get('/index/store', index.starStore()); //离线存储内容
        }))
    }
}
export default initController;