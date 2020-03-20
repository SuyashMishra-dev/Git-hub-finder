// Init GitHub user
const github = new Github;
// Init UI user 
const ui = new UI;

// Search user
const searchUser = document.getElementById('searchUser');


searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profileData.message === 'Not Found') {
          // Show Alert
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // Show the profile
          ui.showProfile(data)
        }
      })
  } else {
    // Clear profile
    ui.clearProfile()
  }
})