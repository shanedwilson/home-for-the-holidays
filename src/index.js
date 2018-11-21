import firebase from 'firebase/app';
import 'bootstrap';
import $ from 'jquery';

import apiKeys from '../db/apiKeys.json';

import navbar from './components/Navbar/navbar';
import auth from './components/Auth/auth';
import authHelpers from './helpers/authHelpers';
import friendsPage from './components/FriendsPage/friendsPage';
import addEditFriend from './components/AddEditFriend/addEditFriend';

import './index.scss';

const initApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navbar.createNavbar();
  authHelpers.checkLoginStatus(friendsPage.initFriendsPage);
  auth.loginButton();
  $('#show-friend-form').on('click', addEditFriend.showAddForm);
};

initApp();
