import React from 'react';

import { RoutesChapa } from './routes';
import { AppProvider } from './context';

function App() {
  return (
    <>
      <AppProvider>
        <RoutesChapa />
      </AppProvider>
    </>
  );
}

export default App;
