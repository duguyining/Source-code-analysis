// new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
/* function Otaku (name,age) {
	this.name = name;
	this.age = age;
	
	this.habit='Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = new Otaku('Kevin', '18'); */

//手写
/* 因为 new 的结果是一个新对象，所以在模拟实现的时候，我们也要建立一个新对象，假设这个对象叫 obj，因为 obj 会具有 Otaku 构造函数里的属性，想想经典继承的例子，我们可以使用 Otaku.apply(obj, arguments)来给 obj 添加新的属性。

在 JavaScript 深入系列第一篇中，我们便讲了原型与原型链，我们知道实例的 __proto__ 属性会指向构造函数的 prototype，也正是因为建立起这样的关系，实例可以访问原型上的属性。
 */

function Otaku (name, age) {
    this.name = name;
    this.age = age;

    this.habit = 'Games';
}

Otaku.prototype.strength = 60;

Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

function objectFactory() {
	var obj =new Object(),
	Constructor=[].shift.call(arguments);
	obj.__proto__=Constructor.prototype;
	Constructor.apply(obj,arguments)
	return obj;
}

var person = objectFactory(Otaku, 'Kevin', '18')

/* 所以我们还需要判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么。 */
// 第二版的代码
function objectFactory() {

    var obj = new Object(),

    Constructor = [].shift.call(arguments);

    obj.__proto__ = Constructor.prototype;

    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

}