import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {setAppRoot} from './entry';

let bg: 'blue' | 'red' = 'blue';
function App() {
  function getBg() {
    bg = bg === 'red' ? 'blue' : 'red';
    return bg;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: getBg(),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={setAppRoot}>
        <Text style={{fontSize: 25, color: 'white'}}>Set Root</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Navigation.setDefaultOptions({});
        }}>
        <Text style={{fontSize: 25, color: 'white'}}>Set Default Options</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
