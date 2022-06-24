// import { useState, useEffect, useRef, useContext, createContext } from 'react'
// import { counterStore } from './store/counter'
// 导入 中间件 连接mobx react完成响应式变化
import { observer } from 'mobx-react-lite'
import { useStore } from './store/index'
function App() {
  const rootStore = useStore()
  //   const { counterStore, listStore } = useStore()
  console.log(rootStore, 111)
  return (
    <div className="App">
      {/* 触发action */}
      <button onClick={rootStore.counterStore.addCount}>+</button>
      <button onClick={rootStore.counterStore.changeList}>变</button>
      {/* 渲染数据 */}
      {rootStore.counterStore.count}
      <div>数组数据：{rootStore.counterStore.filterList.join('-')}</div>
    </div>
  )
}

export default observer(App)
