(function () {
    var publishButton = document.querySelector(".publish");
    var searchButton = document.querySelector(".searching");
    var homeButton = document.querySelector('.homeBut');
    var myMobileButton = document.getElementById('navMyMobile');

    publishButton.addEventListener('click', function (event) {
        var mainDIv = document.querySelector('#homePage');
        var publishPage = document.querySelector('#publishCars');
        var searchingPage = document.querySelector('#searching');

        publishButton.className = 'active';
        searchButton.className = 'searching';
        homeButton.className = 'homeBut';

        searchingPage.style.display = 'none';
        publishPage.style.display = 'block';
        mainDIv.style.display = 'none';

        event.preventDefault();
    }, false);

    searchButton.addEventListener('click', function (event) {
        var mainDIv = document.querySelector('#homePage');
        var publishPage = document.querySelector('#publishCars');
        var searchingPage = document.querySelector('#searching');

        searchButton.className = 'active';
        publishButton.className = "publish";
        homeButton.className = "homeBut";

        searchingPage.style.display = 'block';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';

        event.preventDefault();
    }, false);

    homeButton.addEventListener('click', function (event) {
        var mainDIv = document.querySelector('#homePage');
        var publishPage = document.querySelector('#publishCars');
        var searchingPage = document.querySelector('#searching');

        homeButton.className = 'active';
        searchButton.className = 'searching';
        publishButton.className = "publish";


        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'block';

        event.preventDefault();
    }, false);

    myMobileButton.addEventListener('click', function(event) {
        var mainDIv = document.querySelector('#homePage');
        var publishPage = document.querySelector('#publishCars');
        var searchingPage = document.querySelector('#searching');
        var myMobilePage = document.querySelector('#my-mobile');

        searchingPage.style.display = 'none';
        publishPage.style.display = 'none';
        mainDIv.style.display = 'none';
        myMobilePage.style.display = 'block';

        event.preventDefault();
    }, false);

    

})();