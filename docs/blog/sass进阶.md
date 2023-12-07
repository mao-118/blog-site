# sass 的高级用法

我发现，大多数人使用 `sass` 预处理器最多的就是嵌套和变量这两种用法。

现在我在列举一些常用的高级用法，希望让大家少敲两行代码。

## @extend

意思是将 某个选择器 下的所有样式继承过来

```css
.error {
  border: 1px #f00;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

## @mixin

样式混入，搭配 `@include` 使用。

```css
@mixin large-text {
  .box: {
    width: 500px;
    height: 500px;
    background-color: pink;
  }
  color: #fff;
}
```

## @include

引用 `@mixin` 定义的样式。

我们将上面定义的 `large-text` 进行引用。

```css
.box_container {
  @include large-text;
}
```

## @function

函数指令。

```css
@function getWidth($n) {
  @return $n * 100px;
}
.box_container {
  width: getWidth(2);
  /* 输出 200px */
}
```

## @if

条件判断。

```css
/* 我们这里结合了上面学到的函数 */
@function getColor($type) {
  $color: #fff;
  @if @type == error {
    $color: red;
  } @else if @type == warn {
    $color: yellow;
  } @else {
    $color: green;
  }
  @return $color;
}
.box {
  /* 输出red */
  color: getColor(error);
}
```

## @for

for 循环。

```css
@for $i from 1 through 3 {
  .box_#{$i} {
    background-image: url("./images/box_#{$i}.png");
    /* 结合@if使用 */
    @if $i == 1 {
      color: red;
    } @else if $i == 2 {
      color: yellow;
    } @else {
      color: green;
    }
  }
}
```

输出结果

```css
.box_1 {
  background-image: url("./images/box_1.png");
  color: red;
}
.box_2 {
  background-image: url("./images/box_2.png");
  color: yellow;
}
.box_3 {
  background-image: url("./images/box_3.png");
  color: green;
}
```

## @each

列表输出。和`@for`类似，但是`@each`可以输出自定义的一组值。

我们改造一下上面`@for`循环，把数字替换成字母。

```css
@each $var in a, b, c {
  .box_#{$var} {
    background-image: url("./images/box_#{$var}.png");
    /* 结合@if使用 */
    @if $var == a {
      color: red;
    } @else if $var == b {
      color: yellow;
    } @else {
      color: green;
    }
  }
}
```
