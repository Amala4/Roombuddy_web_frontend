import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class showRoomDetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      room: {}
    };
  }

 


  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('https://roombuddy-app.herokuapp.com/api/Room_Details/'+this.props.match.params.id)
      .then(res => {
        // console.log("Print-showRoomDetails-API-response: " + res.data);
        this.setState({
          room: res.data
        })
      })
      .catch(err => {
        console.log("Error from ShowRoomDetails");
      })
  };



  onDeleteClick (id) {
    axios
      .delete('https://roombuddy-app.herokuapp.com/api/Room_Details/'+id)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error form ShowRoomDetails_deleteClick");
      })
  };

  

  render() {

    const room = this.state.room;
  
    let RoomItem = <div>
      <table className="table table-hover table-dark">
      {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Gender</td>
            <td>{ room.gender }</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>State</td>
            <td>{ room.state }</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Campus</td>
            <td>{ room.campus }</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Roommate rent</td>
            <td>{ room.roommate_rent }</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Description</td>
            <td>{ room.room_address_and_description }</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Who I am looking for</td>
            <td>{ room.kind_of_person }</td>
          </tr>
        </tbody>
      </table>
    </div>
    return (
      <div className="ShowRoomDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Room List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Room's Record</h1>
              <p className="lead text-center">
                  View Room's Info
              </p>
              <hr /> <br />
            </div>
          </div>
          <div>
            { RoomItem }
          </div>

          <div className="row">
            <div className="col-md-6">
              <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={this.onDeleteClick.bind(this,room._id)}>Delete Room</button><br />
            </div>

            <div className="col-md-6">
              <Link to={`/edit-room/${room._id}`} className="btn btn-outline-info btn-lg btn-block">
                    Edit Room
              </Link>
              <br />
            </div>

          </div>
            {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Room</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Room</button> */}

        </div>
      </div>
    );
  }
}

export default showRoomDetails;