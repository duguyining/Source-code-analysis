// 类数组对象:拥有一个 length 属性和若干索引属性的对象
var array = ['name', 'age', 'sex'];

var arrayLike = {
    0: 'name',
    1: 'age',
    2: 'sex',
    length: 3
}

//使用ES6的 ... 运算符，我们可以轻松转成数组。

function func(...arguments) {
    console.log(arguments); // [1, 2, 3]
}

func(1, 2, 3);