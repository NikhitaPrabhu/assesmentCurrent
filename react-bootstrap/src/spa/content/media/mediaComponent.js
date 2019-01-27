import React from 'react';
import UserNavCompoent from './userComponent';
import axios from 'axios';
import MediaDetails from './mediaDisplay';


class MediaCompoenet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userContent: [],
            usernameState: String,
            profileimgState: String
        }
        this.getRemoteData = this.getRemoteData.bind(this)
    }

    componentWillMount() {
        console.log("component has mounted!!")
        this.getRemoteData()
    }
    getRemoteData() {
        axios.get("http://localhost:1234/all").then((response) => {
            console.log(response.data)
            console.log("Before")
            console.log(this.state.userContent)
            response.data.map((one) => {
                this.setState(
                    {
                        usernameState: one.username,
                        profileimgState: one.profileimg,
                        userContent: one.content
                    }
                )
            })
            console.log("After")
            console.log(this.state.userContent)
            console.log(this.state.usernameState)
            console.log(this.state.profileimgState)
        })
    }

    render() {

        return (
            <div>
                <UserNavCompoent
                    username={this.state.usernameState}
                    profileimg={this.state.profileimgState}
                >
                </UserNavCompoent>
                <MediaDetails
                    content={this.state.userContent}
                ></MediaDetails>
            </div>
        )

    }

}

export default MediaCompoenet;