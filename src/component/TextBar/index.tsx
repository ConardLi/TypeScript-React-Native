/** 
 * TextBar 组件
 * 三种形态
 * 1.纯展示
 * 2.展示 + 点击
 * 3.输入框
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

interface MyProps {
  type: number;
}
interface MyState {
  name: string;
}
export default class App extends Component<MyProps, MyState> {
  public readonly state: Readonly<MyState> = {
    name: 'ConardLi',
  }
  render() {
    return (
      <View >
        <Text >Welcome {this.state.name}</Text>
        <Text >{this.props.type}</Text>
      </View>
    );
  }
}

