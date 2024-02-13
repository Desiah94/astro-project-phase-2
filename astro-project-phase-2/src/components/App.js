// App.js
import React from 'react';
import NavigationBar from './NavigationBar';
import Subscription from './Subscription';
import ZodiacSign from './ZodiacSign';

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Subscription />
      <ZodiacSign />
    </div>
  );
};

export default App;
