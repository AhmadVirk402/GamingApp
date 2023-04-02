import React from 'react';

import { AuthProvider } from './Screens/context/AuthContext';
import AppNav from './Screens/navigations/AppNav';

function App() {
return( 
  <AuthProvider>
   <AppNav/>
  </AuthProvider>
);
};

export default App;
