import React from 'react';
import '../../../styling/customize.css';

 class MediaDetailComponent extends React.Component {
     
    constructor(props){
        super(props)
        this.state ={
            likes:this.props.upvote,
            dislikes:this.props.downvote,
            lifecycle:0
            
        }

        this.changeLikes = this.changeLikes.bind(this)
        this.changeDisLikes = this.changeDisLikes.bind(this)
    }
    changeLikes(){
        console.log("inside likes")
        console.log(this.state.lifecycle)
        if(this.state.lifecycle ==0){
            console.log("inside if")
        this.setState({
            
            lifecycle: this.state.lifecycle+1,
            likes:this.state.likes+1
        })
    }
    
    }
    changeDisLikes(){
        if(this.state.lifecycle ==0){
        this.setState({
            lifecycle: this.state.lifecycle+1,
            dislikes:this.state.dislikes-1
        })

    }
}
     render() { 
         return ( 
            <div>       
                        <div>
                            <h1>Media details</h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="url">Back</a>
                        </div>
                        <div className="col-md-8">
                        <div className="card" style={{width: '35rem'}}>
                            <img  src={`media/${this.props.picture}`} className="card-img-top" alt="Card image cap">
                            </img>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">{this.props.desc}</p> 
                                <i onClick={this.changeLikes}    className="fa fa-heart"></i><span className="card-text">{this.state.likes}</span><br></br>
                                <i onClick={this.changeDisLikes} className="fa fa-heart fa-rotate-180"></i><span className="card-text">{this.state.dislikes}</span>  <br></br>
                                <a href="url">Comments:</a><span className="card-text">{this.props.NoComment}</span>                   
                            </div>
                        </div>
                    </div>
           </div>

          );
     }
     
 }
  
 export default MediaDetailComponent;