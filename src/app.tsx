import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

const Component: React.FunctionComponent = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/*<Route path="/about">*/}
                {/*    <About />*/}
                {/*</Route>*/}
                {/*<Route path="/dashboard">*/}
                {/*    <Contact />*/}
                {/*</Route>*/}
            </Switch>
        </Router>
    )
};

export default Component;
