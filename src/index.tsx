import React from 'react';
import 'react-native-reanimated';

import AppProvider from './infrastructure/config/AppProvider';
import Routes from './infrastructure/routes';

function App() {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
}
export default App;
