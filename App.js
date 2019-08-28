import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './components/Home';
import About from './components/About';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  About: {screen: About},
});

const App = createAppContainer(MainNavigator);

export default App;