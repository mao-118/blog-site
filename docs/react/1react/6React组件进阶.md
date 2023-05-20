# React组件进阶
## children属性
children属性是什么?

表示该组件的子节点，只要组件内部有子节点，props中就有该属性

children可以是什么?
1. 普通文本
2. 普通标签元素
3. 函数 / 对象
4. JSX

## props校验-场景和使用
>对于组件来说，props是由外部传入的，我们其实无法保证组件使用者传入了什么格式的数据，如果传入的数据格式不对，就有可能会导致组件内部错误，有一个点很关键 - 组件的使用者可能报错了也不知道为什么，看下面的例子
```jsx
const List=(props)=>{
    const arr = props.colors
    const lis = arr.map((item,index)=><li key={index}>{item.name}</li>)
    return <ul>{lis}</ul>
}
// 我们希望这里传递的是一个数组，可是传递的是一个数值
//面对这样的问题，如何解决？
<List colors={19} />
```
实现步骤
1. 安装属性校验包：yarn add prop-types
2. 导入prop-types 包
3. 使用 组件名.propTypes = {} 给组件添加校验规则
```jsx
import PropTypes from 'prop-types'

const List = props => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
  return <ul>{lis}</ul>
}

List.propTypes = {
  colors: PropTypes.array
}
```
## props校验-规则说明
四种常见结构
1. 常见类型：array、bool、func、number、object、string
2. React元素类型：element
3. 必填项：isRequired
4. 特定的结构对象：shape({})
```jsx
// 常见类型
optionalFunc: PropTypes.func,
// 必填 只需要在类型后面串联一个isRequired
requiredFunc: PropTypes.func.isRequired,
// 特定结构的对象
optionalObjectWithShape: PropTypes.shape({
	color: PropTypes.string,
	fontSize: PropTypes.number
})
```
官网文档更多阅读：https://reactjs.org/docs/typechecking-with-proptypes.html
## props校验-默认值
通过 defaultProps 可以给组件的props设置默认值，在未传入props的时候生效
### 1. 函数组件
直接使用函数参数默认值
```jsx
function List({pageSize = 10}) {
  return (
    <div>
      此处展示props的默认值：{ pageSize }
    </div>
  )
}

// 不传入pageSize属性
<List />
```
## 2. 类组件
使用类静态属性声明默认值，static defaultProps = {}
```jsx
class List extends Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <div>
        此处展示props的默认值：{this.props.pageSize}
      </div>
    )
  }
}
<List />
```