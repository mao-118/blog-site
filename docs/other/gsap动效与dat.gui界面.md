# [gsap](https://greensock.com/get-started/) 动效与 [dat.gui](https://github.com/dataarts/dat.gui) 界面

## 安装

```
npm i gsap
```

## 使用

```js
import gsap from "gsap";

gsap.to(".box", { x: 200 });
```

元素'.box'将元素动画化为 200px 的 x（如）”。transform: translateX(200px)

## 控制变量

```js
import { ref, reactive, watch } from "vue";
import gsap from "gsap";
const number = ref(0);
const tweened = reactive({
  number: 0,
});
watch(number, (n) => {
  gsap.to(tweened, { duration: 0.5, number: Number(n) || 0 });
});
```

## 回调

- onComplete：在动画完成时调用。
- onStart：在动画开始时调用
- onUpdate：每次动画更新时调用（在动画处于活动状态时的每一帧上）。
- onRepeat：每次动画重复时调用。
- onReverseComplete：当动画在反转时再次到达其起点时调用。

```js
const obj = {
  num: 0,
};
function changNum() {
  const app = document.getElementById("app");
  app.innerText = obj.num;
}
gsap.to(obj, {
  num: 10,
  duration: 0.5,
  onUpdate: () => {
    changNum();
  },
});
```

## dat.gui 的使用

dat.gui 会在当前页面生成一个可视化工具栏，并且可以操控

安装

```
npm install --save dat.gui
```

使用

```js
import * as dat from "dat.gui";

const obj = {
  num: 0,
};
const changNum = () => {
  document.getElementById("app").innerHTML = obj.num;
};

gui
  .add(obj, "num", 0, 10, 1)
  .name("设置num")
  .onChange(() => {
    changNum();
  });
changNum();
```
