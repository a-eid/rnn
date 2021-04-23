import {LayoutRoot, Navigation} from 'react-native-navigation';
import {About, Home, Login} from '../screens';
import {Overlay} from '../screens/Overlay';
import {rootRoutes} from './const';

Navigation.setDefaultOptions({
  animations: {
    setRoot: {
      alpha: {
        from: 0,
        to: 1,
        duration: 300,
        interpolation: {type: 'accelerate'},
      },
    },
  },
  statusBar: {
    backgroundColor: '#4d089a',
  },
  topBar: {
    title: {
      color: 'white',
    },
    largeTitle: {
      color: 'white',
    },
    backButton: {
      color: 'black',
    },
    background: {
      color: '#4d089a',
    },
  },
  bottomTabs: {
    backgroundColor: '#dce',
  },
  bottomTab: {textColor: 'white', selectedTextColor: 'blue'},
  overlay: {},
});

Navigation.registerComponent(rootRoutes.home, () => Home);
Navigation.registerComponent(rootRoutes.about, () => About);
Navigation.registerComponent(rootRoutes.login, () => Login);
Navigation.registerComponent(rootRoutes.overlay, () => Overlay);

const AppRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      options: {
        bottomTab: {textColor: 'white'},
      },
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: rootRoutes.home,
                },
              },
            ],
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: rootRoutes.about,
                },
              },
            ],
          },
        },
      ],
    },
  },
};
const LoginRoot: LayoutRoot = {
  root: {
    stack: {
      children: [
        {
          component: {name: rootRoutes.login},
        },
      ],
    },
  },
};

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(AppRoot);
});

export function loginSuccess() {
  Navigation.setRoot(AppRoot);
}

export function logOUt() {
  Navigation.setRoot(LoginRoot);
}
