import React, { lazy } from 'react';

const AppContent = lazy(() => import('../pages'));

const App = () => {
  return (
    <AppContent />
  );
};

export default App;