import * as React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native';
import { createAppContainer, SafeAreaView } from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackProp
} from 'react-navigation-stack';
import Add_form from './src/containers/add_form';
import Plus_btn from './src/components/plus_btn';
import Main_header from './src/components/main_header';
import Row from './src/components/row';

type Props = {
  navigation: NavigationStackProp<{ userId: string }>;
};

const device_height = Dimensions.get('window').height;

const data: { id: number; text: string; selected: boolean }[] = [
  {
    id: 1,
    text: 'aaa',
    selected: false
  },
  {
    id: 2,
    text: 'bbb',
    selected: false
  },
  {
    id: 3,
    text: 'ccc',
    selected: false
  }
];

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
    height: device_height - 64,
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
  constructor(props: Props) {
    super(props, data);
    this.state = {
      data: data
    };
  }
  onPressRow = () => {};
  static navigationOptions = {
    headerTitle: () => <Main_header />
  };
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <Row
              value={item.text}
              selected={item.selected}
              onPressRow={this.onPressRow}
            />
          )}
        />
        <View style={styles.button}>
          <Plus_btn
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
    return (
      <View style={{ flex: 1 }}>
        <AppContainer style={{ flex: 1 }} />
        <SafeAreaView />
      </View>
    );
  }
}
