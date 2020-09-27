/*
1、创建对象
2、构造函数与new
3、原型继承与原型链
4、ES6引入关键字class
*/

// 1.对象
var Robot = {
    // 属性
    name:'Robot',
    height: 1.6,
    // 方法
    run: function () {
        console.log(this.name + ' is running...');
    }
}

function createRobot(name) {
    // 基于Robot原型创建一个新对象:
    var s = Object.create(Robot);
    // 初始化新对象:
    s.name = name;
    return s;
}

var Wali = createRobot('Wali')



// 2.构造函数与new
function Student(name) {
    name = this.name;
    this.hello = function () {
        return ('Hello,' + this.name + '!')
    }
}

// new创建对象
var xiaohong = new Student('xiaohong');
var xiaobai = new Student('xiaobai')

// false;每个对象的方法不共用
xiaobai.run === xiaohong.run
// constructor指向构造函数本身, 
xiaobai.constructor === Student

// Student.prototype指向的对象就是xiaoming、xiaohong的原型对象
// 原型对象添加对象的共享方法, 对象共用方法
function Student(name) {
    name = this.name
}

Student.prototype.hello = function () {
    return ('Hello,' + this.name + '!')
}



// 练习:
// 请利用构造函数定义Cat，并让所有的Cat对象有一个name属性，并共享一个方法say()，返回字符串'Hello, xxx!'：
function Cat(name) {
    name = this.name
}

Cat.prototype.say = function () {
    return ('Hello,' + this.name + '!')
}


// 3.原型链继承
// 借助中间对象实现原型链继承，这个中间对象的原型要指向Student.prototype

// PrimaryStudent构造函数:
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数F:
function F() {
}

// 把F的原型指向Student.prototype:
F.prototype = Student.prototype;

// 把PrimaryStudent的原型指向一个新的F对象，F对象的原型正好指向Student.prototype:
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型的构造函数修复为PrimaryStudent:
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型（就是new F()对象）上定义方法：
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
xiaoming.name;  // '小明'
xiaoming.grade; // 2

// 验证原型:
xiaoming.__proto__ === PrimaryStudent.prototype;    // true
xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
xiaoming instanceof PrimaryStudent; // true
xiaoming instanceof Student;        // true




