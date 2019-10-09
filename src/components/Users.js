import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers, fetchError, deleteUser, editUser } from "../actions";
import UserItem from './UserItem'

class Users extends React.Component{

    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        console.log('this.props.users',this.props.users)
        if (this.props.usersError) {
            return <p>Sorry! There was an error loading the users</p>;
        }

        if (this.props.users.length === 0) {
            return <p>Loading…</p>;
        }

        return(
            <div>
                <h1>Users</h1>
                <div className="ui six doubling cards">
                    {this.props.users.map(item => {
                        return <UserItem key={item.id} userData={item} deleteUser={this.props.deleteUser} editUser={this.props.editUser}/>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: Object.values(state.users),
        usersError: state.usersError
    }
};

export default connect(mapStateToProps, { fetchUsers, fetchError, deleteUser, editUser })(Users)