console.log(this);
console.log(this instanceof Object);

// 都能生效
console.log(Math.random());
console.log(this.Math.random());


function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};

  b = 3;

}

foo(1);
/* 
1.全局上下文的变量对象初始化是全局对象

2.函数上下文的变量对象初始化只包括 Arguments 对象

3.在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值

4.在代码执行阶段，会再次修改变量对象的属性值 */

/* 在进入执行上下文时，首先会处理函数声明，其次会处理变量声明，如果如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性 */