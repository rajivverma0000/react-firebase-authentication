import React, { Component } from 'react';
 
import { withFirebase } from '../Firebase';
 
class AdminPage extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      loading: false,
      users: {},
    };
  }
 
  componentDidMount() {
    this.props.firebase.users.off();

    this.setState({ loading: true });
 
    this.props.firebase.users().on('value', snapshot => {
        const usersObject = snapshot.val();
 
      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }
 
  render() {
    this.props.firebase.users.off();
    const { users, loading } = this.state;


    return (
      <div>
        <h1>Admin</h1>
        {<div>Loading ...</div>}
 
        {loading && <div>Loading ...</div>}
 
        <UserList users={users} />


      </div>
    );
  }
}
const UserList = ({ users }) => (
    <ul>
      {users.map(user => (
        <li key={user.uid}>
          <span>
            <strong>ID:</strong> {user.uid}
          </span>
          <span>
            <strong>E-Mail:</strong> {user.email}
          </span>
          <span>
            <strong>Username:</strong> {user.username}
          </span>
        </li>
      ))}
    </ul>
  );
    
export default withFirebase(AdminPage);