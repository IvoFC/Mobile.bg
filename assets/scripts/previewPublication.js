viewPublicationButton.addEventListener('click', function (event) {
    //Preview Publication:

    //radios
    var radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    for (var index = 0; index < radioButtons.length; index++) {
        document.getElementById("previewSelections").innerHTML += radioButtons[index].value + "<br/><br/>";
    }

    //selects
    var inputSelects = document.querySelectorAll('#publish select');
    for (var index = 0; index < inputSelects.length; index++) {
        if (inputSelects[index].value != '') {
            document.getElementById("previewSelections").innerHTML += inputSelects[index].name + ": <br/>";
            document.getElementById("previewSelections").innerHTML += inputSelects[index].value + "<br/><br/>";
        }
    }

    //input texts
    var inputTexts = document.querySelectorAll('#publish input[type="text"]');
    for (var index = 0; index < inputTexts.length; index++) {
        if (inputTexts[index].value != '') {
            document.getElementById("previewSelections").innerHTML += inputTexts[index].name + ": <br/>";
            document.getElementById("previewSelections").innerHTML += inputTexts[index].value + "<br/><br/>";
        }
    }

    //checkboxes
    var checkBoxes = document.querySelectorAll('#publish input[type="checkbox"]:checked');

    if (checkBoxes != undefined && checkBoxes.length > 0) {
        document.getElementById("previewSelections").innerHTML += "<br/><br/> Екстри: </br>";
        for (var index = 0; index < checkBoxes.length; index++) {
            document.getElementById("previewSelections").innerHTML += checkBoxes[index].value + ", ";
        }
    }

    event.preventDefault();
}, false);