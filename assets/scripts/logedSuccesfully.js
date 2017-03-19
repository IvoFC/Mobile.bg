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
    myMobilePage.addEventListener('click', function () {
        getById('show-version-for-guests').style.display = "none";
        getById('show-version-for-users').style.display = "inline-block";
    }, false);


    var myCarsButton = getById("navMyMobile");
    var myCarsDiv = getById("all-cars-from-user");
    myCarsDiv.style.display = 'none';
    myCarsDiv.innerHTML = "";

    myCarsButton.addEventListener("click", function () {
        myCarsDiv.style.display = "block";
        myCarsDiv.innerHTML = '';
        (function () {
            var allcars = carManager.getAllCarsOfCurrentUser(username);
            if(allcars.length === 0) {
                var noCars = document.createElement("H2");
                noCars.textContent = "Все още нямате публикувани обяви.";
                myCarsDiv.appendChild(noCars);
            }
            getCars(allcars, myCarsDiv, true);


            // console.log(username);
            // console.log(allcars);
        })();
    }, false);


    // Function for showing all cars for this user ->


    // console.log('Good for you!');
}