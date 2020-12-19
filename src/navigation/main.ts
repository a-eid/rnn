import {Navigation} from 'react-native-navigation';
import {rootRoutes} from './root-stack/const';
import {rootStack} from './root-stack/root-stack';

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      // stack: rootStack,
      bottomTabs: {
        children: [{stack: rootStack}, {stack: rootStack}],
      },
    },
  });
});
