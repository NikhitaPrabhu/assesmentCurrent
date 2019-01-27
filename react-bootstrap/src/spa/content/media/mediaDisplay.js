import React from 'react';
import MediaDetailComponent from './mediaDetailComponent';
import MediaCard from './mediaCard';

class MediaDetails extends React.Component {    constructor(props){
    super(props)
    this.test = 0;
    this.state = {
        
        mediaSelectFlag:0,
      
        getdetailsFlag:0,
        currentid:0

    }

    this.displayAllMediaCard = this.displayAllMediaCard.bind(this)
    this.displayVideo = this.displayVideo.bind(this)
    this.displayImage = this.displayImage.bind(this)
     this.displayMediaDetailFlag = this.displayMediaDetailFlag.bind(this)
    this.setImg= this.setImg.bind(this)
    this.setVid = this.setVid.bind(this)
   


 }


    displayMediaDetailFlag(id){
        this.setState(
            {   
                getdetailsFlag:1,
                currentid:id
            }
        )
        

    }


    displayAllMediaCard(){
        return this.props.content.map((oneuser)=>{
            return (
                <MediaCard
                    key={oneuser.id}
                    myid={oneuser.id}
                    title={oneuser.name}
                    desc={oneuser.description}
                    upvote={oneuser.upvote}
                    downvote={oneuser.downvote}
                    NoComment={oneuser.Nocomments}
                    picture={oneuser.media}
                    mediaType={oneuser.mediaType}
                    mediaDetail={this.displayMediaDetailFlag}
                >
                </MediaCard>
            )
        })
    }
    displayImage(){
        return this.props.content
        .filter(img => img.mediaType === "img")
        .map((img) =>(
                <MediaCard
                    key={img.id}
                    myid={img.myid}
                    title={img.name}
                    desc={img.description}
                    upvote={img.upvote}
                    downvote={img.downvote}
                    NoComment={img.Nocomments}
                    picture={img.media}
                    mediaType={img.mediaType}
                    mediaDetail={this.displayMediaDetailFlag}
                >
                </MediaCard>
        )

        );
    }
    displayVideo(){
        return this.props.content.
        filter(img => img.mediaType === "vid")
        .map((img) =>(
                <MediaCard
                    key={img.id}
                    myid={img.myid}
                    title={img.name}
                    desc={img.description}
                    upvote={img.upvote}
                    downvote={img.downvote}
                    NoComment={img.Nocomments}
                    picture={img.media}
                    mediaType={img.mediaType}
                    mediaDetail={this.displayMediaDetailFlag}
                >
                </MediaCard>
        ));
    }
    setImg(){
        this.setState({mediaSelectFlag:1})
    }
    setVid(){
        this.setState({mediaSelectFlag:2})
    }

      render() {
        let renderString;
               if(this.state.getdetailsFlag==1){
                this.props.content.map((f)=>{
                    if(f.id === this.state.currentid){
                                             renderString=
                            <MediaDetailComponent
                            key={f.id}
                            myid={f.id}
                            title={f.name}
                            desc={f.description}
                            upvote={f.upvote}
                            downvote={f.downvote}
                            NoComment={f.Nocomments}
                            picture={f.media}
                            ></MediaDetailComponent>
                           
                        
                    }
                })
               }
        if(this.state.getdetailsFlag==1){
            return(
                <div>
                    {renderString}
                </div>
            )
        }
        else
        if (this.state.mediaSelectFlag==1){
            return (
                <div>
                <div>
                <button onClick={this.setImg}>Image</button>
                <button onClick={this.setVid}>Vedio</button>
                </div>
                <div class="row">
                {this.displayImage()}
                </div>
                </div>
                    )
        }else if(this.state.mediaSelectFlag==2){
            return(
                <div>
             <div>
             <button onClick={this.setImg}>Image</button>
            <button onClick={this.setVid}>Vedio</button>
                </div>
             <div class="row">
                {this.displayVideo()}
                </div>
                </div>
            )
        }else{
        return (
            <div>
            <div>
            <button onClick={this.setImg}>Image</button>
                <button onClick={this.setVid}>Vedio</button>
                </div>
            <div class="row">
            {this.displayAllMediaCard()}
            </div>
            </div>
         );
        }
    }
}

export default MediaDetails;