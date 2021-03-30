import React, {Component, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import Maintab from '../component/Maintab';
import {createStackNavigator} from '@react-navigation/stack';
//import Loginpage from '../../screens/Login';
//import Signup from '../../screens/Signup';
//import {Auth} from '../utils/Setup';
import {View, Text} from 'react-native';
import AuthService from '../services/auth.service';
import axios from 'axios';
import register from '../component/Register';

import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Form,
  Button,
  Item,
  Label,
  Input,
  Right,
  Icon,
} from 'native-base';

const Stack = createStackNavigator();

function Signup({navigation}) {
  //회원가입 메소드
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  //const [isSubmit, setIsSubmit] = useState(false);

  //const signOut = () => {};

  const usernameHandler = text => {
    setUsername(text);
  };

  const authenticate = async (email, password, username) => {
    axios
      .post(
        'http://10.0.2.2:8080/api/auth/psignup',
        JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
      )
      .then(response => {
        console.log(response);
        setEmail(email);
        setPassword(password);
        setUsername(username);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Header>
        <Body>
          <Title>회원가입</Title>
        </Body>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>아이디를 입력하세요</Label>
            <Input
              keyboardType="email-address"
              onChangeText={email => setEmail(email)} //아이디 정보를 넣는다
              value={email}
            />
          </Item>

          <Item floatingLabel>
            <Label>비밀번호를 입력하세요</Label>
            <Input
              secureTextEntry
              onChangeText={password => setPassword(password)} //아이디 정보를 넣는다
              value={password}
            />
          </Item>

          <Item floatingLabel>
            <Label>이름을 입력하세요</Label>
            <Input
              onChangeText={usernameHandler} //사용자 이름을 입력한다.
              value={username}
            />
          </Item>

          <Item>
            <Text>{'\n'}</Text>
          </Item>

          <Button block onPress={authenticate}>
            <Text>회원가입 완료</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

function Login({navigation}) {
  //로그인 메소드
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');

  return (
    <Container>
      <Header>
        <Text>이곳에 로고</Text>
      </Header>
      <Content padder>
        <Form>
          <Item floatingLabel>
            <Label>아이디</Label>
            <Input
              keyboardType="email-address"
              onChangeText={email => setEmail(email)} //아이디 정보를 넣는다
              value={email}
            />
          </Item>

          <Item floatingLabel>
            <Label>비밀번호</Label>
            <Input
              secureTextEntry
              onChangeText={password => setPassword(password)} //아이디 정보를 넣는다
              value={password}
            />
          </Item>

          <Item>
            <Text>{'\n'}</Text>
          </Item>

          <Button block>
            <Text>로그인</Text>
          </Button>
          <Item>
            <Text>{'\n'}</Text>
          </Item>
          <Button block onPress={() => navigation.navigate('회원가입')}>
            <Text>회원가입</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

export default class AuthStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login_page">
          <Stack.Screen name="Login_page" component={Login} />
          <Stack.Screen name="회원가입" component={register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
// <Stack.Screen name="Maintab_page" component={Maintab}></Stack.Screen>
