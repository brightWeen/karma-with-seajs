define("karma-demo", function (require, exports, module) {

    var $ = require('jquery');

    exports.add = function (a, b) {
        return a + b;
    }

    exports.ajaxAdd = function (a, b) {
        return $.get('/src/data/data.json', {a: a, b: b});
    }

})