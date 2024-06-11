import React from 'react';
import Home from './views/home';
import About from './views/about';

const App: React.FC = () => {
  let Component;
  switch (window.location.pathname) {
    case '/about':
      Component = About;
      break;
    case '/':
    default:
      Component = Home;
      break;
  }

  return <Component />;
};

export default App;