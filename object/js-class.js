// es6引入  class继承
// 使用class重写之前的Student构造函数
class Student {
    constructor(name) {
        this.name = name
    }
    hello() {
        return ('Hello,' + this.name + '!')
    }
}


// 更方便继承扩展,继承Student
class PrimaryStudent extends Student {
    constructor(name, age) {
        super(name)
        this.age = age;
    }
    myAge() {
        return ('I am ' + this.age + '!');
    }
}


var xiaoming = new Student('xiaoming')
var xiaohong = new PrimaryStudent(name='xiaohong',age=18)