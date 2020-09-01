/* 高阶函数 */

// 数组求积； eg: product([1,2,3]) => 6
function product(arr) {
    var sum = arr.reduce(function (x,y) {
        return x*y;
    });
    return sum;
}

// 利用map和reduce写一个函数，实现将字符串转换为整数。
// eg: string2int('123') => 123
function string2int(s) {
    var arr = s.split('').map((x) => 1*x);
    return arr.reduce((x,y)=> x*10+y);
}

// eg: arr2int(['1','2','3']) => [1,2,3] 
function arr2int(arr) {
    return arr.map((x) => parseInt(x));
}

// 输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。
function normalize(arr) {
    var arr1 = arr.map(function (s) {
        return s[0].toUpperCase() + s.substring(1).toLowerCase();
    })
    return arr1;
}

// ['Apple','Xiaomi','Apple','Huawei'] => ['Apple','Xiaomi','Huawei']
function filter_arr(arr) {
    var r;
    r = arr.filter(function (element,index,self) {
        return self.indexOf(element) === index;
    })
    return r
}

// 筛选素数；get_primes([1,2,3,4]) => [2,3]
function get_primes(arr) {
    var r;
    r = arr.filter(function (x) {
        if (x===0 || x === 1) {
            return false;
        } else if ( x === 2) {
            return true;
        }
        for (let i = 2; i < x; i++) {
            if (x % i === 0) {
                return false
            }
        }
        return true
    })
    return r
}

// array的every高阶函数
function isLowerCase(arr) {
    return arr.every(function (s) {
        return s.toLowerCase() === s;
    });
}

