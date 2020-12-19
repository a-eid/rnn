import {LayoutStack} from 'react-native-navigation';
import {Navigation} from 'react-native-navigation';

import {rootRoutes, ROOT_ID} from './const';
import {Home, About} from '../../screens';

Navigation.registerComponent(rootRoutes.home, () => Home);
Navigation.registerComponent(rootRoutes.about, () => About);

export const rootStack: LayoutStack = {
  id: ROOT_ID,
  children: [
    {
      component: {
        name: rootRoutes.home,
      },
    },
  ],
};
