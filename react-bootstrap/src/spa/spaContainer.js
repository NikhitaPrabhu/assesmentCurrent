import React from 'react';
import NavbarComponent from './navbar/navbarComponent';
import Content from './content/content';

class SPAContainer extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <NavbarComponent></NavbarComponent>
            <Content></Content>
            </div>
         );
    }
}
 
export default SPAContainer;