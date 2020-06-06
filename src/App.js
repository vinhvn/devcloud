import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import CreateProject from './components/projects/CreateProject';
import NotFound from './components/splash/NotFound';
import Home from './components/splash/Home';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/dashboard'} component={Dashboard} />
                    <Route path={'/project/:id'} component={ProjectDetails} />
                    <Route path={'/login'} component={Login} />
                    <Route path={'/register'} component={Register} />
                    <Route path={'/create'} component={CreateProject} />
                    <Route exact path={'*'} component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
