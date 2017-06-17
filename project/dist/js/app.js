var module1;
(function (module1) {
    var foo = (function () {
        // JQueryオブジェクトを受け取る
        // Jは大文字
        function foo(element) {
            this.element = element;
        }
        // 色を変更する
        foo.prototype.color = function (color) {
            this.element.css('color', color);
        };
        return foo;
    }());
    module1.foo = foo;
})(module1 || (module1 = {}));
$(function () {
    var foo = new module1.foo($('div'));
    foo.color('orange');
});
