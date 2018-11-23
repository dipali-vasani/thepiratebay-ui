import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default class App extends React.Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  }
  watchID: ?number = null;
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
      // { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
    );
    // this.watchID = navigator.geolocation.watchPosition(
    //   (position) => {
    //     console.log("Component last position", position);
    //     const lastPosition = JSON.stringify(position);
    //     this.setState({ lastPosition });
    //   },
    //   (error) => alert(error.message) 
    // );
  }
  componentWillUnmount = () => {
    // navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
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
              {this.state.lastPosition} hello1
            </Text>
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
