/**
 * [_lazyMan的构造函数，负责输出名字和把输出名字的函数柯理化]
 * @param  {[type]} name []
 * @return {[type]}      []
 */
function _lazyMan(name) {
  var self = this;
  this.name = name;
  this.tasks = [];
  // 把参数封装进去，通过闭包访问name，可以通过直接调用sayName()来打印这个东西
  // var sayName = (function(n) {
  //   var name = n
  //   return function() {
  //     console.log('Hi, this is', name)
  //     self.next()
  //   }
  // })(name)

  var sayName = function() {
    console.log('Hi, this is', self.name)
    self.next()
  }

  this.tasks.push(sayName)
  // 这里使用一个setTimeout的作用是把任务丢进到异步事件队列，在同步的操作执行完毕之后才开始驱动第一次的next
  setTimeout(function() {
    // 第一次驱动next，启动任务队列
    self.next()
  }, 0)
}

_lazyMan.prototype.next = function() {
  // console.log('next')
  var task = this.tasks.shift()
  task && task()
}

_lazyMan.prototype.sleep = function(time) {
  // console.log('im in sleep')
  // 包装sleep，通过闭包来访问time，调用next的时候就可以直接不用传参去调用这个函数
  var self = this
  var task = (function(t) {
    return function() {
      setTimeout(function() {
        console.log('i\'m', self.name, 'i wake up after', t)
        self.next()
      }, t)
    }
  })(time)
  this.tasks.push(task)
  // 实现链式调用
  return this
  // setTimeout(function() {
  //   console.log('wake up after', time)
  // }, time)
}

_lazyMan.prototype.eat = function(meal) {
  // console.log('im in eat')
  var self = this
  var task = (function(m) {
    return function() {
      setTimeout(function() {
        console.log('i\'m', self.name, 'i eat', m)
        self.next()
      }, 1000)
    }
  })(meal)
  this.tasks.push(task)
  return this
  // setTimeout(function() {
  //   console.log('eat' ,meal)
  // }, 100)
}

function lazyMan(name) {
  return new _lazyMan(name)
}

module.exports = {
  lazyMan: lazyMan
}
