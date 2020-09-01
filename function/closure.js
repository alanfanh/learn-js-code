/* 
闭包，js中比较重要的概念 

*/

// 传统求和函数，直接返回求和结果
function sum(arr) {
    return arr.reduce(function (x,y) {
        return x+y;
    })
}

// 通过闭包方式求和，返回求和函数
// var sum = lazy_sum([1,2,3,4]); => sum() => 10
function  lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x,y) {
            return x + y;
        });
    };
    return sum;
}

// 闭包时不要引入任何循环变量或后续改变的变量
function count() {
    var arr = [];
    for (let i=1;i<3;i++) {
        arr.push(function () {
            return i*i
        })
    }
    return arr
}


// 借助闭包可封装一个私有变量
// 闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。
function create_counter(inital) {
    var x = inital || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}


// 将多参函数变成单参函数；得到求x^2 和 x^3 的函数，
function make_pow(n) {
    return function (x) {
        return Math.pow(x,n);
    }
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(pow2(2)); // 4
console.log(pow3(2)); // 8