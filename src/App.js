import { useState, useEffect, useRef, useContext, createContext } from 'react'

// useState
// 1.导入useState 函数
// 2.执行这个函数且传入初始值，
// 3.[数据，修改数据的方法]

// 更新过程
// 首次渲染
// 首次渲染的时候，组件内部的代码会被执行一次
// 其中useState也会跟着执行，初始值只会在首次渲染时候生效

// 更新渲染  setCount都会更新
// 1.app组件会再次渲染，这个函数会再次执行
// 2.useState再次执行，得到的新的count值不是0而是修改之后的1 模板会用新值渲染

// useEffect
// 状态修改更新组件了，副作用也会不断执行

// 执行时机
// 1. 默认状态（无依赖项）
// 组件初始化的时候先执行一次，等到每次数据修改组件更新再次执行
// 2. 添加一个空数组依赖项
// 只会在组件初始化的时候执行一次
// 3.依赖特定项
// 组件初始化的时候执行一次，依赖的特定项发生变化也会再次执行
// 4.注意事项
// 只要在useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明， 否则可能会有bug

// useRef
// 在函数组件中获取真实的dom对象或组件对象
// 1.导入useRef函数
// 2.执行useRef函数并传入null， 返回值是个对象，通过里面的current属性获取到dom对象
// 3.通过ref绑定 要获取的元素或组件

// 1.创建
const { Provider, Consumer } = createContext()
const Context = createContext()
function ComC() {
  const context = useContext(Context)
  console.log(111, context)
  return (
    <div>
      this is ComC 传递数据：{context}
      <div>分隔</div>
      {/* 3.通过Consumer来使用数据 */}
      <Consumer>{(value) => <span>1234: {value} ————</span>}</Consumer>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  const [message, setMessage] = useState('你好啊')
  useEffect(() => {
    console.log('副作用执行了')
    document.title = count
    // 发送请求
    // async function fetchData() {
    //   const res = await fetch('https://www.baidu.com/')
    //   console.log(res)
    // }
    // fetchData()
  }, [count])
  const clickMe = (type) => {
    console.log(type)
    setCount(count + 1)
    setFlag(!flag)
    setList([1, 2, 3, 4])
  }

  const btnRef = useRef(null)
  const divRef = useRef(null)
  useEffect(() => {
    console.log(btnRef)
    console.log(divRef)
  }, [])
  return (
    // 2.使用provider包裹根组件传递信息
    // <Provider value={message}>
    <Context.Provider value={message}>
      <div>
        <ComC></ComC>
        <button ref={btnRef} onClick={() => clickMe('me')}>
          click
        </button>
        <div ref={divRef}>count: {count}</div>
        <div>flag: {flag ? 'true' : 'false'}</div>
        <div>list: {list.join('-')}</div>
      </div>
    </Context.Provider>
    // </Provider>
  )
}

export default App
