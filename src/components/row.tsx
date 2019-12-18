// 行
import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
interface Props {
  value: string;
  selected: boolean;
}

const Row = props => {
  return (
    <TouchableOpacity
      style={{ backgroundColor: props.selected ? '#6e3b6e' : '#f9c2ff' }}
    >
      <Text>{props.value}</Text>
    </TouchableOpacity>
  );
};

export default Row;
