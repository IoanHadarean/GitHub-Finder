/* global GitHub */
/* global UI */

// Init Github
const github =  new GitHub;
const ui =  new UI;


// Search input
const searchUser = document.getElementById('searchUser');



// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                }else {
                    // Show profile
                    ui.showProfile(data.profile);
                }
            });
        github.getRepos(userText)
            .then(data => {
                if (data.repos.message === 'Not Found') {
                    // Show alert
                    ui.showAlert('User has no repos', 'alert alert-danger');
                } else {
                    // Show repos
                    
                }
            });
    }
    else {
        // Clear profile
        ui.clearProfile();
    }
});
