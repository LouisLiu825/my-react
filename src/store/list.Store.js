import { makeAutoObservable } from 'mobx'

class ListStore {
  list = ['zs', 'ls', 'ww']
  constructor() {
    makeAutoObservable(this)
  }
  addListData = () => {
    this.list.push('zl')
  }
}
export { ListStore }
