import React from 'react';
// import moment from 'moment';
// import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    newFriendText: {
        name: "",
        age: "",
        email: ""
      },
      friendsList: []
  };
  addFriend = e =>{
    axiosWithAuth()
    .post('/friends', this.state.newFriendText)
    .then(res => {
      this.props.history.push('/friends');
    })
    .catch(err => console.log(err)); 
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        this.setState({
          friendsList: res.data
        });
      })
      .catch(err => console.log(err));
  };
  handleChanges = e => {
    this.setState({
      newFriendText: {
        ...this.state.newFriendText,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
  
    return (
        <div>
             <h2>Friends</h2>
                <div className="form">
                    <form classname="form-components" onSubmit={this.addFriend}>
                        <input 
                        name="name"
                        value={this.state.newFriendText.name}
                        placeholder="Name"
                        type="text"
                        onChange={this.handleChanges}
                        />
                        <input 
                        name="age"
                        value={this.state.newFriendText.age}
                        placeholder="Age"
                        type="text"
                        onChange={this.handleChanges}
                        />
                        <input 
                        name="email"
                        value={this.state.newFriendText.email}
                        placeholder="Email"
                        type="text"
                        onChange={this.handleChanges}
                        />
                        <button type="submit">Add Friend</button>
                    </form>
                </div>
                <div className="friends-container">
                    {this.state.friendsList.map(friends => {
                        return (
                            <div className="list" key={friends.id}>
                                <h2>{friends.name}, {friends.age}</h2>
                                <p>{friends.email}</p>
                            
                            </div>
                                )
                            }
                         )
                    } 
                </div>

            </div>
            )
        }
  }


export default FriendsList;
