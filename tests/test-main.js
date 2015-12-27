(function(__karma__, seajs) {

    var tests = [],
        file;

    var alias = {
        'karma-demo':'src/demo/karma-demo.js',
        'jquery':'bower_components/jquery/dist/jquery.js'
    };
    for (file in __karma__.files) {
        if (__karma__.files.hasOwnProperty(file)) {
            if (/spec\.js$/i.test(file)) {
                tests.push(file); //所有的测试用例代码文件以spec结尾
            }

            /*
            if (/\/src\//.test(file)) {
                var name = file.match(/\/src\/([^.]+)\.js/)[1]; //获取src目录下的文件路径作为seajs模块的key
                alias[name] = file;
            }
            */
        }
    }

    seajs.config({
        base:'/base',
        alias: alias
    });

    var __start = __karma__.start;
    __karma__.start = function() {};
    seajs.use(tests, function() {
        __start.call(); //要在seajs模块载入后调用,否则会加载不到任何测试用例
    });

})(window.__karma__, seajs);