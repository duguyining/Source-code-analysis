// 闭包 = 函数 + 函数能够访问的自由变量
var data = [];

for (var i = 0; i < 3; i++) {
	data [i] = function () {
		console.log(i);
	}
}

data[0]();
data[1]();
data[2]();

// 当执行到 data[0] 函数之前，此时全局上下文的 VO 为
 globalContext = {
     VO: {
         data: [...],
         i: 3
     }
 }
 
 // 当执行 data[0] 函数的时候，data[0] 函数的作用域链为：
 data[0]Context = {
     Scope: [AO, globalContext.VO]
 }
 // data[0]Context 的 AO 并没有 i 值，所以会从 globalContext.VO 中查找，i 为 3，所以打印的结果就是 3。
 
 