import React from 'react'

class UserItem extends React.Component{

    state = {
        isEditing: false,
        avatar: this.props.userData.avatar,
        first_name:  this.props.userData.first_name,
        last_name: this.props.userData.last_name,
        email: this.props.userData.email
    };

    handleChange = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        this.setState({[name]: val});
    };

    handleFileChange = (event) => {
        console.log(event.target.files[0])
        this.setState({
            avatar: event.target.files[0].name
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            id: this.props.userData.id,
            avatar: this.state.avatar,
            first_name:  this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email
        };
        this.props.editUser(this.props.userData.id, data);
        this.setState({ isEditing: false })
    };

    editUser = () => {
        this.setState({ isEditing: true })
    };

    renderCard = () => {
        const {avatar, first_name, last_name, email, id} = this.props.userData;
        return (
            <div className="card">
                <div className="image">
                    <img src={avatar} alt={first_name + ' ' + last_name}/>
                    <div className="card-btns">
                        <div className="ui buttons">
                            <button className="ui teal button" onClick={this.editUser}>Edit</button>
                            <div className="or"/>
                            <button className="ui red button" onClick={() => this.props.deleteUser(id)}>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="header">{first_name + ' ' + last_name}</div>
                    <div className="email">{email}</div>
                </div>
            </div>
        )
    };

    renderCardForm = () => {
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit}>
                    <div className="image">
                        <input type="url" name="avatar" value={this.state.avatar} onChange={this.handleChange}/>
                    </div>
                    <div className="content">
                        <div className="header">
                            <input type="text" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
                            <input type="text" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
                        </div>
                        <div className="email">
                            <input type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <button className="ui button" type="submit">Save</button>
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