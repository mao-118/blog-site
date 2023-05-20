# webAPI实用知识点
## 获取页面元素
```js
// 根据类名返回元素对象集合 
document.getElementsByClassName('类名')
// 获取指定选择器返回第一个元素对象
document.querySelector('选择器')
// 根据指定选择器返回
document.querySelectorAll('选择器')
```
::: warning 注意：
`querySelector` 和 `querySelectorAll` 里面的选择器需要加符号，比如：`document.querySelector('#nav')`
:::
## 节点操作
1. 父节点:node.parentNode
2. 子节点:parentNode.children  
    - 如果想要第一个子元素节点，可以使用 parentNode.chilren[0] 
    - 如果想要最后一个子元素节点，可以使用 parentNode.chilren[parentNode.chilren.length - 1] 

3. 创建节点:document.createElement('tagName')

4. 添加节点:node.appendChild(child) 
    - node.appendChild() 方法将一个节点添加到指定父节点的子节点列表末尾。类似于 CSS 里面的 after 伪元素。,这里可以简写为node.append()

5. 添加节点:node.insertBefore(child)
    - node.insertBefore() 方法将一个节点添加到指定父节点的子节点列表前面。类似于 CSS 里面的 before 伪元素。

6. 删除节点:node.removeChild(child) 
    - node.removeChild() 方法从 DOM 中删除一个子节点，返回删除的节点。

7. 复制节点:node.cloneNode()
    ::: tip 提示：
        如果括号参数为空或者为 false ，则是浅拷贝，即只克隆复制节点本身，不克隆里面的子节点
        如果括号参数为 true ，则是深度拷贝，会复制节点本身以及里面所有的子节点。
    :::
8. 替换节点:parentNode.replaceChild(newChild, oldChild); 用指定的节点替换当前节点的一个子节点，并返回被替换掉的节点。

## 鼠标事件对象
| 鼠标事件对象       | 说明       | 
| ------------- |:-------------:|
| e.clientX     | 返回鼠标相对于浏览器窗口可视区的X坐标 |
| e.clientY      | 返回鼠标相对于浏览器窗口可视区的Y坐标      |
| e.pageX | 返回鼠标相对于文档页面的X坐标IE9+支持      |
| e.pageY | 返回鼠标相对于文档页面的Y坐标E9+支持      |
| e.screenX | 返回鼠标相对于电脑屏幕的X坐标      |
| e.screenY | 返回鼠标相对于电脑屏幕的Y坐标      |

## 键盘事件
| 键盘事件       | 说明          | 
| ------------- |:-------------:|
| onkeyup     | 某个键盘按键被松开时触发 |
| onkeydown      | 某个键盘按键被按下时触发      |
| onkeypress | 某个键盘按键被按下时并弹起时触发      |
::: danger 注意：
onkeypress和前面2个的区别是，它不识别功能键，比如左右箭头，shift等
:::

## history对象
| history对象       | 说明       | 
| ------------- |:-------------:|
| back()     | 可以后退功能 |
| forward()      | 前进功能      |
| go(参数) | 前进后退功能参数如果是1前进1个页面如果是-1后退1个页面      |

## 元素偏移量offset系列
| offset系列属性       | 作用    |    
| ------------- |:-------------:|
| element.offsetParent     | 返回作为该元素带有定位的父级元素如果父级都没有定位则返回body |
| element.offsepTop      | 返回元素相对带有定位父元素上方的偏移      |
| element.offsetLeft | 返回元素相对带有定位父元素左边框的偏移      |
| element.offsetWidth | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位     |
| element.offsetHeight | 返回自身包括padding、边框、内容区的高度，返回数值不带单位      |

## 元素可视区client系列
| client系列属性       | 作用    |    
| ------------- |:-------------:|
| element.clientTop     | 返回元素上边框的大小 |
| element.clientLeft      | 返回元素左边框的大小      |
| element.clientWidth | 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位     |
| element.clientHeight | 返回自身包括padding、内容区的高度，不含边框，返回数值不带单位     |

## 元素滚动scroll川系列
| scroll系列属性       | 作用    |    
| ------------- |:-------------:|
| element.scrollTop     | 返回被卷去的上侧距离，返回数值不带单位 |
| element.scrollLeft     | 返回被卷去的左侧距离，返回数值不带单位      |
| element.scrollWidth | 返回自身实际的宽度，不含边框，返回数值不带单位     |
| element.scrollHeight | 返回自身实际的高度，不含边框，返回数值不带单位     |

## 三大系列大小对比
| 三大系列大小对比       | 作用    |    
| ------------- |:-------------:|
| element.offsetWidth     | 返回自身包括padding、边框、内容区的宽度，返回数值不带单位 |
| element.clientWidth     | 返回自身包括padding、内容区的宽度，不含边框，返回数值不带单位      |
| element.scrollWidth | 返回自身实际的宽度，不含边框，返回数值不带单位     |