import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RoomCard from './RoomCard';

class ShowRoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_array: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/Room_Details')
      .then(res => {
        this.setState({
          room_array: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowRoomList');
      })
  };


  render() {
    const room_array = this.state.room_array;
    console.log("PrintRoom: " + room_array);
    let roomList;

    if(room_array) {
      roomList = room_array.map((room, k) =>
      <RoomCard room={room} key={k} />
    );
    } else {
     
      roomList = "there is no room record!";
    }

    return (
      <div className="ShowRoomList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Room List</h2>
            </div>

            <div className="col-md-11">
              <Link to="/add-room" className="btn btn-outline-warning float-right">
                + Post New Room
              </Link>
              <br />
              <br />
              <hr />
            </div>

          </div>

          <div className="list">
                {roomList}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRoomList;