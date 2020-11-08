import React from 'react';
import cn from 'classnames';

import s from './App.module.scss';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <div className={cn(s.header, 'color')}>This is App Component</div>
      <Footer />
    </div>
  );
};

export default App;
