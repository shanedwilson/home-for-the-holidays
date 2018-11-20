const formBuilder = () => {
  const form = `
  <div class="form-group">
    <label for="form-friend-name">Name</label>
    <input type="text" class="form-control" id="form-friend-name" placeholder="John Smith">
  </div>
  <div class="form-group">
    <label for="form-friend-address">Address</label>
    <input type="text" class="form-control" id="form-friend-address" placeholder="123 Main St.">
  </div>
  <div class="form-group">
    <label for="form-friend-phone">Phone Number</label>
    <input type="text" class="form-control" id="form-friend-phone" placeholder="1234567">
  </div>
   <div class="form-group">
    <label for="form-friend-email">Email</label>
    <input type="email" class="form-control" id="form-friend-email" placeholder="friend@gmail.com">
  </div>
   <div class="form-group">
    <label for="form-friend-relationship">Relationship</label>
    <input type="text" class="form-control" id="form-friend-relationship" placeholder="Arch Nemisis">
  </div>
  `;
  return form;
};
