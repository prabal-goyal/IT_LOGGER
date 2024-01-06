import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModel from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    //initialises Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModel />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
