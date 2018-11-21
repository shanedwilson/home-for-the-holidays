import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebseUrl = apiKeys.firebaseKeys.databaseURL;

// const getAllFriends = (uid) => {

// };

const getSingleFriend = friendId => new Promise((resolve, reject) => {
  axios.get(`${firebseUrl}/friends/${friendId}.json`)
    .then((result) => {
      const singleFriend = result.data;
      singleFriend.id = friendId;
      resolve(singleFriend);
    })
    .catch((error) => {
      reject(error);
    });
});

// const deleteFriend = (friendId) => {

// };

export default {
  // getAllFriends,
  getSingleFriend,
  // deleteFriend,
};
