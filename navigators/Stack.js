import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/tab/HomeScreen';
import OtherScreen from '../screens/stack/OtherScreen';

const Stack = createStackNavigator(
  {
    Stack1: {
      screen: HomeScreen,
    },
    Stack2: {
      screen: OtherScreen,
    },
  },
  {
    initialRouteName: 'Stack1',
    mode: 'modal', // 'card' or 'modal'
  },
);

export default Stack;
