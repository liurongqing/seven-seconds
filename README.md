## 函数文档

https://liurongqing.github.io/seven-seconds/

## 快速使用

```typescript
import * as SS from 'seven-seconds'

// or
import { get } from 'seven-seconds'
```

## JEST 参考

> https://jestjs.io/docs/expect

```ts
// 匹配两个值相等
expect().toBe()

// 匹配两个值不相等
expect().not().toBe()

// 匹配两个对象相等
expect().toEqual()

// 匹配除 `null` 与 `undefined` 外的值, 可以在 `toEqual` 与 `toBeCalledWith` 中使用
expect().toEqual(expect.anything())

// 匹配给定的构造函数创建的任何内容，可以在 `toEqual` 与 `toBeCalledWith` 中使用
expect().toEqual(expect.any(Number))

// 包含指定的子集，可以在 `toEqual` 与 `toBeCalledWith` 中使用，或 `objectContaining` 或 `toMatchObject`
expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(['Blob']))

// 确保多个回调函数都能被调用
expect.assertions(2)
function func1() {
  expect.toBe(1)
}
function func2() {
  expect.toBe(2)
}
doAsync(func1, func2)
```
