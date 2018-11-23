import React from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { Font, AppLoading } from 'expo';
import Test from './components/test/test.js';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class App extends React.Component {
  state = {
    loading: true,
  };
  async componentWillMount() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }
  render() {
  if (this.state.loading) {
  return (
          <View>
            <Text>Loading...</Text>
          </View>
        );
      }
      return (
                  <Container>
                      <Header>
                          <Left>
                              <Button transparent>
                                  <Icon name='menu' />
                              </Button>
                          </Left>
                          <Body>
                              <Title>Header</Title>
                          </Body>
                          <Right />
                      </Header>
                      <Content>
                          <Text>
                              This is Content Section
                          </Text>
                      </Content>
                      <Test />
                      <Footer>
                          <FooterTab>
                              <Button full>
                                  <Text>Footer</Text>
                              </Button>
                          </FooterTab>
                      </Footer>
                  </Container>
              )
  }
}

const styles = StyleSheet.create ({
  container: {
     flex: 1,
     alignItems: 'center',
     marginTop: 50
  },
  boldText: {
     fontSize: 30,
     color: 'red',
  }
})
