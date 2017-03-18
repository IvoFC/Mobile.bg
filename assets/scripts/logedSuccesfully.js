function logged(username) {
    function getById(id) {
        return document.getElementById(id);
    }
    
    // Hiding login-register popup and buttons.
    getById('login-register-popup').style.display = 'none';
    getById('left-register-link').style.display = 'none';
    getById('login-button').style.display = 'none';
    document.getElementById("login-background").style.display = "none";
    
    var welcomeUser = document.createElement('p');
    welcomeUser.innerHTML = "Здравейте, " + "<span>" + userModel.getUserInfo() + "</span>";
    getById('logged-user').appendChild(welcomeUser);


    var myMobilePage = getById('navMyMobile');
    myMobilePage.addEventListener('click', function() {
        getById('show-version-for-guests').style.display = "none";
        getById('show-version-for-users').style.display = "block";
    }, false);
    
    // Function for showing all cars for this user ->
    (function () {
        var allcars = carManager.getAllCarsOfCurrentUser(username);
        getCars(allcars, getById('show-version-for-users'));
        console.log(username);
        console.log(allcars);
    })();
    
    console.log('Good for you!');
}