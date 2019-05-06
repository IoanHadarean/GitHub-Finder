/* global fetch */


class GitHub {
    constructor() {
        this.clientId = 'fef70f7521da2c57d51f';
        this.clientSecret = 'a32d691ec9953d3225d42371e84112bf4816f168';
    }
    
    async getUser(user) {
        const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile =  await profileResponse.json();
        
        return {
            profile
        };
        
    }
}