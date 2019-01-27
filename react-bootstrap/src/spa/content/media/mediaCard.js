import React from 'react';

class MediaCard extends React.Component {
    constructor(props){
        super(props)
        this.getMediaDeatil = this.getMediaDeatil.bind(this)
    }   

    getMediaDeatil(){
        this.props.mediaDetail(this.props.myid)
    }
    render() { 
         return ( 
            <div className="col-md-3">
                <div className="card" style={{width: '20rem'}}>
                    <div className="card-body">
                        {/* <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.desc}</p>  */}
                        <i className="fa fa-heart"></i><span className="card-text">{this.props.upvote}</span>&nbsp;&nbsp;&nbsp;
                        <b>Comments:</b><span className="card-text">{this.props.NoComment}</span>  <br></br>
                        <i className="fa fa-heart fa-rotate-180"></i><span className="card-text">{this.props.downvote}</span>                                           
                    </div>
                    <img onClick={this.getMediaDeatil} src={`media/${this.props.picture}`} className="card-img-top" alt="Card image cap">
                    </img>
                </div>
             </div>
         );
    }
}
 
export default MediaCard;