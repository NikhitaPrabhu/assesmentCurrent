import React from 'react';
import UserNavCompoent from './userComponent';
import MediaCard from './mediaCard';
import axios from 'axios';


class MediaCompoenet extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userContent: [],
            mediaSelectFlag:0,
            usernameState:String,
            profileimgState:String

        }
        this.getRemoteData = this.getRemoteData.bind(this)
        this.displayUserInfo = this.displayUserInfo.bind(this)
        this.displayAllMediaCard = this.displayAllMediaCard.bind(this)
        this.displayVideo = this.displayVideo.bind(this)
        this.displayImage = this.displayImage.bind(this)
        this.setImg= this.setImg.bind(this)
        this.setVid = this.setVid.bind(this)


     }


     componentWillMount(){
        console.log("component has mounted!!")
        this.getRemoteData()
    }
    getRemoteData(){
        axios.get("http://localhost:1234/all").then((response)=>{
            console.log(response.data)
            console.log("Before")
            console.log(this.state.userContent)
            response.data.map((one)=>{
                this.setState(
                    {
                        usernameState:one.username,
                        profileimgState:one.profileimg,
                        userContent:one.content
                    }
                )
            })
            console.log("After")
            console.log(this.state.userContent)
            console.log(this.state.usernameState)
            console.log(this.state.profileimgState)
        })
    }
    displayUserInfo(){
           console.log("inside display user!!!!!")   
           console.log(this.state.userContent)  
           console.log(this.state.profileimgState)
           console.log(this.state.usernameState)
        return (
            <UserNavCompoent
             username={this.state.usernameState}
             profileimg={this.state.profileimgState}
            >
            </UserNavCompoent>
        )
    }

    displayAllMediaCard(){
        return this.state.userContent.map((oneuser)=>{
            return (
                <MediaCard
                    key={oneuser.id}
                    title={oneuser.name}
                    desc={oneuser.description}
                    upvote={oneuser.upvote}
                    downvote={oneuser.downvote}
                    NoComment={oneuser.Nocomments}
                    picture={oneuser.media}
                >
                </MediaCard>
            )
        })
    }

    displayImage(){
        return this.state.userContent
        .filter(img => img.mediaType === "img")
        .map((img) =>(
                <MediaCard
                    key={img.id}
                    title={img.name}
                    desc={img.description}
                    upvote={img.upvote}
                    downvote={img.downvote}
                    NoComment={img.Nocomments}
                    picture={img.media}
                >
                </MediaCard>
        )
        
        );
    }

    displayVideo(){
        return this.state.userContent.
        filter(img => img.mediaType === "vid")
        .map((img) =>(
                <MediaCard
                    key={img.id}
                    title={img.name}
                    desc={img.description}
                    upvote={img.upvote}
                    downvote={img.downvote}
                    NoComment={img.Nocomments}
                    picture={img.media}
                >
                </MediaCard>
        ));
    }
    setImg(){
        console.log("hello!!!!!!")
        console.log(this.mediaSelectFlag)
        this.setState({mediaSelectFlag:1})
    }
    setVid(){
        console.log(this.mediaSelectFlag)
        this.setState({mediaSelectFlag:2})
    }

    // //if(this.state.mediaSelectFlag==0){
    render() { 
        const mediaSelectFlag = this.state.mediaSelectFlag
        if (this.state.mediaSelectFlag==1){
            return ( 
                <div>
                {this.displayUserInfo()}
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
             {this.displayUserInfo()}
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
            {this.displayUserInfo()}
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
 
export default MediaCompoenet;