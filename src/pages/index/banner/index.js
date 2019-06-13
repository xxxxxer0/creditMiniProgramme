import Taro, { Component } from '@tarojs/taro'
import { View , Navigator } from '@tarojs/components'
import './style.scss'

export default class Banner extends Component {

  render () {
    return (
      <View className='mod-banner'>
        <Navigator>
            <image src='http://img5.dwstatic.com/www/1905/422044956109/1560224032334.jpg'></image>
        </Navigator>
      </View>
    )
  }
}
