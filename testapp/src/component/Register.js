import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
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

//AuthService.register() 메서드 호출
// 모바일 폼에 맞춰서 수정 필요

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }
  handleEmail = text => {
    this.setState({email: text});
  };

  handlePassword = text => {
    this.setState({password: text});
  };

  handleUsername = text => {
    this.setState({username: text});
  };

  /*authenticate = (email, password, username) => {
    axios
      .post(
        'http://10.0.2.2:8080/api/auth/psignup',
        JSON.stringify({
          email: 'email',
          password: 'password',
          usesrname: 'username',
        }),
      )
      .then(response => {
        console.log(response);
        // setIsSubmit(false);
      })
      .catch(error => {
        console.log(error);
      });
  };*/

  connect = async () => {
    const URL = 'http://10.0.2.2:8080/api/auth/psignup'; //안드로이드 에뮬레이터의 로컬 호스트는 10.0.2.2 이다.
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        //코딩으로 작성된 email, password, username 만 mysql에 가져온다.
        email: 'email',
        password: 'password',
        username: 'username',
      }),
    })
      .then(response => {
        response.json();
      })
      .then(data => console.log(data))
      .catch(error => {
        console.error(error.message);
      });
  };

  render() {
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
                onChangeText={this.handleEmail} //아이디 정보를 넣는다
                //value={email}
              />
            </Item>

            <Item floatingLabel>
              <Label>비밀번호를 입력하세요</Label>
              <Input
                secureTextEntry
                onChangeText={this.handlePassword} //아이디 정보를 넣는다
                //value={password}
              />
            </Item>

            <Item floatingLabel>
              <Label>이름을 입력하세요</Label>
              <Input
                onChangeText={this.handleUsername} //사용자 이름을 입력한다.
                //value={username}
              />
            </Item>

            <Item>
              <Text>{'\n'}</Text>
            </Item>

            <Button block onPress={this.connect}>
              <Text>회원가입 완료</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
