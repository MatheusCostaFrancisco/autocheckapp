import React, {useCallback, useEffect, useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackHeaderProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Header, LogoSpinner, StatusBar} from 'components';
import {useRealm} from 'db';
import {Queries} from 'db/queries';
import {BackHandlerProvider} from 'hooks/useBackHandler';
import {useTheme} from 'theme';

import {RootStackParamList} from './types';
import * as ViewsRoutes from './views.routes';

const NativeStack = createNativeStackNavigator();

// function shouldHeaderBeShown(routeName: string) {
//   switch (routeName) {
//     case 'Teste':
//       return false;
//     case 'ExpiredSession':
//       return false;
//     case 'LandingError':
//       return false;
//     case 'ImportConfigs':
//       return false;
//     case 'Home':
//       return false;
//     case 'Settings':
//       return false;
//     case 'Login':
//       return false;
//     case 'GettingStarted':
//       return false;

//     default:
//       return true;
//   }
// }

function createScreens(components: any) {
  return (
    <>
      {Object.entries(components).map(([key, value]) => (
        <NativeStack.Screen key={key} name={key} component={value as any} />
      ))}
    </>
  );
}

export default function Routes() {
  const {} = useTheme();

  const [loading, setLoading] = useState(true);

  const handleHasData = useCallback(() => {
    const hasUsers = Queries.hasData(realm, 'User');

    if (hasUsers) {
      setInitialRoute('Login');
    }

    setLoading(false);
  }, [realm]);

  useEffect(() => {
    setTimeout(() => {
      handleHasData();
    }, 500);
  }, [handleHasData]);

  const renderHeader = (props: any) => (
    <>
      <StatusBar background={theme.background} translucent />
      <Header variant="var1 " {...props} />
    </>
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BackHandlerProvider>
          {!loading ? (
            <NativeStack.Navigator
              screenOptions={({route}) => ({
                contentStyle: {backgroundColor: theme.secondary},
                header: renderHeader,
                headerShown: shouldHeaderBeShown(route?.name),
                headerBackTitleVisible: false,
                gestureEnabled: false,
              })}
              initialRouteName={initialRoute}>
              {createScreens(ViewsRoutes)}
            </NativeStack.Navigator>
          ) : (
            <LogoSpinner />
          )}
        </BackHandlerProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
