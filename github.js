/* global fetch */


class GitHub {
    constructor() {
        this.clientId = 'fef70f7521da2c57d51f';
        this.clientSecret = 'a32d691ec9953d3225d42371e84112bf4816f168';
        this.reposCount = 5;
        this.reposSort = 'created: asc';
        
    }
    
    async getUser(user) {
        const profileResponse =  await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const profile =  await profileResponse.json();
        
        
        const reposResponse =  await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort-${this.reposSort}&?client_id=${this.clientId}&client_secret=${this.clientSecret}`);
        const repos =  await reposResponse.json();
        
        return {
            profile,
            repos
        };
    }
}