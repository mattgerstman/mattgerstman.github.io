import * as React from 'react';
import {Provider} from 'react-redux';
import getStore from './data/store';
import RecordPage from './pages/record-page';

function App() {
  return (
    <Provider store={getStore()}>
      <RecordPage />
    </Provider>
  );
}

export default App;
