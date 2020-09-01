/*
生成器，与python语法的中生成器类似。
*/

// 普通函数
function foo(x) {
    return x+x;
}

// 定义生成器，生成器可返回多次
function* foo1(x) {
    yield x+1;
}

// 斐波那契数列为例,普通函数如下
function fib(max) {
    var t, a=0, b=1, arr=[0,1];
    while (arr.length < max) {
        [a,b] = [b,a+b];
        arr.push(b)
    }
    return arr;
}

fib(2)  // [0, 1]

// 生成器，遇到yield关键字时暂停，返回yield的返回值
// done=true代表此生成器执行完成，此时返回return的返回值
function* fib_g(max) {
    var n=0, a=0, b=1;
    while (n<max) {
        yield a;
        [a, b] = [b, a+b];
        n ++;
    }
    return 'over';
}

var f = fib_g(2);
f.next()  // {value: 0, done: false}
f.next()  // {value: 0, done: false}
f.next()  // {value: "over", done: true}