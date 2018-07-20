// pages/math/factorial/factorial.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var dishu = ev.detail.value.di     //底数
    var make = fact(dishu)             //阶乘

    this.setData({                     //写入计算结果
      result: make
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})

//阶乘的实现
function fact(number) {
  var fStack = new Stack();
  while (number > 0) {
    fStack.push(number);            //将数字从大到小压入栈中
    number = number - 1;
  }
  var result = 1;
  while (fStack.length() > 0) {
    result *= fStack.pop();         //弹出的元素挨个出栈相乘
  }
  return result;
}

//堆栈的定义
function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
  this.printElement = printStack;

  //++放在this.top后，这样新入栈的元素就被放在top的当前位置对应的位置
  //同时top自加1，指向下一个位置
  function push(element) {
    this.dataStore[this.top++] = element;
  }
  
  //返回栈顶元素，同时top的位置减1
  function pop() {
    return this.dataStore[--this.top];
  }

  //peek()方法返回数组的第top-1个位置的元素，即栈顶元素
  function peek() {
    return this.dataStore[this.top - 1];
  }

  //将top的值设置0，即清空一个栈
  function clear() {
    this.top = 0;
  }

  //返回变量top的值即为栈内元素的个数
  function length() {
    return this.top;
  }

  //输出栈内元素
  function printStack() {
    while (this.top > 0) {
      document.writeln(this.pop() + "&nbsp;&nbsp;");
    }
  }
}