import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import './style.scss'

export default class User extends Component {
  render() {
    return (
      <View className='mod-user' >
        <View className='hd'></View>
        <View className='user-content'>
          <View className='user-panel'>
            <View className='avatar'><image src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560344495826&di=2c0660141bc710062a83168bbbff90d9&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F16%2F20170816083939_w8rLK.jpeg'></image></View>
            <View className='name'>xxero</View>
            <Navigator className='code'></Navigator>
          </View>
          <View className='btn'>一键续费</View>
        </View>
        <View className='info-wrap'>
          <View className='item'>
            <View className='txt1'>查看</View>
            <View className='txt2'>我的账单</View>
          </View>
          <View className='item'>
            <View className='txt1'>34000</View>
            <View className='txt2'>当前积分</View>
          </View>
          <View className='item'>
            <View className='txt1'>0</View>
            <View className='txt2'>卡包</View>
          </View>
        </View>
      </View>
    );
  }
}
