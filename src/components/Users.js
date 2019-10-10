import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers, fetchError, editUser } from "../actions";
import UserItem from './UserItem'

class Users extends React.Component{
    componentDidMount(){
        this.props.fetchUsers()
    }

    render(){
        if (this.props.usersError) {
            return <p>Sorry! There was an error loading the users</p>;
        }

        return(
            <div className="ui main grid container">
                <div className="row">
                    <div className="sixteen wide column">
                        <h1>Users</h1>
                        <div className="ui four doubling cards">
                            {this.props.users.map(item => {
                                return <UserItem key={item.id} userData={item} editUser={this.props.editUser}/>
                            })}
                        </div>
                    </div>
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

export default connect(mapStateToProps, { fetchUsers, fetchError, editUser })(Users)