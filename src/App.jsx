import React, { Component, Fragment } from 'react';
import { Routes, Route, Redirect } from "react-router-dom";


//Page Imports
import Orders from './pages/Orders.jsx';
import Reports from './pages/Reports.jsx';

//Layout Imports
import Dashboard from './layout-components/Dashboard.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Routes>
              <Route path="/*" element={<Dashboard/>}/>
                 <Route path="/orders" element={<Orders/>}/>
                 <Route path="/reports" element={<Reports/>}/>
          
        </Routes>
        </>
    )
  }
}

export default App;