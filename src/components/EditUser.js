import React from 'react'
import { fetchUsers, editUser } from "../actions";
import { connect } from 'react-redux'

class EditUser extends React.Component{
    componentDidMount(){
        this.props.fetchUsers()
    }



    render(){
        if(!this.props.user){
            return <div>Loading...</div>
        }
        console.log('user', this.props.user);
        const { first_name, last_name, email } = this.props.user;

        return(
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>Avatar</label>
                        <input type="file" name="file"/>
                    </div>
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first_name" value={first_name}/>
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last_name" value={last_name}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" value={email}/>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users[ownProps.match.params.id]
    }
};

export default connect(mapStateToProps, { fetchUsers })(EditUser)