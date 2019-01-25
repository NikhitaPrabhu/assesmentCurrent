import React from 'react';
// import '../styling/customize.css'

class UserNavCompoent extends React.Component {
    state = {  }
    render() { 
        return (  
            <nav className="navbar navbar-light button">
                 <form className="form-inline">
                 <img src={`media/${this.props.profileimg}`} width="80" height="80" className="d-inline-block align-top" alt=""></img>
                
                <h1 className="topnav-centered">{this.props.username}</h1>
                </form>
            </nav>
        );
    }
}
 
export default UserNavCompoent;