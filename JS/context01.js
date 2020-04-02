/* 对于每个执行上下文，都有三个重要属性：
1.变量对象(Variable object，VO)
2.作用域链(Scope chain)
3.this */
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();