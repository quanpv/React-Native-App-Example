import React from "react";
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Example1 from "./screens/Example";

const AuthStack = createStackNavigator({
  Landing: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Landing"
    }
  },
  SignIn: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  CreateAccount: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ForgotPassword: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
  ResetPassword: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  }
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Feed"
    }
  },
  Details: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Search"
    }
  },
  Details: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Discover"
    }
  },
  Details: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: "Feed"
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: "Search"
    }
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: "Discover"
    }
  }
});

const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Settings List"
    }
  },
  Profile: {
    screen: Example1,
    navigationOptions: {
      headerTitle: "Profile"
    }
  }
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack
});

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    Promotion1: {
      screen: Example1
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const App = createSwitchNavigator({
  Loading: {
    screen: Example1
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: AppModalStack
  }
});

export default createAppContainer(App);
