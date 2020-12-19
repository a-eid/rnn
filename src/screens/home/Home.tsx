import * as React from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {
  LayoutComponent,
  Navigation,
  NavigationComponentProps,
} from 'react-native-navigation';

import {rootRoutes} from '../../navigation/root-stack/const';
import {About} from '../about';

export function Home(props: NavigationComponentProps) {
  function handlePress() {
    // Navigation.setRoot({
    //   root: {
    //     component: {
    //       name: rootRoutes.about,
    //       options: {
    //         topBar: {title: {text: 'About'}},
    //       },
    //     },
    //   },
    // });
    // Navigation.popToRoot(props.componentId);
    Navigation.push(props.componentId, {
      component: {
        name: rootRoutes.about,
      },
    });
  }

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{flex: 1, backgroundColor: 'blue'}}>
      <View style={{}}>
        <TouchableOpacity onPress={handlePress}>
          <Text>Push</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

(Home as LayoutComponent).options = {
  topBar: {
    title: {text: 'Home', color: 'white'},
    largeTitle: {visible: true, color: 'white'},
  },
  bottomTab: {
    text: 'Home',
  },
};
