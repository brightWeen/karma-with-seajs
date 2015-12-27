define(function (require, exports, module) {


    var expect = chai.expect;

    var demo = require("karma-demo");

    describe("加法操作",function(){
        it("返回两个操作数的和",function(){
            expect(demo.add(2,5)).to.equal(7);
        })
    })

    describe('ajax加法操作',function(){
       it('返回一个string ',function(){
            //TODO test ajax api
       })
    });
})