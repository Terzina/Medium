import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes';
import {BrowserRouter as Router} from 'react-router-dom';
import TopBar from 'components/topbar/topbar';
import {CurrentUserProvider} from 'contexts/currentUser';
import CurrentUserChecker from 'components/currentUserChecker';

const App = () => {
return (
    <CurrentUserProvider>
        <CurrentUserChecker>
        <Router>
            <TopBar/>
            <Routes/>
        </Router>
        </CurrentUserChecker>
    </CurrentUserProvider>
)
};

ReactDOM.render(<App />, document.getElementById('root'));
