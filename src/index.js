import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import {BrowserRouter as Router} from 'react-router-dom';
import TopBar from 'components/topBar/topBar';

const App = () => {
return (
    <div>
        <h3>Welcome to hooks</h3>
        <Router>
            <TopBar/>
            <Routes/>
        </Router>

    </div>
)
};

ReactDOM.render(<App />, document.getElementById('root'));
