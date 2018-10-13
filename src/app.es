import Koa from 'koa';
import router from 'koa-simple-router'; //路由插件
import server from 'koa-static'; //设置静态文件路径
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';
import render from 'koa-swig'; //模板引擎
import co from 'co'; //koa v2.x 依赖
import initController from './controller/initController';
import CONFIG from './config/config';

const app = new Koa();
initController.init(app, router);

app.context.render = co.wrap(render({
  root: CONFIG.get('viewDir'),
  autoescape: true,
  cache: 'memory',
  ext: 'html',
}));

app.use(server(CONFIG.get('staticDir')));
app.listen(CONFIG.get('port'));

export default app;