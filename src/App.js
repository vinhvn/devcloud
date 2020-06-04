import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateProject from './components/projects/CreateProject';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path={'/'} component={Dashboard} />
                    <Route path={'/project/:id'} component={ProjectDetails} />
                    <Route path={'/login'} component={Login} />
                    <Route path={'/register'} component={Register} />
                    <Route path={'/create'} component={CreateProject} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
