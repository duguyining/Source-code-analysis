var foo = function () {

    console.log('foo1');

}

foo();  // foo1

var foo = function () {

    console.log('foo2');

}

foo();

/* ————————区分———————— */

/* JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，比如第一个例子中的变量提升，和第二个例子中的函数提升。 */
// 执行上下文(execution context)
function foo() {

    console.log('foo1');

}
foo();  
function foo() {

    console.log('foo2');

}
foo(); 
// 两次结果都是foo2