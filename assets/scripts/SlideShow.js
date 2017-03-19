(function () {

//    for slide show:

    var sName = document.querySelector('#model3');
    var sPrice = document.querySelector('#price3');
    var sCarKM = document.querySelector('#km3');
    var sTown = document.querySelector('#town3');
    var sImage = document.querySelector('#imageSS');

//    for cars:
    var models = document.getElementsByClassName('carName');
    var price = document.getElementsByClassName('carPrice');
    var km = document.getElementsByClassName('carKM');
    var town = document.getElementsByClassName('carCity');
    var imgs = document.getElementsByClassName('imgS');
    var anchors = document.getElementsByClassName("linkA");

    //slideshow for news:

    var newsAnchors = document.querySelectorAll('#more-news a');
    var newsHeader = document.querySelector('#newsHeader');
    var newsImg = document.querySelector('#newsImg');
    var images = ["assets/img/news/1.jpg", "assets/img/news/2.jpg", "assets/img/news/3.jpg", "assets/img/news/4.jpg", "assets/img/news/5.jpg", "assets/img/news/6.jpg"];

    for (let index = 0; index < newsAnchors.length; index++) {
        newsAnchors[index].addEventListener('mouseover', function () {
            newsHeader.innerText = newsAnchors[index].innerText;
            newsImg.src = images[index];
        })
    }

    setInterval(function () {
        var carsToShow = carManager.getCarsForSlideShow();
        var images = ['assets/img/fpvip_r.gif', 'assets/img/fpvip_g.gif'];

        for (var index = 0; index < carsToShow.length; index++) {
            models[index].innerHTML = carsToShow[index].brand + ' ' + carsToShow[index].model;
            price[index].innerHTML = carsToShow[index].price + ' лв,';
            km[index].innerHTML = carsToShow[index].mileage + ' км, ';
            town[index].innerHTML = carsToShow[index].region;
            imgs[index].src = images[Math.floor(Math.random() * images.length)];
        }
        function changeText(index) {
            sName.innerHTML = models[index].innerText;
            sPrice.innerHTML = price[index].innerText;
            sCarKM.innerHTML = km[index].innerText;
            sTown.innerHTML = town[index].innerText;
            sImage.src = carsToShow[index].image;
            sImage.alt = 'car';
        }

        for (let link = 0; link < anchors.length; link++) {
            changeText(link);
            anchors[link].addEventListener('mouseover', function () {
                changeText(link);
            }, false)
        }

    }, 5000);
})();