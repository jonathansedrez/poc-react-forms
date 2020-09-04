import React, { Dispatch, SetStateAction } from 'react';
import { Page } from './App';

type PageContextActions = {
  currentPage?: Page;
  setCurrentPage: Dispatch<SetStateAction<Page>>;
};

interface ContextActions extends PageContextActions {}

export const AppContext = React.createContext<ContextActions>(undefined!);
