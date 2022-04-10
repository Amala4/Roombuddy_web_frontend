import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateRoomInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      room_address_and_description: '',
      about_me:'',
      room_rent:'',
      roommate_rent:'',
      gender:'',
      state:'',
      campus:'',
      samenumber:'',
      post_number:'',
      poster_phonenumber:'',
      kind_of_person:'',
      poster_fullName:'',
      time:'',
      user_id: ''
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get('http://localhost:8082/api/Room_Details/'+this.props.match.params.id)
      .then(res => {
        // this.setState({...this.state, room: res.data})
        this.setState({
          room_address_and_description: res.data.room_address_and_description,
          about_me: res.data.about_me,
          room_rent: res.data.room_rent,
          roommate_rent: res.data.roommate_rent,
          gender: res.data.gender,
          state: res.data.state,
          campus:res.data.campus,
          kind_of_person:res.data.kind_of_person,
          poster_phonenumber: res.data.poster_phonenumber,
        
        })
      })
      .catch(err => {
        console.log("Error from UpdateRoomInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
    
      
          room_address_and_description: this.state.room_address_and_description,
          about_me: this.state.about_me,
          room_rent: this.state.room_rent,
          roommate_rent: this.state.roommate_rent,
          gender: this.state.gender,
          state: this.state.state,
          kind_of_person: this.state.kind_of_person,
          campus: this.state.campus,
          poster_phonenumber: this.state.poster_phonenumber
    };

    axios
      .put('http://localhost:8082/api/Room_Details/'+this.props.match.params.id, data)
      .then(res => {
        this.props.history.push('/show-room/'+this.props.match.params.id);
      })
      .catch(err => {
        console.log("Error in UpdateRoomInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateRoomInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Room List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Room</h1>
              <p className="lead text-center">
                  Update Room's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="Description">Room Adress and Description</label>
              <input
                    type='text'
                    placeholder='Room Adress and Description'
                    name='room_address_and_description'
                    className='form-control'
                    value={this.state.room_address_and_description}
                    onChange={this.onChange}
                  />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="aboutme">About me</label>
            <input
                    type='text'
                    placeholder='About me'
                    name='about_me'
                    className='form-control'
                    value={this.state.about_me}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="roomrent">Room Rent</label>
            <input
                    type='text'
                    placeholder='Room Rent'
                    name='room_rent'
                    className='form-control'
                    value={this.state.room_rent}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="roommaterent">Roommate Rent</label>
            <input
                    type='text'
                    placeholder='Roommate Rent'
                    name='roommate_rent'
                    className='form-control'
                    value={this.state.roommate_rent}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="gender">Gender</label>
            <input
                    type='text'
                    placeholder='Gender'
                    name='gender'
                    className='form-control'
                    value={this.state.gender}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="state">State</label>
            <input
                    type='text'
                    placeholder='State'
                    name='state'
                    className='form-control'
                    value={this.state.state}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="campus">Campus</label>
            <input
                    type='text'
                    placeholder='Campus'
                    name='campus'
                    className='form-control'
                    value={this.state.campus}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="phoneno">Phone number</label>
            <input
                    type='text'
                    placeholder='Phone number'
                    name='poster_phonenumber'
                    className='form-control'
                    value={this.state.poster_phonenumber}
                    onChange={this.onChange}
                  />
            </div>

            <div className='form-group'>
            <label htmlFor="kindofperson">Kind of Person</label>
            <input
                    type='text'
                    placeholder='Kind of Person'
                    name='kind_of_person'
                    className='form-control'
                    value={this.state.kind_of_person}
                    onChange={this.onChange}
                  />
            </div>
            <div className='form-group'>
            <label htmlFor="fullname">Full Name</label>
            <input
                    type='text'
                    placeholder='Full Name'
                    name='poster_fullName'
                    className='form-control'
                    value={this.state.poster_fullName}
                    onChange={this.onChange}
                  />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Edit Room</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateRoomInfo;