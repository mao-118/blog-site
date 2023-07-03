# 混入Mixins

**介绍**:  除了传统的面向对象继承方式，还流行一种通过可重用组件创建类的方式，就是联合另一个简单类的代码。 你可能在Scala等语言里对mixins及其特性已经很熟悉了，但它在JavaScript中也是很流行的。

**作用**:  解决TS中继承一次只能继承一个类的问题

**注意点:** 类的混入不能混入属性名

```typescript
// 对象混入

/* let nameObj = { name:'王楚然' };
let ageObj = { age:18 };
// 需求: 想要让nameObj拥有age属性
Object.assign(nameObj, ageObj);
console.log(nameObj);
console.log(ageObj); */


// 类混入
class Name {
  name: string = "毛晓彤";
  getName():void {
    console.log("我是毛晓彤");
  }
}

class Age {
  age: number = 18;
  getAge(): void {
    console.log("我今年18岁");
  }
}

// class Person extends Name, Age {}

class Person implements Name, Age {
  age: number;
  name: string;
  getAge: () => void;
  getName: () => void;
}

function Mixins(target: any, from: any[]) {
  // console.log(target);
  // console.log(from);
  from.forEach(item => {
    // console.log(item);
    Object.getOwnPropertyNames(item.prototype).forEach(name => {
      target.prototype[name] = item.prototype[name];
    })
  })
}
Mixins(Person, [Name, Age])

let p = new Person();
p.getAge();
p.getName();
// console.log(p.name);
// console.log(p.age);
```
