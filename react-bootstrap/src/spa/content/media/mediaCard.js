import React from 'react';

class MediaCard extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div className="col-md-3">
            <div className="card" style={{width: '20rem'}}>
                <img src={`media/${this.props.picture}`} className="card-img-top" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.desc}</p>                       
                </div>
            </div>
        </div>
         );
    }
}
 
export default MediaCard;