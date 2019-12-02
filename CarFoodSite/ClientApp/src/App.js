import React, { Component} from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Documents } from './components/Documents';
import { Feedback } from './components/Feedback';
import { Download } from './components/Download';
import { Account } from './components/Account';
import { About } from "./components/About";
import "./components/css/creative.css"


export default class App extends Component {
    static displayName = App.name;
   

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home}/>
                <Route exact path='/doc' component={Documents}/>
                <Route exact path='/fb' component={Feedback}/>
                <Route exact path='/dw' component={Download}/>
                <Route exact path='/ac' component={Account}/>
                <Route exact path='/ab' component={About}/>
            </Layout>
        ) ;
    }
}
//<Route path='/counter' component={Counter} />
//<Route path='/fetch-data' component={FetchData} />
