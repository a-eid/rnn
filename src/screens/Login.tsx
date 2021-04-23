import * as React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {rootRoutes} from '../navigation/const';
import {loginSuccess} from '../navigation/main';

export function Login(props: any) {
  return <ScrollView style={{flex: 1}}></ScrollView>;
}

Login.options = {
  topBar: {
    title: {text: 'Login'},
    largeTitle: {visible: true},
  },
};
