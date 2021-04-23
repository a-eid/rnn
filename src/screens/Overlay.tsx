import * as React from 'react';
import {View} from 'react-native';

export function Overlay() {
  return <View style={{width: 50, height: 50, backgroundColor: 'red'}}></View>;
}

Overlay.options = {
  layout: {
    componentBackgroundColor: 'transparent',
  },
  overlay: {
    interceptTouchOutside: false,
  },
};
