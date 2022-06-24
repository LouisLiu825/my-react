import React from 'react'
import { ListStore } from './list.Store'
import { CounterStore } from './counter'

class RootStore {
  constructor() {
    this.listStore = new ListStore()
    this.counterStore = new CounterStore()
  }
}

// 实例化
const rootStore = new RootStore()
// 使用 react context机制 封装
// Provider value={传递的数据}
// 查找机制 useContext 优先从Provider value 找 如果找不到 就会找
// createContext方法传递过来的默认参数
const context = React.createContext(rootStore)
// 这个方法的作用：通过useContext拿到rootStore实例对象，然后返回
// 业务组件中，调用useStore() -> rootStore
const useStore = () => React.useContext(context)

export { useStore }
