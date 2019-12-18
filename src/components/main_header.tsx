// メインページのヘッダーに、ソート・フィルターを表示する予定

import * as React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const Main_header = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.box}>
        <Text>並び替え</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Text>絞り込み</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.search}>
        <Text>検索</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  box: {
    width: 100,
    marginRight: 10,
    shadowColor: '#1a2c4b',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 0
  },
  search: {
    width: 100,
    marginRight: 10,
    shadowColor: '#1a2c4b',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 50
  }
});
export default Main_header;
