import React, {Component, useState, useEffect} from 'react';
import {Button, FlatList, Text, View} from 'react-native';
//const URL = 'http://localhost:8080/api/test/all';
export default class ServerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 'click to connect to server',
    };
  }

  connect = async () => {
    const URL = 'http://10.0.2.2:8080/api/test/all'; //안드로이드 에뮬레이터의 로컬 호스트는 10.0.2.2 이다.
    fetch(URL)
      .then(response => {
        if (response.status == 200) {
          return response.text();
        } else {
          throw new Error('Something is wrong');
        }
      })
      .then(responseText => {
        this.setState({response: responseText});
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  render() {
    return (
      <View>
        <Text>{this.state.response}</Text>
        <Button title="connect" onPress={this.connect} />
      </View>
    );
  }
}
