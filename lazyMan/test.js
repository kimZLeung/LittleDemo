const lazyMan = require('./lazyMan').lazyMan;

try {
    lazyMan('kimZ').sleep(3000).eat('dinner')
    lazyMan('kimzzzz').sleep(7000).eat('lunch')
} catch(e) {
  console.log('fail')
}
