import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';
import styled from "@emotion/styled";
import {Theme, withTheme} from "@emotion/react";
// import About from './pages/about';
// import Contact from './pages/contact';

const Wrapper = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   
   display: flex;    
   justify-content: center;
`;

const InnerWrapper = styled('div')`
    min-width: ${(props) => props.theme.minWidth}px;    
    max-width: ${(props) => props.theme.maxWidth}px;
`;

const Component: React.FunctionComponent = () => {
    return (
        <Wrapper>
            <Router>
                <InnerWrapper>
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
                </InnerWrapper>

            </Router>
        </Wrapper>
    )
};

export default withTheme(Component);
