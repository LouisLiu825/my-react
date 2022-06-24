// 编写第一个mobx store
import { makeAutoObservable } from 'mobx'

class CounterStore {
  // 1. 定义数据
  count = 0
  list = [1, 2, 3, 4, 5, 6, 7]
  constructor() {
    // 2.数据变成响应式
    makeAutoObservable(this)
  }
  //   计算属性
  get filterList() {
    return this.list.map((item) => item * 10)
  }
  changeList = () => {
    this.list.push(10, 15)
    this.list.shift(1, 2)
  }
  // 3.定义action函数
  addCount = () => {
    this.count++
  }
}
// 4.实例化 导出数据
// const counterStore = new CounterStore()
export { CounterStore }
