### connect()()方法的参数

- mapStateToProps
- mapDispatchToProps

> **mapStateToProps()**

- `mapStateToProps`会订阅`store`，`store`变化时。他就会立即执行，从而引起UI组件重新渲染
- `mapStateToProps`可以接收两个参数： `state`以及容器组件的`props`
```
使用props作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。
connect方法可以省略mapStateToProps参数，那样的话，UI 组件就不会订阅Store，就是说 Store 的更新不会引起 UI 组件的更新
```

> **mapDispatchToProps()**

- `mapDispatchToProps`用来建立UI组件的参数到`store.dispatch()`方法的映射，
- `mapDisPatchToProps`可以接收两个参数，`dispatch`和容器组件的`props`
