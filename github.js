class Github {
  constructor() {
    this.client_id = 'e18f9d1c2776addabffe';
    this.client_secret = '78759469e744a5cf1dac3839ba57b8cc28795817';
  }


  async getUser(user) {
    const profileResponse = await  fetch(`https:api.github.com/users/${user}?client_id=${this.client_id}client_secret&${this.client_secret}`)
    const profileData = await profileResponse.json();

    return {
      profileData    // profileData : profileData
    }

  }
}