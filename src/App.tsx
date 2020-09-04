import React, { useState } from 'react';

// import { Credentials, Address, Survey } from './containers';
import { AppContext } from './App.context';
import Credentials from './containers/credentials/credentials';
import Address from './containers/address/address';
import Survey from './containers/survey/survey';

const PagesCompoents = {
  credentials: <Credentials />,
  address: <Address />,
  survey: <Survey />,
};

export enum Page {
  Credentials = 'credentials',
  Address = 'address',
  Survey = 'survey',
}

const App = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Credentials);

  return (
    <main>
      <AppContext.Provider value={{ setCurrentPage }}>
        {PagesCompoents[currentPage]}
      </AppContext.Provider>
    </main>
  );
};

export default App;
