import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from './App';
import HomePage from './components/HomePage';
import PictureList from './components/PicturesList';
import ProjectList from './components/ProjectList';
import BlogList from './components/BlogList';
import ProjectPage from './components/ProjectPage';
import AboutMe from './components/AboutMe';
import ContactMe from './components/CotactMe';

const root = document.getElementById('root');

ReactDOM.render(
<Router history={hashHistory}>
    <Route path="/" component={App} >
        <IndexRoute component={HomePage}></IndexRoute>
        <Route path = "PictureList" component={PictureList} > </Route>
        <Route path = "ProjectList" component={ProjectList} > </Route>
        <Route path = "ProjectPage" component={ProjectPage} > </Route>
        <Route path = "BlogList" component={BlogList} > </Route>
        <Route path = "AboutMe" component={AboutMe} > </Route>
        <Route path = "ContactMe" component={ContactMe} > </Route>
    </Route>
</Router>, root);
registerServiceWorker();
