(function () {
    // Get all buttons
    var advancedSearch = document.querySelector("#advancedSearch");
    var publishButton = document.querySelector(".publish");
    var searchButton = document.querySelector(".searching");
    var homePageSearchButton = document.getElementById("homepage-search-button");
    var homeButton = document.querySelector('.homeBut');
    var myMobileButton = document.querySelector('#navMyMobile > a');
    var viewPublicationButton = document.getElementById('viewPublicationButton');
    var backToPublish = document.getElementById('backToPublishText');
    // Get all pages
    var mainDIv = document.querySelector('#homePage');
    var publishPage = document.querySelector('#publishCars');
    var searchingPage = document.querySelector('#searching');
    var searchFromHome = document.querySelector('#viewCarsFromHomeSearch');
    var publishPreview = document.querySelector('#viewPublication');
    var previewSelections = document.querySelector('#previewSelections');
    var myMobilePage = document.querySelector('#my-mobile');

    advancedSearch.addEventListener('click', goToSearch, false);

    publishButton.addEventListener('click', function (event) {

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
        searchFromHome.style.display= 'none';

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
        searchFromHome.style.display= 'none';

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
        searchFromHome.style.display= 'none';

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
        searchFromHome.style.display= 'none';

        event.preventDefault();
    }

    homePageSearchButton.addEventListener('click', function (event){
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
        myMobilePage.style.display = 'block';
        publishPreview.style.display = 'none';
        searchFromHome.style.display= 'none';

        event.preventDefault();
    }, false);



})();