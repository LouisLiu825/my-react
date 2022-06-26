import { makeAutoObservable } from 'mobx'
import { http } from '@/utils'
class ChannelStore {
  channels = []
  constructor() {
    makeAutoObservable(this)
  }
  getChannels = async () => {
    const res = await http.get('/channels')
    this.channels = res.data.channels
  }
}

export default ChannelStore
