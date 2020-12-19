import * as React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {loginSuccess} from '../navigation/main';

export function Login(props: any) {
  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity onPress={loginSuccess} style={{padding: 20}}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

Login.options = {
  topBar: {
    title: {text: 'Login'},
    largeTitle: {visible: true},
  },
};
