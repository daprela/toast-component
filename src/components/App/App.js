import React from 'react';
import {StrictMode} from 'react';

import ToastPlayground from '../ToastPlayground';
import ToastProvider from '../ToastProvider';
import Footer from '../Footer';

function App() {
  return (
    <StrictMode>
      <ToastProvider>
        <ToastPlayground/>
        <Footer/>
      </ToastProvider>
    </StrictMode>
  );
}

export default App;
