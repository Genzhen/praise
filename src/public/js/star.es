import {
    Star
} from './pramise.es';
const f = new Star();
xtag.register('x-star', {
    content: "<div class='star' id='star_btn'></div>",
    methods: {
        pramise: function () {
            let me = this;
            f.add();
        }
    },
    events: {
        click: function (e) {
            let me = this;
            if (e.target.id == 'star_btn') {
                me.pramise();
            }
        }
    }
})