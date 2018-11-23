import React from 'react';
import { StyleSheet, View, Switch } from 'react-native';
import { Container, Button, Text } from 'native-base';

export default class Test extends React.Component {

  render() {
      return (
        <Container>
                <Button>
                  <Text>
                    Button
                  </Text>
                </Button>
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
