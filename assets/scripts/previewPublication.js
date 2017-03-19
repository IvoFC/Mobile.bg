viewPublicationButton.addEventListener('click', function (event) {
    //Preview Publication:
    var previewDiv = document.getElementById("previewSelections");

    var divCarText= document.createElement("div");
    divCarText.className = "divCarText";

    var divCarExtras = document.createElement("div");
    divCarExtras.id = "div-car-extras";
    

    var newImage = document.createElement('img');
    if(document.getElementById("preview-image") != undefined) {
        newImage.src = document.getElementById("preview-image").src;
        previewDiv.appendChild(newImage);
    }

    previewDiv.appendChild(divCarText);
    previewDiv.appendChild(divCarExtras);

    //radios
    // var radioButtons = document.querySelectorAll('input[type="radio"]:checked');
    // for (var index = 0; index < radioButtons.length; index++) {
    //     divCarText.innerHTML += "<p>" + radioButtons[index].value + "</p> <br/><br/>";
    // }

    //selects
    var inputSelects = document.querySelectorAll('#publish select');
    for (var index = 0; index < inputSelects.length; index++) {
        if (inputSelects[index].value != '') {
            divCarText.innerHTML += "<span>" + inputSelects[index].name + "</span>" + "<p>" + inputSelects[index].value + "</p>";
        }
    }

    //input texts
    var inputTexts = document.querySelectorAll('#publish input[type="text"]');
    for (var index = 0; index < inputTexts.length; index++) {
        if (inputTexts[index].value != '') {
            divCarText.innerHTML += "<span>" + inputTexts[index].name + "</span>" + "<p>" + inputTexts[index].value + "</p>";
        }
    }

    //checkboxes
    var checkBoxes = document.querySelectorAll('#publish input[type="checkbox"]:checked');

    if (checkBoxes != undefined && checkBoxes.length > 0) {
        divCarExtras.innerHTML += "<span> Екстри: </span>";
        for (var index = 0; index < checkBoxes.length; index++) {
            divCarExtras.innerHTML += "<p>" + checkBoxes[index].value + ", </p>";
        }
    }

    

    var buttonPub = document.getElementById('publishButton');
    buttonPub.style.display = 'block';
    event.preventDefault();
}, false);