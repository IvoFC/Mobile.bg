    var loggedIn = false;
function logged(username) {

    loggedIn = true;
    function getById(id) {
        return document.getElementById(id);
    }
    
    // Hiding login-register popup and buttons.
    getById('login-register-popup').style.display = 'none';
    getById('left-register-link').style.display = 'none';
    getById('login-button').style.display = 'none';
    document.getElementById("login-background").style.display = "none";
    
    var welcomeUser = document.createElement('p');
    welcomeUser.innerHTML = "Здравейте, " + "<span>" + username + "</span>";
    getById('logged-user').appendChild(welcomeUser);


    var myMobilePage = getById('navMyMobile');
    myMobilePage.addEventListener('click', function() {
        getById('show-version-for-guests').style.display = "none";
        getById('show-version-for-users').style.display = "inline-block";
    }, false);
    

    var myCarsButton = getById("all-my-cars");
    var myCarsDiv = getById("all-cars-from-user");
    myCarsDiv.style.display = 'none';

    myCarsButton.addEventListener("click", function() {
        myCarsDiv.style.display = "block";
        (function () {
        var allcars = carManager.getAllCarsOfCurrentUser(username);
        getCars(allcars, getById('show-version-for-users'));
        console.log(username);
        console.log(allcars);
    })();
    }, false);


    // Function for showing all cars for this user ->
    
    
    console.log('Good for you!');
}