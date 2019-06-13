import Taro, { Component } from '@tarojs/taro'
import Banner from './banner/'
import User from './user/'
import Menu from './menu/'
import { View } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Banner></Banner>
        <View className='cont'>
          <User></User>
          <Menu></Menu>
        </View>
        
      </View>
    )
  }
}
