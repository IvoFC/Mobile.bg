/**
 * Created by ivo on 10.03.17.
 */

(function () {
    var publishButton = document.querySelector(".publish");

    publishButton.addEventListener('click', function (event) {
        var mainDIv = document.querySelector('#homePage');
        var publishPage = document.querySelector('#publishCars');

        publishPage.style.display = 'block';
        mainDIv.style.display = 'none';
        event.preventDefault();
    }, false)

})();