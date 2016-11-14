function Query(data) {
    this.toString = function () {
        return Object.keys(data).map(function (key) {
            return key + '=' + data[key];
        }).join('&')
    }
}


module.exports = Query;
