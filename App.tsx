import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp
} from 'react-navigation-stack';
import Add_form from './src/containers/add_form';
import Nav_bar from './src/components/navigation';

type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

interface PlayerData {
  year: number;
  name: string;
  position: number[];
  personality: number;
  tokunou: string[];
  policy: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
});

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>Open up App.tsx to start working on your app!</Text>
        </ScrollView>
        <View style={styles.button}>
          <Nav_bar
            transition_screen={() => this.props.navigation.navigate('Add_form')}
          />
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Add_form: {
      screen: Add_form
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
