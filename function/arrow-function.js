/* 
箭头函数，ES6引入
*/

// 普通函数
function fn(x) {
    return x*x;
}

// 箭头函数，相当于匿名函数
var fn = x => x*x;


// 多语句时,不能省略{}和return
var fn1 = x => {
    if (x>0) {
        return x*x;
    } else {
        return -x*x;
    }
}

// 无参数时
var fn2 = () => 'js lambda'

// 多参数
function plus(x,y) {
    return x+y;
}

var plus = (x,y) => x+y;

// 可变参数，求和函数
var fn3 = (a,b,...rest) => {
    var sum = a + b;
    for (let i = 0; i < rest.length; i++) {
        sum = rest[i] + sum;
    }
    return sum;
}

// 箭头函数与this
// 匿名函数，需用that捕获this
var obj1 = {
    name: "xiaoming",
    birth: 1990,
    getAge: function () {
        var that = this;
        var fn = function () {
            return new Date().getFullYear() - that.birth;
        }
        return fn();
    }
}

// 箭头函数内部的this由上下文确定，这与前面的函数this的绑定对象不同
var obj = {
    name: "xiaoming",
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = ()=>new Date().getFullYear() - this.birth;
        return fn();
    }
}


// 练习；请使用箭头函数简化排序时传入的函数：
// var arr = [10, 20, 1, 2];
function arr_sort(arr) {
    return arr.sort((x,y) => {
        if (x > y) {
            return 1;
        } else {
            return -1;
        }
    });
}