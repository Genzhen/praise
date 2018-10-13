import {
  Pramise
} from './pramise.es';
const f = new Pramise();
let timer = 0;
let num = 0;
xtag.register('x-praise', {
  content: "<div class=\"hand-box\">" +
    "    <div class=\"hand-left\"> </div>" +
    "    <div class=\"hand-right\"></div>" +
    "    <div class=\"hand-icon\"></div>" +
    "    <p id=\"pramise_count\" class=\"pramise_count\">0</p>" +
    "</div> ",
  methods: {
    praise: function () {
      let _this = this;
      f.add();
      document.querySelector('.pramise_count').innerText = ++num;
    }
  },
  events: {
    click: function (e) {
      let _this = this;
      if (e.target.className == "pramise_count") {
        _this.praise();
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          _this.praise();
        }, 500)
      }
    }
  }
});