import firebase from 'firebase/app';
import 'bootstrap';

import apiKeys from '../db/apiKeys.json';

import navbar from './components/Navbar/navbar';
import auth from './components/Auth/auth';

import './index.scss';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navbar.createNavbar();
  auth.loginButton();
};

initApp();
