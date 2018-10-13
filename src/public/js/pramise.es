// import css from '../css/index.css';
// let timer = 0;
// class PramiseButton{
//     constructor(num,ele){
//         this.ele = ele;
//         this.num = num;
//     }
//     getEle(element){
//         return document.querySelector(element);
//     }
//     count(){
//         return ++this.num;
//     }
//     add(){
//         let _this = this
//         this.getEle(this.ele).addEventListener("click",()=>{
//             if(!timer){
//                 timer = 1;
//                 this.eventDilution(()=>{
//                     timer = 0;
//                     axios.get('/index/update')
//                         .then(function(response) {
//                             console.log(response);
//                             _this.getEle('#pramise_count').innerText = _this.count();
//                         })
//                         .catch(function(error) {
//                             console.log(error);
//                         });
//                 })(500);
//             }
//         })
//     }
//     eventDilution(fn){
//         return ms=>{
//             timer = setTimeout(()=>{
//                 fn();
//             },ms)
//         }
//     }
// }
// class Thumb extends PramiseButton{
//     constructor(num,ele){
//         super(num,ele);
//     }

// }
// export default {Thumb};


import css from '../css/index.css';
class PramiseButton {
    constructor() {}
    add() {
        axios.get('/index/update')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
class Pramise extends PramiseButton {
    constructor() {
        super();
    }
}
class Star extends PramiseButton {
    constructor() {
        super();
    }
}
export {
    Pramise,
    Star
};