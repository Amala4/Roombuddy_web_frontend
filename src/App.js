import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AddRoom from './components/AddRoom';
import ShowRoomList from './components/ShowRoomList';
import ShowRoomDetails from './components/ShowRoomDetails';
import UpdateRoomInfo from './components/UpdateRoomInfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        
        
          <Route exact path='/' component={ShowRoomList} />
          <Route path='/show-room/:id' component={ShowRoomDetails} />
          <Route path='/add-room' component={AddRoom} />
          <Route path='/edit-room/:id' component={UpdateRoomInfo} />
          
        
        
        </div>
      </Router>
    );
  }
}

export default App;