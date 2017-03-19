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
    var previewCarBackground = document.querySelector('#previewBackground');
    var previewCarPopUp = document.querySelector('#previewPopUp');


    goToSearchButton.addEventListener('click', goToSearch, false);

    advancedSearchButton.addEventListener('click', function (event) {
        searchButton.className = 'active';
        publishButton.className = "publish";
        homeButton.className = "homeBut";
        myMobileButton.className = '';

        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';
        publishPreview.style.display = 'none';
        myMobilePage.style.display = 'none';
        searchFromHome.style.display = 'none';
        advancedSearch.style.display = "block";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";

        event.preventDefault();

    }, false);

    publishButton.addEventListener('click', function (event) {

        if (loggedIn == true) {

            publishButton.className = 'active';
            searchButton.className = 'searching';
            homeButton.className = 'homeBut';
            myMobileButton.className = '';

            searchingPage.style.display = 'none';
            publishPage.style.display = 'block';
            mainDIv.style.display = 'none';
            publishPreview.style.display = 'none';
            previewSelections.innerHTML = '';
            myMobilePage.style.display = 'none';
            searchFromHome.style.display = 'none';
            advancedSearch.style.display = "none";
            viewPage.style.display = "none";
            notLoggedIn.style.display = "none";
        } else {
            notLoggedIn.style.display = "block";

            publishButton.className = 'active';
            searchButton.className = 'searching';
            homeButton.className = 'homeBut';
            myMobileButton.className = '';

            searchingPage.style.display = 'none';
            publishPage.style.display = 'none';
            mainDIv.style.display = 'none';
            publishPreview.style.display = 'none';
            previewSelections.innerHTML = '';
            myMobilePage.style.display = 'none';
            searchFromHome.style.display = 'none';
            advancedSearch.style.display = "none";
            viewPage.style.display = "none";
        }

        event.preventDefault();
    }, false);

    viewPublicationButton.addEventListener('click', function (event) {
        publishButton.className = 'active';
        searchButton.className = 'searching';
        homeButton.className = 'homeBut';
        myMobileButton.className = '';

        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';
        publishPreview.style.display = 'block';
        myMobilePage.style.display = 'none';
        searchFromHome.style.display = 'none';
        advancedSearch.style.display = "none";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";

        event.preventDefault();
    }, false);

    backToPublish.addEventListener('click', function (event) {
        publishButton.className = 'active';
        searchButton.className = 'searching';
        homeButton.className = 'homeBut';
        myMobileButton.className = '';

        searchingPage.style.display = 'none';
        publishPage.style.display = 'block';
        mainDIv.style.display = 'none';
        publishPreview.style.display = 'none';
        previewSelections.innerHTML = '';
        myMobilePage.style.display = 'none';
        searchFromHome.style.display = 'none';
        advancedSearch.style.display = "none";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";

        event.preventDefault();
    }, false);

    searchButton.addEventListener('click', goToSearch, false);

    function goToSearch(event) {
        searchButton.className = 'active';
        publishButton.className = "publish";
        homeButton.className = "homeBut";
        myMobileButton.className = '';

        searchingPage.style.display = 'block';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';
        publishPreview.style.display = 'none';
        myMobilePage.style.display = 'none';
        searchFromHome.style.display = 'none';
        advancedSearch.style.display = "none";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";

        advancedSearch.innerHTML = '';

        event.preventDefault();
    }

    homePageSearchButton.addEventListener('click', function (event) {
        searchButton.className = 'active';
        publishButton.className = "publish";
        homeButton.className = "homeBut";
        myMobileButton.className = '';

        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';
        publishPreview.style.display = 'none';
        myMobilePage.style.display = 'none';
        searchFromHome.style.display = 'block';
        advancedSearch.style.display = "none";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";

        event.preventDefault();
    }, false);

    homeButton.addEventListener('click', function (event) {
        homeButton.className = 'active';
        searchButton.className = 'searching';
        publishButton.className = "publish";
        myMobileButton.className = '';

        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'block';
        publishPreview.style.display = 'none';
        previewSelections.innerHTML = '';
        myMobilePage.style.display = 'none';
        searchFromHome.style.display = 'none';
        advancedSearch.style.display = "none";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";

        searchFromHome.innerHTML = '';

        event.preventDefault();
    }, false);

    myMobileButton.addEventListener('click', function (event) {
        searchButton.className = 'searching';
        publishButton.className = "publish";
        homeButton.className = "homeBut";
        myMobileButton.className = "active";

        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';
        myMobilePage.style.display = 'inline-block';
        publishPreview.style.display = 'none';
        searchFromHome.style.display = 'none';
        advancedSearch.style.display = "none";
        viewPage.style.display = "none";
        notLoggedIn.style.display = "none";

        event.preventDefault();

        var myCarsDiv = document.getElementById("all-cars-from-user");

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
            })();

    }, false);

    previewCarBackground.addEventListener('click', function () {
        previewCarBackground.style.display = 'none';
        previewCarPopUp.innerHTML = '';
        previewCarPopUp.style.display = 'none';

    }, false)
})();