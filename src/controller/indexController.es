import indexModel from '../models/indexModel';
const indexController = {
    index() {
        return async ctx =>
            ctx.body = await ctx.render('index', {
                title: "第二周实战"
            })
    },
    update() {
        return async ctx => {
            const indexUpate = new indexModel(); //数据处理在mdoel层
            ctx.body = await indexUpate.updateNum();
        }
    },
    praise() {
        return async ctx => {
            if (ctx.request.header['x-pjax']) {
                ctx.body = "<x-praise></x-praise>"
            } else {
                ctx.body = await ctx.render('index.html', {
                    title: '大拇指'
                })
            }
        }
    },
    star() {
        return async ctx => {
            if (ctx.request.header['x-pjax']) {
                ctx.body = "<x-star></x-star>"
            } else {
                ctx.body = await ctx.render('star.html', {
                    title: '星星'
                })
            }
        }
    },
    starStore() {
        return async ctx => {
            ctx.body = "<div class='store'>离线缓存文件</div>"
        }
    }

}
export default indexController;