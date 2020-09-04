import React, { useState } from 'react';
// import { Credentials, Address, Survey } from './containers';

import Credentials from './containers/credentials/credentials';
import Address from './containers/address/address';
import Survey from './containers/survey/survey';

const Pages = {
  credentials: <Credentials />,
  address: <Address />,
  survey: <Survey />,
};

export enum CurrentPage {
  Credentials = 'credentials',
  Address = 'address',
  Survey = 'survey',
}

const App = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(
    CurrentPage.Address
  );

  return <main>{Pages[currentPage]}</main>;
};

export default App;
