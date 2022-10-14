# Typescript 中常用的高级类型
在 typescript （后面简称为 ts）中定义 interface（后面简称为“接口”） 时，常常需要对进行二次封装或调整，而 ts 在2.1版本中加入了一些程序类型工具，供开发者方便的进行此类操作。

::: info
> 备注：这些程序类型仅限制用于 type 类型声明中。
:::

## 源码定义
```typescript
/**
 * Make all properties in T optional
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};

/**
 * Make all properties in T readonly
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```
这些程序类型早在2016年就发布了，因此已经被很多框架或插件所使用。那么来依次说明：
### 1
## Record
以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填。
```typescript
type Coord = Record<'x' | 'y', number>;

// 等同于
type Coord = {
	x: number;
	y: number;
}
```
具体的复杂业务场景中，一般会接口 Pick 、Partial 等组合使用，从而过滤和重组出新的类型定义。

## Partial
将类型定义的所有属性都修改为可选。
```ts
type Coord = Partial<Record<'x' | 'y', number>>;

// 等同于
type Coord = {
	x?: number;
	y?: number;
}
```

## Readonly
不管是从字面意思，还是定义上都很好理解：将所有属性定义为只读。
```ts
type Coord = Readonly<Record<'x' | 'y', number>>;

// 等同于
type Coord = {
    readonly x: number;
    readonly y: number;
}

// 如果进行了修改，则会报错：
const c: Coord = { x: 1, y: 1 };
c.x = 2; // Error: Cannot assign to 'x' because it is a read-only property.
```
## Pick
```ts
type Coord = Record<'x' | 'y', number>;
type CoordX = Pick<Coord, 'x'>;

// 等用于
type CoordX = {
	x: number;
}
```
## 更多
附上`typescrript`其余的高级类型：[TypeScript 的所有 高级类型](https://juejin.cn/post/6844904068096196621)