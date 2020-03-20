class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  showProfile(user) {
    console.log(user.profileData.avatar_url)

    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.profileData.avatar_url}">
            <a href="${user.profileData.html_url}" target="_blank" class="btn btn-dark btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">
              Public Repos: ${user.profileData.public_repos}
            </span>
            <span class="badge badge-secondary">
              Public Gists: ${user.profileData.public_gists}
            </span>
            <span class="badge badge-success">
              Followers: ${user.profileData.followers}
            </span>
            <span class="badge badge-info">
              Following: ${user.profileData.following}
            </span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.profileData.company}</li>
              <li class="list-group-item">Website/Blog: ${user.profileData.blog}</li>
              <li class="list-group-item">Location: ${user.profileData.location}</li>
              <li class="list-group-item">Member Since: ${user.profileData.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-4">Latest Repos</h3>
      <div id="repos"></div>
    `
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  showAlert(msg, className) {
    // Clear Created alert message
    this.clearAlertMsg();
    // Create div
    const div = document.createElement('div');
    // Add classses
    div.className = className;
    // Add text
    div.appendChild(document.createTextNode(msg))
    // Get parent
    const container = document.querySelector('.searchContainer');
    // Search box
    const search = document.querySelector('.search');
    // Insert before
    container.insertBefore(div, search)
    // Timeout after 3 sec
    setTimeout(() => {
      this.clearAlertMsg();
    },3000)
  }

  // Clear alert message
  clearAlertMsg() {
    const msg = document.querySelector('.alert');
    if (msg) {
      msg.remove();
    }
  }
}