import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App                  from './containers/App';
import * as serviceWorker from './serviceWorker';
import BaseContainer    from './containers/BaseContainer'
import ErrorComponent from './components/Error';
import About from './components/About';
// import SearchContainer   from  './containers/SearchContainer'
// import DetailsContainer from './containers/DetailsContainer';
import {HashRouter as Router, Route, Switch} from  'react-router-dom';
import Header from './components/Header';
import DetailsContainer from './containers/DetailsContainer/DetailsContainer';
import SearchContainer from './containers/SearchContainer';

ReactDOM.render(
                <Router>
                    <React.Fragment>
                            <BaseContainer />
                            <Switch>
                                <Route exact path="/"  component={SearchContainer}/>
                                <Route exact path="/about" render={ () => < About />}/>
                                <Route exact path="/:user/:repo" component={DetailsContainer}/>
                                <Route component={ErrorComponent}/>
                            </Switch>
                    </React.Fragment>
                    {/* </BaseContainer> */}
                </Router>
                , document.getElementById('root')
                );


// ReactDOM.render(
//     <BaseContainer />
// ,
// document.getElementById('root'));
// ReactDOM.render(
//     <div>
//         {/* <Header /> */}
//         <SearchContainer />
//         {/* <DetailsContainer/> */}
//     </div>,
//     // <DetailsContainer />,
//     document.getElementById('root')
//   );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
