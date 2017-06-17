namespace module1 {
    export class foo{
        // JQueryオブジェクトを受け取る
        // Jは大文字
        constructor(private element:JQuery){}

        // 色を変更する
        public color(color:string){
            this.element.css('color',color);
        }   
    }
}

$(function(){
  var foo = new module1.foo($('div'));
  foo.color('orange');
});