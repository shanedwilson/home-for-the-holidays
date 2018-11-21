import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import friendsData from '../../helpers/data/friendsData';
import friendsPage from '../FriendsPage/friendsPage';

const formBuilder = (friend) => {
  const form = `
  <div class="form-group">
    <label for="form-friend-name">Name</label>
    <input type="text" class="form-control" value="${friend.name}" id="form-friend-name" placeholder="John Smith">
  </div>
  <div class="form-group">
    <label for="form-friend-address">Address</label>
    <input type="text" class="form-control" value="${friend.address}" id="form-friend-address" placeholder="123 Main St.">
  </div>
  <div class="form-group">
    <label for="form-friend-phone">Phone Number</label>
    <input type="text" class="form-control" value="${friend.phoneNumber}" id="form-friend-phone" placeholder="1234567">
  </div>
   <div class="form-group">
    <label for="form-friend-email">Email</label>
    <input type="email" class="form-control" value="${friend.email}" id="form-friend-email" placeholder="friend@gmail.com">
  </div>
   <div class="form-group">
    <label for="form-friend-relationship">Relationship</label>
    <input type="text" class="form-control" value="${friend.relationship}" id="form-friend-relationship" placeholder="Arch Nemisis">
  </div>
  `;
  return form;
};

const getFriendFromForm = () => {
  const friend = {
    name: $('#form-friend-name').val(),
    address: $('#form-friend-address').val(),
    phoneNumber: $('#form-friend-phone').val(),
    email: $('#form-friend-email').val(),
    relationship: $('#form-friend-relationship').val(),
    isAvoiding: false,
    uid: authHelpers.getCurrentUid(),
  };
  return (friend);
};

const showAddForm = () => {
  const emptyFriend = {
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    relationship: '',
  };
  let domString = '<h2>Add New Friend</h2>';
  domString += formBuilder(emptyFriend);
  domString += '<button id="save-friend">Save New Friend</button>';
  $('#add-edit-friend').html(domString).show();
  $('#friends').hide();
};

const addNewFriend = () => {
  const newFriend = getFriendFromForm();
  friendsData.addNewFriend(newFriend)
    .then(() => {
      $('#add-edit-friend').html('').hide();
      $('#friends').show();
      friendsPage.initFriendsPage();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

// Edit

const showEditForm = (e) => {
  const idToEdit = e.target.dataset.editId;
  friendsData.getSingleFriend(idToEdit)
    .then((singleFriend) => {
      let domString = '<h2>Edit Friend</h2>';
      domString += formBuilder(singleFriend);
      domString += `<button id="edit-friend" data-single-edit-id="${singleFriend.id}">Save Friend</button>`;
      $('#add-edit-friend').html(domString).show();
      $('#friends').hide();
    })
    .catch((error) => {
      console.error('error in getting single for edit', error);
    });
};

const updateFriend = (e) => {
  const updatedFriend = getFriendFromForm();
  const friendId = e.target.dataset.singleEditId;
  friendsData.updateFriend(updatedFriend, friendId)
    .then(() => {
      $('#add-edit-friend').html('').hide();
      $('#single-container').html('');
      $('#friends').show();
      friendsPage.initFriendsPage();
    })
    .catch((error) => {
      console.error('error', error);
    });
};

$('body').on('click', '#save-friend', addNewFriend);
$('body').on('click', '.edit-btn', showEditForm);
$('body').on('click', '#edit-friend', updateFriend);

export default { showAddForm };
