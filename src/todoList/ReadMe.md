## React-Redux

> **React-Redux 将所有组件分成两大类**

- UI组件
- 容器组件


> **UI组件(presentational component)**


- 只负责UI的呈现
- 所有数据都由父组件传递


> **容器组件(container component)**


- 容器组件一般由UI组件生成，通过`react-redux`中的`connect`方法生成
- 负责管理数据和业务逻辑



