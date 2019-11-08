import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const Nav_bar = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.transition_screen} style={styles.button}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  button: {
    // top: 40,
    // left: 40,
    height: 64,
    width: 64,
    borderRadius: 50,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default Nav_bar;
