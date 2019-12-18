import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const Plus_btn = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.transition_screen} style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
  button: {
    height: 64,
    width: 64,
    backgroundColor: '#F03D3D',
    // shadowColor: '#1a2c4b',
    // shadowOffset: { width: 5, height: 5 },
    // shadowOpacity: 1,
    // shadowRadius: 6,
    borderRadius: 50
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  text: {
    width: 64,
    height: 32,
    fontSize: 48,
    color: 'white',
    textAlign: 'center'
  }
});
export default Plus_btn;
