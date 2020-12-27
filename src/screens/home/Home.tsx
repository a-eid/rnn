import * as React from 'react';
import {View, TouchableOpacity, Text, ScrollView, SafeAreaView} from 'react-native';
import {
  LayoutComponent,
  Navigation,
  NavigationComponentProps,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';

import {rootRoutes} from '../../navigation/const';
import {About} from '../about';

//
export function Home({componentId, count}: NavigationComponentProps & {count: number}) {
  function handlePress() {
    Navigation.showOverlay({
      stack: {
        children: [
          {
            component: {
              name: rootRoutes.about,
              options: {
                layout: {
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  componentBackgroundColor: 'rgba(0,0,0,0.3)',
                },
              },
            },
          },
        ],
      },
    });

    // setInterval(() => {
    //   Navigation.showOverlay({
    //     stack: {
    //       children: [{component: {name: rootRoutes.about}}],
    //     },
    //   });
    // }, 2000);
    // Navigation.showModal({
    //   stack: {
    //     children: [
    //       {
    //         component: {
    //           name: rootRoutes.about,
    //           options: {
    //             modalPresentationStyle: OptionsModalPresentationStyle.formSheet,
    //           },
    //         },
    //       },
    //     ],
    //   },
    // });
    // Navigation.mergeOptions(componentId, {
    //   topBar: {
    //     rightButtons: [],
    //   },
    // });
    // console.log('props.count', count);
    // Navigation.updateProps(componentId, {count: (count || 0) + 1});
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
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{backgroundColor: 'white'}}
      keyboardDismissMode="interactive">
      <SafeAreaView style={{marginTop: 90}}>
        <TouchableOpacity onPress={handlePress}>
          <Text>Push</Text>
        </TouchableOpacity>
        <View style={{backgroundColor: 'white', height: 500}} />
        <Text style={{fontSize: 24, padding: 20, color: 'black'}}>{count}</Text>
        {/* <View style={{backgroundColor: 'white', height: 500}} /> */}
      </SafeAreaView>
    </ScrollView>
  );
}

(Home as LayoutComponent).options = {
  topBar: {
    rightButtons: [
      {
        id: 'add',
        systemItem: 'add',
      },
      {
        id: 'add',
        systemItem: 'add',
      },
    ],
    title: {text: 'Home'},
    subtitle: {text: 'home', color: 'red'},
    largeTitle: {visible: true},
    // hideOnScroll: true,
    animate: true,
    borderColor: 'red',
    drawBehind: true,
    // translucent: true,
    // barStyle: 'black',
    searchBar: {
      visible: true,
      hideOnScroll: true,
      hideTopBarOnFocus: true,
      focus: true,
      // backgroundColor: 'pink',
      // obscuresBackgroundDuringPresentation: true,
      placeholder: 'Search Thing',
      tintColor: 'green',
    },
  },
  bottomTab: {
    text: 'Home',
    textColor: 'green',
  },
  statusBar: {
    backgroundColor: 'red',
    // blur: true,
    drawBehind: true,
    hideWithTopBar: true,
    translucent: true,
    visible: true,
    animated: true,
    style: 'light',
  },
};
