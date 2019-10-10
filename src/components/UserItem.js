import React from 'react'
import DeleteUserPopUp from './DeleteUserPopUp'
import { storage } from '../firebase'

const validEmailRegex = RegExp(/\S+@\S+\.\S+/);
const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
    );
    return valid;
};

class UserItem extends React.Component{
    state = {
        isEditing: false,
        showDeletePopUp: false,
        avatar: this.props.userData.avatar,
        avatar_file: '',
        progress: 0,
        first_name:  this.props.userData.first_name,
        last_name: this.props.userData.last_name,
        email: this.props.userData.email,
        errors: {
            first_name:  '',
            last_name: '',
            email: ''
        }
    };

    handleChange = (event) => {
        let { name, value } = event.target;

        let errors = this.state.errors;
        switch (name) {
            case 'first_name':
                errors.first_name =
                    value.length < 3
                        ? 'First Name must be 3 characters long!'
                        : '';
                break;
            case 'last_name':
                errors.last_name =
                    value.length < 3
                        ? 'Last Name must be 3 characters long!'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            default:
                break;
        }
        this.setState({ errors, [name]: value});
    };

    handleFileChange = (event) => {
        this.setState({
            avatar_file: event.target.files[0]
        })
    };

    handleUpload = () => {
        //Upload image to firebase
        const {avatar_file} = this.state;
        const uploadTask = storage.ref(`images/${avatar_file.name}`).put(avatar_file);
        uploadTask.on('state_changed',
            (snapshot) => {
                //progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress })
            },
            (error => {
                //error function
                console.log(error)
            }),
            () => {
                //complete function
                storage.ref('images').child(avatar_file.name).getDownloadURL().then(url => {
                    this.setState({ avatar: url })
                })
            })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
            const data = {
                id: this.props.userData.id,
                avatar: this.state.avatar,
                first_name:  this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email
            };
            this.props.editUser(this.props.userData.id, data);
            this.setState({ isEditing: false })
        }else{
            console.error('Invalid Form')
        }
    };

    handleClickEdit = () => {
        this.setState({ isEditing: true })
    };

    showPopUp = () => {
        this.setState({ showDeletePopUp: true })
    };
    closePopup = () => {
        this.setState({ showDeletePopUp: false })
    };

    renderCard = () => {
        const {avatar, first_name, last_name, email, id} = this.props.userData;
        return (
            <div className="card">
                <div className="image avatar-img">
                    <img src={avatar} alt={first_name + ' ' + last_name}/>
                    <div className="card-btns">
                        <div className="ui buttons">
                            <button className="ui teal button" onClick={this.handleClickEdit}>Edit</button>
                            <div className="or"/>
                            <button className="ui red button" onClick={this.showPopUp}>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="header">{first_name + ' ' + last_name}</div>
                    <div className="email">{email}</div>
                </div>
                {this.state.showDeletePopUp &&
                   <DeleteUserPopUp closePopup={this.closePopup} userData={this.props.userData}/>
                }
            </div>
        )
    };

    renderCardForm = () => {
        const {avatar, first_name, last_name, email, errors, progress, avatar_file} = this.state;
        const disabled = avatar_file ? '' : 'disabled';
        return(
            <div className="card">
                <form className="ui form card-form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Avatar</label>
                        <div className="image">
                            <img src={avatar} alt="avatar"/>
                        </div>
                        <progress value={progress} max="100"/>
                        <div className="upload-btns">
                            <input type="file" name="avatar" onChange={this.handleFileChange}/>
                            <button onClick={this.handleUpload} className="ui teal button tiny" type="button" disabled={disabled}>Upload</button>
                        </div>
                    </div>
                    <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first_name" value={first_name} onChange={this.handleChange}/>
                        {errors.first_name.length > 0 &&
                        <span className="error">{errors.first_name}</span>}
                    </div>
                    <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last_name" value={last_name} onChange={this.handleChange}/>
                        {errors.last_name.length > 0 &&
                        <span className="error">{errors.last_name}</span>}
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" value={email} onChange={this.handleChange}/>
                        {errors.email.length > 0 &&
                        <span className="error">{errors.email}</span>}
                    </div>
                    <div className="field center aligned ">
                        <button className="ui teal button" type="submit">Save</button>
                    </div>
                </form>
            </div>
        )
    };

    render() {
        return (
            <React.Fragment>
                {this.state.isEditing
                    ?
                        this.renderCardForm()
                    :
                        this.renderCard()
                }
            </React.Fragment>
        )
    }
}

export default UserItem