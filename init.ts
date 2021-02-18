import {I18nManager} from 'react-native';
import {Navigation} from 'react-native-navigation';
import App from './App';

Navigation.registerComponent('app', () => App);

I18nManager.forceRTL(true);
Navigation.setDefaultOptions({
  layout: {direction: 'rtl', orientation: ['portrait']},
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'app',
              options: {
                topBar: {title: {text: 'hi there'}},
                layout: {direction: 'rtl'},
              },
            },
          },
        ],
      },
    },
  });
});
