// pages/custom/custom.js
Page({
  data: {
    result: '',
    focus: false,
  },

  formSubmit: function (ev) {
    var cal = ev.detail.value.di
    var make = expressionChange(cal)   //转换为逆波兰表达式
    var re = calc(make)                //计算逆波兰表达式的结果

    this.setData({                     //写入计算结果
      result: re
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})


//计算逆波兰表达式的值
function calc(expr) {
  var arr = expr.split(" ");
  var stack = [];
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      stack.push(arr[i]);
    }
    else {
      var opr1 = parseInt(stack.pop());
      var opr2 = parseInt(stack.pop());
      switch (arr[i]) {
        case "+":
          stack.push(opr1 + opr2);
          break;
        case "-":
          stack.push(opr2 - opr1);
          break;
        case "*":
          stack.push(opr1 * opr2);
          break;
        case "/":
          stack.push(opr2 / opr1);
          break;
        default:
          throw new Error("UnSupportHandle");
      }
    }
  }
  result = stack.length == 1 ? stack.pop() : Math.max.apply(Math, stack);
  return result ? result : 0;
}


//把普通算术表达式转换为逆波兰表达式
function expressionChange(expression) {
  var result = "";
  var operators = new Stack();
  for (var i = 0; i < expression.length; i++) {
    var currentCharac = expression[i];
    switch (currentCharac) {
      case "(":                       //左括号直接入栈
        operators.push(currentCharac);
        break;
      case ")":                       //右括号将所有栈内元素弹出
        while (operators.peek() != "(") {
          result += operators.pop() + " ";
        }
        operators.pop();              //弹出左括号
        break;
      case "+":
      case "-":                       //因为+和-的优先级最低，将所有栈内元素弹出后，将当前符号压入栈。
        while (operators.length() > 0 && operators.peek() != "(") {
          result += operators.pop() + " ";
        }
        operators.push(currentCharac);
        break;   
      case "/":
      case "*":                       //只有当栈顶元素是/，*的时候，才需要弹出所有栈内元素。
        while (operators.length() > 0 && (operators.peek() == "*" || operators.peek() == "/")) {
          result += operators.pop() + " ";
        }
        operators.push(currentCharac);
        break;
      default:
        while (currentCharac <= "9" && currentCharac >= "0") {
          result += currentCharac;
          currentCharac = expression[++i];
        }
        result += " ";
        i--;                          //自减，否则会使i加了两次1
        break;
    }
  }
  while (operators.length() > 0)      //最后要将站内剩下元素弹出
  {
    result += operators.pop() + " ";
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

  //++放在this.top后面，这样新入栈的元素就被放在top的当前位置对应的位置
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