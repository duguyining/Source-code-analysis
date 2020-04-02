/* call()方法中的其余的参数必须直接传给函数
apply()接收两个参数：一个参数是在其中运行的作用域,另一个是参数数组(可以是Array实例,也可以是arguments对象).
也可以理解为其实call传参为固定的必须知道你有多少个参数传进去，而apply可以传一个数组。

当明确知道传参数量时使用call()而不确定的时候使用apply()方法然后把参数push进数组传递进去，函数内部也可以通过 arguments 这个数组来遍历所有的参数。 */




// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。
/* var foo = {
	value : 1 
}
function bar () {
	console.log(this.value);
}

bar.call(foo) */
// call 改变了 this 的指向，指向到 foo
// bar 函数执行
/* 将函数设为对象的属性
执行该函数
删除该函数 */

// 第一版
Function.prototype.call2=function(content) {
	context.fn=this;
	context.fn();
	delete context.fn;
}

//test
var foo ={
	value :1
}

function bar () {
	console.log(this.value)
}

bar.call2(foo);
/* -------------------------------- */
// 第二版
Function.prototype.call2 = function(context) {
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    eval('context.fn(' + args +')');
    delete context.fn;
}

// 测试一下
var foo = {
    value: 1
};

function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}

bar.call2(foo, 'kevin', 18); 
// kevin
// 18
// 1

// 第三版
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// 

Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;

    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }

    delete context.fn
    return result;
}
