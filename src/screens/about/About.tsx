import * as React from 'react';
import {Alert, SafeAreaView, SafeAreaViewBase, ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
    // Navigation.push(props.componentId, {
    //   component: {
    //     name: rootRoutes.home,
    //   },
    // });

    // Alert.alert('hi');
    Navigation.dismissAllOverlays();
  }

  // React.useEffect(() => {
  //   const id = setTimeout(() => {
  //     Navigation.dismissOverlay(props.componentId);
  //   }, 2000);
  //   return () => clearTimeout(id);
  // }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0.0.1)'}}>
      <Text style={{padding: 25, fontSize: 35, color: 'white'}}>{Math.random()}</Text>
      <TouchableOpacity style={{flex: 1, backgroundColor: 'red'}} onPress={handlePress}></TouchableOpacity>
      <View style={{flex: 1, backgroundColor: 'green'}}></View>
    </View>
  );

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{flex: 1, backgroundColor: 'green'}}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'green'}}>
        <View style={{position: 'absolute', bottom: 0, left: 0, width: 100, height: 100, backgroundColor: 'red'}}>
          {/* <TouchableOpacity onPress={handlePress}>
          <Text>Push</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={logOUt}>
          <Text style={{color: 'white', padding: 15}}>Log Out</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    </ScrollView>
  );
}

(About as LayoutComponent).options = {
  // overlay: {handleKeyboardEvents: false, interceptTouchOutside: true},
  topBar: {visible: false, title: {text: 'About'}, largeTitle: {visible: true}},
  bottomTab: {
    text: 'About',
    textColor: 'green',
  },
  statusBar: {
    animated: true,
    style: 'light',
  },
  modal: {
    swipeToDismiss: false,
  },
};
