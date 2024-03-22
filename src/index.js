import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import Routing from './routing';

function App() {
  const [metaData, setMetaData] = useState({
    title: '',
    description: '',
  });

  return (
    <StrictMode>
      <HashRouter>
        <Routing metaData={metaData} setMetaData={setMetaData} />
      </HashRouter>
    </StrictMode>
  );
}

ReactDOM.hydrate(<App />, document.getElementById('root'));
