(function () {
    function getById(id) {
        return document.getElementById(id);
    }

    var pubButton = getById('publishButton');

    pubButton.addEventListener('click', function (event) {
        var brand = getById('brand');
        brand = brand.options[brand.selectedIndex].value;

        var model = getById('model');
        model = model.options[model.selectedIndex].value;

        var price = getById('price');
        price = price.value;

        var engine = getById('engineType');
        engine = engine.options[engine.selectedIndex].value;

        var extras = [];
        var collectionCheckBox = document.querySelectorAll('.checkBoxes  input:checked');
        for (var index = 0; index < collectionCheckBox.length; index++) {
            extras.push(collectionCheckBox[index].value);
        }

        carManager.addCar(new Car(brand, model, price, engine, extras));

        event.preventDefault();
    })

})();