var foo = 1;

// referernce是
var fooReference = {
	base : EnvironmentrRecord,
	name : 'foo',
	strict : false
};
GetValue(fooReference)

var foo2 = {
	bar : function () {
		return this;
	}
};

foo2.bar();

// bar对应的reference是：
var BarReference = {
	base : foo2,
	propertyName : 'bar',
	strict:false
};





