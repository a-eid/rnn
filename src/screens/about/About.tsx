import * as React from 'react';
import {
  SafeAreaView,
  SafeAreaViewBase,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  LayoutComponent,
  Navigation,
  NavigationComponentProps,
} from 'react-native-navigation';

import {rootRoutes} from '../../navigation/root-stack/const';

export function About(props: NavigationComponentProps) {
  function handlePress() {
    // Navigation.popToRoot(props.componentId, {});
    Navigation.push(props.componentId, {
      component: {
        name: rootRoutes.home,
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

(About as LayoutComponent).options = {
  topBar: {title: {text: 'About'}, largeTitle: {visible: true}},
  bottomTab: {
    text: 'About',
  },
};
