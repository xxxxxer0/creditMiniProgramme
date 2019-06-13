import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import './style.scss'

class Menu extends Component {
    render () {
        return (
            <View className='menu-cont'>
                <View className='item'></View>
                <View className='item'></View>
                <View className='item'></View>
                <View className='item'></View>
            </View>
        )
    }
}


export default Menu