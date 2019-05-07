import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TestStateLess from './TestStateLess';

interface MyProps {
  age: number;
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
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome {this.state.name}</Text>
        <Text style={styles.welcome}>{this.props.age}</Text>
        <TestStateLess onPress={() => { }} title='点击' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});