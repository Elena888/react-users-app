import React from 'react';
import { connect } from 'react-redux'
import { deleteUser } from '../actions';

class DeleteUserPopUp extends React.Component{

    handleClick = () => {
        this.props.deleteUser(this.props.userData.id);
        this.props.closePopup()
    };

    render(){
        const {first_name, last_name} = this.props.userData;
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


export default connect(null, { deleteUser })(DeleteUserPopUp);