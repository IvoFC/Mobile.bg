(function () {
    // Get all buttons
    var publishButton = document.querySelector(".publish");
    var searchButton = document.querySelector(".searching");
    var goToSearchButton = document.querySelector("#advancedSearch");
    var homePageSearchButton = document.getElementById("homepage-search-button");
    var advancedSearchButton = document.getElementById("searchButton");
    var homeButton = document.querySelector('.homeBut');
    var myMobileButton = document.querySelector('#navMyMobile > a');
    var viewPublicationButton = document.getElementById('viewPublicationButton');
    var backToPublish = document.getElementById('backToPublishText');
    // Get all pages
    var mainDIv = document.querySelector('#homePage');
    var notLoggedIn = document.querySelector('#notLoggedIn');
    var publishPage = document.querySelector('#publishCars');
    var searchingPage = document.querySelector('#searching');
    var searchFromHome = document.querySelector('#viewCarsFromHomeSearch');
    var advancedSearch = document.querySelector('#viewCarsAdvanced');
    var viewPage = document.querySelector('#view');
    var publishPreview = document.querySelector('#viewPublication');
    var previewSelections = document.querySelector('#previewSelections');
    var myMobilePage = document.querySelector('#my-mobile');
    var myMobilePageForGuests = document.querySelector('#show-version-for-guests');
    var myMobilePageForUsers = document.querySelector('#show-version-for-users');

    
    // getById('show-version-for-users').style.display = "inline-block";



    function showAndActivate(elToShow, elToActivate) {
        searchButton.className = 'searching';
        publishButton.className = 'publish';
        homeButton.className = 'homeBut';
        myMobileButton.className = '';
        elToActivate.className = 'active';

        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';
        publishPreview.style.display = 'none';
        myMobilePage.style.display = 'none';
        searchFromHome.style.display = 'none';
        advancedSearch.style.display = "none";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";
        elToShow.style.display = "block";
    }


    goToSearchButton.addEventListener('click', goToSearch, false);

    advancedSearchButton.addEventListener('click', function (event) {
        showAndActivate(advancedSearch, searchButton);
        event.preventDefault();
    }, false);

    publishButton.addEventListener('click', function (event) {
        if (window.localStorage.getItem("isLogged") === "true") {
            showAndActivate(publishPage, publishButton);
            previewSelections.innerHTML = '';
        } else {
            showAndActivate(notLoggedIn, publishButton);
            previewSelections.innerHTML = '';
        }
        event.preventDefault();
    }, false);

    viewPublicationButton.addEventListener('click', function (event) {
        showAndActivate(publishPreview, publishButton);
        event.preventDefault();
    }, false);

    backToPublish.addEventListener('click', function (event) {
        showAndActivate(publishPage, publishButton);
        previewSelections.innerHTML = '';
        event.preventDefault();
    }, false);

    searchButton.addEventListener('click', goToSearch, false);

    function goToSearch(event) {
        showAndActivate(searchingPage, searchButton);
        advancedSearch.innerHTML = '';
        event.preventDefault();
    }

    homePageSearchButton.addEventListener('click', function (event) {
        showAndActivate(searchFromHome, searchButton);
        event.preventDefault();
    }, false);

    homeButton.addEventListener('click', function (event) {
        showAndActivate(mainDIv, homeButton);
        searchFromHome.innerHTML = '';
        previewSelections.innerHTML = '';
        event.preventDefault();
    }, false);

    myMobileButton.addEventListener('click', function (event) {
            showAndActivate(myMobilePage, myMobileButton);

        if (window.localStorage.getItem("isLogged") === "true") {
            myMobilePageForUsers.style.display = "block";
            myMobilePageForGuests.style.display = "none";
            // showAndActivate(myMobilePage, myMobileButton);
            var myCarsDiv = document.getElementById("all-cars-from-user");
            myCarsDiv.style.display = "block";
            myCarsDiv.innerHTML = '';

            (function () {
                // Current username
                if (window.localStorage.getItem("currentUser") !== "") {
                    var username = JSON.parse(window.localStorage.getItem("currentUser"));
                    username = username.firstName;
                }
                var allcars = carManager.getAllCarsOfCurrentUser(username);
                if (allcars.length === 0) {
                    var noCars = document.createElement("H2");
                    noCars.textContent = "Все още нямате публикувани обяви.";
                    myCarsDiv.appendChild(noCars);
                }
                getCars(allcars, myCarsDiv, true, false);
            })();
        } else {
            myMobilePageForGuests.style.display = "block";
            myMobilePageForUsers.style.display = "none";
            

            // showAndActivate(myMobilePageForGuests, myMobileButton);

            previewSelections.innerHTML = '';
        }

        event.preventDefault();

    }, false);

})();