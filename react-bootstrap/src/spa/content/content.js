import React from 'react';
import { Switch, Route } from "react-router-dom";
import MediaCompoenet from './media/mediaComponent';
import UploadMedia from './upload/uploadMedia';
import Followers from './followers/followers';
import AccountComponent from './account/account'


class Content extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Switch>
                <Route exact path="/" component={MediaCompoenet}/>
                <Route  path="/upload" component={UploadMedia}/>
                <Route  path="/followers" component={Followers}/>
                <Route  path="/account" component={AccountComponent}/>
            </Switch>
         );
    }
}
 
export default Content;