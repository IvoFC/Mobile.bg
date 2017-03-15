function logged() {
    function getById(id) {
        return document.getElementById(id);
    }
    
    // Hiding login-register popup and buttons.
    getById('login-register-popup').style.display = 'none';
    getById('left-register-link').style.display = 'none';
    getById('login-button').style.display = 'none';
    
    var welcomeUser = document.createElement('p');
    welcomeUser.innerHTML = "Здравейте, " + "<span>" + userModel.getUserInfo() + "</span>";
    getById('logged-user').appendChild(welcomeUser);

    // var myMobileButton = document.getElementById('navMyMobile');
    // var myMobilePageForUsers = document.querySelector('#my-mobile > show-version-for-users');
    // var myMobilePageForGuests = document.querySelector('#my-mobile > show-version-for-guests');
    // myMobileButton.addEventListener('click', function(){
        // myMobilePageForGuests.style.display = 'none';
        // myMobilePageForUsers.style.display = 'block';
    // }, false);

    console.log('Good for you!');
}