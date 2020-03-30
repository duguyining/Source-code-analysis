// JavaScript采用的是静态作用域
var value = 1;

function foo() {
    console.log(value);
}

function bar() {
    var value = 2;
    foo();
}

bar();
// 所以显示为1
