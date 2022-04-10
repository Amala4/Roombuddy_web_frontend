import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class AddRoom extends Component {
  constructor() {
    super();
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
      user_id:''

    };
  }

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
      campus: this.state.campus,
      samenumber: this.state.samenumber,
      post_number: this.state.post_number,
      poster_phonenumber: this.state.poster_phonenumber,
      kind_of_person: this.state.kind_of_person,
      poster_fullName: this.state.poster_fullName,
      time: this.state.time,
      user_id: this.state.user_id
    };

    axios
      .post('https://roombuddy-app.herokuapp.com/api/Room_Details', data)
      .then(res => {
        this.setState({
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
      user_id:''
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateRoom!");
      })
  };

  render() {
    return (
      <div className="AddRoom">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Room List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Room</h1>
              <p className="lead text-center">
                  Create new room
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Full Name'
                    name='poster_fullName'
                    className='form-control'
                    value={this.state.poster_fullName}
                    onChange={this.onChange}
                  />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddRoom;