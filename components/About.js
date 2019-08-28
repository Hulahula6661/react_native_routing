import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native'

class About extends React.Component {
    // static navigationOptions = {
    //   title: 'About',
    // };
    render() {
      const {navigate} = this.props.navigation;
      return (
          <View>
              <Text>Welcome Jane</Text>
          </View>
      );
    }
  }

  export default About;