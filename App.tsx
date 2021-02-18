import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

function App({componentId}) {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <TouchableOpacity
        onPress={() => {
          Navigation.push(componentId, {
            component: {
              name: 'app',
              options: {
                topBar: {title: {text: 'hi there'}},
              },
            },
          });
        }}>
        <Text>navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
