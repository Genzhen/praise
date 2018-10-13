'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var timer = 0;

var PramiseButton = function () {
    function PramiseButton(num, ele) {
        _classCallCheck(this, PramiseButton);

        this.ele = ele;
        this.num = num;
    }

    _createClass(PramiseButton, [{
        key: 'getEle',
        value: function getEle(element) {
            return document.querySelector(element);
        }
    }, {
        key: 'count',
        value: function count() {
            return ++this.num;
        }
    }, {
        key: 'add',
        value: function add() {
            var _this2 = this;

            var _this = this;
            this.getEle(this.ele).addEventListener("click", function () {
                if (!timer) {
                    timer = 1;
                    _this2.eventDilution(function () {
                        timer = 0;
                        axios.get('/index/update').then(function (response) {
                            console.log(response);
                            _this.getEle('#pramise_count').innerText = _this.count();
                        }).catch(function (error) {
                            console.log(error);
                        });
                    })(500);
                }
            });
        }
    }, {
        key: 'eventDilution',
        value: function eventDilution(fn) {
            return function (ms) {
                timer = setTimeout(function () {
                    fn();
                }, ms);
            };
        }
    }]);

    return PramiseButton;
}();

var Thumb = function (_PramiseButton) {
    _inherits(Thumb, _PramiseButton);

    function Thumb(num, ele) {
        _classCallCheck(this, Thumb);

        return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, ele));
    }

    return Thumb;
}(PramiseButton);

exports.default = { Thumb: Thumb };
