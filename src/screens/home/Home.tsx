import * as React from 'react';
import {View, TouchableOpacity, Text, ScrollView, SafeAreaView} from 'react-native';
import {LayoutComponent, Navigation, NavigationComponentProps} from 'react-native-navigation';

import {rootRoutes} from '../../navigation/const';
import {About} from '../about';

//
export function Home({componentId, count}: NavigationComponentProps & {count: number}) {
  function handlePress() {
    console.log('props.count', count);
    Navigation.updateProps(componentId, {count: (count || 0) + 1});
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
    // Navigation.push(props.componentId, {
    //   component: {
    //     name: rootRoutes.about,
    //   },
    // });
  }

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{backgroundColor: 'white'}}>
      <TouchableOpacity onPress={handlePress}>
        <Text>Push</Text>
      </TouchableOpacity>
      <View style={{backgroundColor: 'white', height: 500}} />
      <Text style={{fontSize: 24, padding: 20, color: 'black'}}>{count}</Text>
      {/* <View style={{backgroundColor: 'white', height: 500}} /> */}
    </ScrollView>
  );
}

(Home as LayoutComponent).options = {
  topBar: {
    title: {text: 'Home'},
    largeTitle: {visible: true},
    searchBar: {
      visible: true,
      hideOnScroll: true,
      hideTopBarOnFocus: true,
      focus: false,
      backgroundColor: 'pink',
      obscuresBackgroundDuringPresentation: true,
      placeholder: 'Search Thing',
      tintColor: 'green',
    },
  },
  bottomTab: {
    text: 'Home',
    textColor: 'green',
  },
  statusBar: {
    animated: true,
    style: 'dark',
  },
};
