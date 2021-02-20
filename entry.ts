import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.setDefaultOptions({
  animations: {
    setRoot: {
      alpha: {
        from: 0,
        to: 1,
        duration: 2000,
      },
    },
  },
});

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);

export function setAppRoot() {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.WelcomeScreen',
            },
          },
        ],
      },
    },
  });
}

Navigation.events().registerAppLaunchedListener(() => {
  setAppRoot();
});
