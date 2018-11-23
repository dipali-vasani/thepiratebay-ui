import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Font, AppLoading } from 'expo';
import Test from './components/test/test.js';

export default class App extends React.Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
    loading: true,
  };
  watchID: ?number = null;
  async componentWillMount() {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
      });
      this.setState({ loading: false });
    }
  componentDidMount = () => {
    console.log("Component did mount executed");
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Initial Position", position);
        const initialPosition = JSON.stringify(position);
        this.setState({ initialPosition });
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition(
      (position) => {
        console.log("Component last position", position);
        const lastPosition = JSON.stringify(position);
        this.setState({ lastPosition });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  componentWillUnmount = () => {
    // navigator.geolocation.clearWatch(this.watchID);
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
        <View style = {styles.container}>
            <Text style = {styles.boldText}>
              Initial position:
            </Text>
            
            <Text>
              {this.state.initialPosition}
            </Text>
            
            <Text style = {styles.boldText}>
              Current position:
            </Text>
            
            <Text>
              {this.state.lastPosition}
            </Text>
            <Test />
        </View>
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
