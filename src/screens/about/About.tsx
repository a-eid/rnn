import * as React from 'react';
import {SafeAreaView, SafeAreaViewBase, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {LayoutComponent, Navigation, NavigationComponentProps} from 'react-native-navigation';
import {useVisibility} from '../../hook/useVisibility';

import {rootRoutes} from '../../navigation/const';
import {logOUt} from '../../navigation/main';

export function About(props: NavigationComponentProps) {
  useVisibility(props.componentId, {
    componentDidAppear: () => {
      console.log('componentDidAppear');
    },
    componentDidDisappear: () => {
      console.log('componentDidDisappear');
    },
  });

  function handlePress() {
    // Navigation.popToRoot(props.componentId, {});
    Navigation.push(props.componentId, {
      component: {
        name: rootRoutes.home,
      },
    });
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{flex: 1, backgroundColor: 'blue'}}>
      <View style={{}}>
        <TouchableOpacity onPress={handlePress}>
          <Text>Push</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={logOUt}>
          <Text style={{color: 'white', padding: 15}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

(About as LayoutComponent).options = {
  topBar: {title: {text: 'About'}, largeTitle: {visible: true}},
  bottomTab: {
    text: 'About',
    textColor: 'green',
  },
  statusBar: {
    animated: true,
    style: 'light',
  },
};
