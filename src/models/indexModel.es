import rp from 'request-promise'; //具有Promise支持的简化HTTP请求客户端“请求”
class indexModel {
    constructor(ctx) {
        this.ctx = ctx;
    }
    updateNum() {
        const options = {
            uri: 'http://localhost//pramise.php',
            method: "GET"
        }
        return new Promise((resolve, reject) => {
            rp(options)
                .then(function (result) {
                    const info = JSON.parse(result);
                    info && resolve({
                        data: info
                    });
                })
                .catch(function (err) {
                    reject(err);
                })
        })
    }
}

export default indexModel;