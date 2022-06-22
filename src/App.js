import React from 'react'

function ListItem(props) {
  return (
    <>
      <h3>{props.item.name}</h3>
      <p>{props.item.age}</p>
      <p>{props.item.info}</p>
      <button onClick={() => props.deleteItem(props.item.id)}>删除</button>
    </>
  )
}

class App extends React.Component {
  state = {
    list: [
      { id: 1, name: '张三', age: 18, info: '作妖' },
      { id: 2, name: '李四', age: 19, info: '作孽' },
      { id: 3, name: '王五', age: 20, info: '作死' },
    ],
  }
  deleteItem = (id) => {
    // console.log(id)
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <ListItem key={item.id} item={item} deleteItem={this.deleteItem} />
        ))}
      </div>
    )
  }
}

export default App
