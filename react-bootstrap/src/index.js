import React from 'react';
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import SPAContainer from './spa/spaContainer'


ReactDOM.render(
    <HashRouter>
                <SPAContainer></SPAContainer> 
    </HashRouter>,document.getElementById('root')
)