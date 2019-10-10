import React from 'react';
import { connect } from 'react-redux'
import { fetchUser, deleteUser } from '../actions';

class DeleteUserPopUp extends React.Component{
    componentDidMount(){
        this.props.fetchUser(this.props.userId)
    }

    handleClick = () => {
        this.props.deleteUser(this.props.userId);
        this.props.closePopup()
    };

    render(){
        const {first_name, last_name} = this.props.user;
        return(
            <div className="popup" onClick={this.props.closePopup}>
                <div className="popup_inner" onClick={e => e.stopPropagation()}>
                    <h2>Are you sure you want delete user "{first_name + ' ' + last_name}" ?</h2>
                    <div className="popup-btns">
                        <button onClick={this.handleClick} className="ui red button">Yes</button>
                        <button onClick={this.props.closePopup} className="ui teal button">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       user: state.users[ownProps.userId]
    }
};

export default connect(mapStateToProps, { fetchUser, deleteUser })(DeleteUserPopUp);