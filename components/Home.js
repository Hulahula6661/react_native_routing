import React, {Component} from 'react';
import {
    Button
} from 'react-native'

class Home extends React.Component {
    // static navigationOptions = {
    //   title: 'Home',
    // };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
          onPress={() => navigate('About', {name: 'Jane'})}
        />
      );
    }
  }

  export default Home;