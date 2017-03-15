function logged() {
    function getById(id) {
        return document.getElementById(id);
    }
    
    // Hiding login-register popup and buttons.
    getById('login-register-popup').style.display = 'none';
    getById('left-register-link').style.display = 'none';
    getById('login-button').style.display = 'none';
    
    console.log('Hello ' + userModel.getUserInfo());
    var welcomeUser = document.createElement('p');
    welcomeUser.innerHTML = "Здравейте, " + "<span>" + userModel.getUserInfo() + "</span>";
    getById('logged-user').appendChild(welcomeUser);
    console.log('Good for you!');
}