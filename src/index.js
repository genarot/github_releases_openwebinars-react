import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
// import Header from './components/Header'
import SearchContainer   from  './containers/SearchContainer'
import DetailsContainer from './containers/DetailsContainer'

ReactDOM.render(<App title={'Aprendiendo React'}/>, document.getElementById('root'));


ReactDOM.render(
    <div>
        {/* <Header /> */}
        <SearchContainer />
        {/* <DetailsContainer/> */}
    </div>,
    // <DetailsContainer />,
    document.getElementById('root')
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
