function Person () {
	
}

var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
console.log(Person === Person.prototype.constructor); // true
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
person.name='Jack';
console.log(person.name);

// prototype是函数才会有的属性
Person.prototype.name='Kevin';
var person1=new Person();
var person2=new Person();
console.log(person1.name);
console.log(person2.name);


// 原型的原型
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin

// null 表示“没有对象”，即该处不应该有值。