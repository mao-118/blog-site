# Event Loop(事件循环)

## 什么是Event Loop

个人的理解，JavaScript是单线程的，遇到许多耗时的操作，就会阻塞，为了解决这个，所有就有异步。那么这个异步操作是怎么执行的，就是Event Loop的核心知识点。

## 关于Event Loop

Event Loop，中文名叫事件循环，拆分一下为event和loop，event为事件，可以理解为动作，就是浏览器需要做某个动作，比如点击鼠标，操作dom等。loop理解为循环，队列，即浏览器做这些动作，是有个先后顺序的。常见的顺序：先进先出(FIFO)，后进先出(LIFO)，浏览器中遵循的顺序是：宏任务-微任务为一个执行顺序，即一个循环，浏览器不断的执行这样的循环，就是Event Loop。

## 宏任务 与 微任务

宏任务macro task：包括整体代码script，setTimeout，setInterval

微任务micro task：Promise，process.nextTick(nodejs)

## 例子1
```js
console.log(1);
setTimeout(function() {
    console.log(2);
})
console.log(3);
//setTimeout是宏任务，那么执行时会放在事件循环里面，可以理解为异步执行的，js执行顺序是先执行完同步再执行异步，所以执行顺序是1，3，2
```
## 例子2
```js
console.log(1);
setTimeout(function() {
    console.log(2)
});
new Promise(function(resolve) {
    console.log(3);
    resolve();
}
).then(function() {
    console.log(4)
});
console.log(5);
/*
这里出现了promise，属于是微任务，同时也有setTimeout，属于是宏任务，
这里需要注意一个点，就是promise里面的是立即执行的，可以理解为同步。
由于执行顺序是宏任务-微任务,
因为整体代码片段是一个宏任务，所以执行整段代码后会执行promise.resolve，
所以执行顺序是1,3,5,4,2
*/
```
## 例子3
```js
// process.nextTick 当成一个微任务即可
console.log('1');
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
/*
 * 先看总体，1是同步执行没毛病，然后再根据宏任务-微任务，
 * 接下来就应该是promise，nextTick(nodejs)，执行完微任务，再找宏任务，
 * 即setTimeout，再找微任务，再找宏任务....一直到事件循环结束
 * 那么这里的执行顺序应该是：1(同步)，7(立即执行)，6(微任务)，
 * 8(微任务)，2(宏任务)，4(立即执行)，3(微任务)，5(微任务)，9(宏任务)，
 * 11(立即执行)，10(微任务)，12(微任务)
 */
```