import * as React from 'react';
import {Navigation} from 'react-native-navigation';

export function useVisibility(
  componentId: string,
  {componentDidAppear, componentDidDisappear}: {componentDidAppear: () => void; componentDidDisappear: () => void},
) {
  React.useEffect(() => {
    const listener = {
      componentDidAppear,
      componentDidDisappear,
    };

    const unsubscribe = Navigation.events().registerComponentListener(listener, componentId);

    return unsubscribe.remove;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
