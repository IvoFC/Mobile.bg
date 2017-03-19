



(function () {

    // Function for creating objects for cars and users from JSON
    (function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'assets/scripts/carUsers.json', true);
        xhr.send(null);
        xhr.addEventListener('load', function () {
            var allInfo = JSON.parse(xhr.responseText);

            var user = allInfo.users;

            for (let index = 0; index < user.length; index++) {

                // carsOfUser[currentCar].image
                //     var currentImage = new File(carsOfUser[currentCar].image, 'sample.txt', {
                //     lastModified: new Date(0), // optional - default = now
                //     type: "File" // optional - default = ''
                // });
                var carsOfUser = user[index].cars;
                for (var currentCar = 0; currentCar < carsOfUser.length; currentCar++) {
                    carManager.addCar(new Car(
                        carsOfUser[currentCar].image, carsOfUser[currentCar].brand, carsOfUser[currentCar].model,
                        carsOfUser[currentCar].region, carsOfUser[currentCar].gearBox, carsOfUser[currentCar].euroStand,
                        carsOfUser[currentCar].horsePower, carsOfUser[currentCar].category, carsOfUser[currentCar].mileage,
                        carsOfUser[currentCar].color, carsOfUser[currentCar].price, carsOfUser[currentCar].month,
                        carsOfUser[currentCar].year, carsOfUser[currentCar].engine, carsOfUser[currentCar].extras, carsOfUser[currentCar].owner))
                }

                userModel.addUser(new User(user[index].firstname, user[index].lastname, user[index].town, user[index].email, user[index].password, user[index].cars));
                console.log("The cars of this user are: ");
                console.log(user[index].cars);
            }
            console.log(allInfo);


        }, false)
    })();

        function hideErrors() {
        if (document.getElementById('succesfullRegistration')) {
            modal.removeChild(document.getElementById('succesfullRegistration'));
            console.log("success");
        };

        if (document.getElementById('error')) {
            modal.removeChild(document.getElementById('error'));
            console.log("error");
        }


        if (document.getElementById('registrationError')) {
            modal.removeChild(document.getElementById('registrationError'));
            console.log("regerror");
        } else if (document.getElementById('existUsername')) {
            modal.removeChild(document.getElementById('existUsername'));
            console.log("existusername");
        } else if (document.getElementById('wrongPassword')) {
            modal.removeChild(document.getElementById('wrongPassword'));
            console.log("wrongpassword");
        }
    }

    var modal = document.getElementById('login-register-popup');
    var homeLoginButton = document.getElementById("login-button");
    homeLoginButton.addEventListener('click', function (event) {
        document.getElementById('login-register-popup').style.display = 'inline-block';
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-background").style.display = "block";

        popupLoginButton.className = '';
        popupLoginButton.className += "active";
        popupRegistrationButton.className = '';
        hideErrors();

        event.preventDefault();
    }, false);

    var homeRegisterButton = document.getElementById('register-button');
    homeRegisterButton.addEventListener('click', function () {
        document.getElementById('login-register-popup').style.display = 'inline-block';
        document.getElementById("register-form").style.display = "block";
        document.getElementById("login-form").style.display = "none";
        document.getElementById("login-background").style.display = "block";

        popupRegistrationButton.className = '';
        popupRegistrationButton.className += "active";
        popupLoginButton.className = '';
        hideErrors();

    }, false);

    // Popup login/registration form -->
    var popupLoginButton = document.getElementById("showLoginForm");
    popupLoginButton.addEventListener('click', function (event) {
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";

        popupLoginButton.className = '';
        popupLoginButton.className += "active";
        popupRegistrationButton.className = '';
        hideErrors();

        event.preventDefault();
    }, false);

    var popupRegistrationButton = document.getElementById("showRegistrationForm");
    popupRegistrationButton.addEventListener('click', function (event) {
        document.getElementById("register-form").style.display = "block";
        document.getElementById("login-form").style.display = "none";

        popupRegistrationButton.className = '';
        popupRegistrationButton.className += "active";
        popupLoginButton.className = '';

        hideErrors();
        
        event.preventDefault();
    }, false);


    document.getElementById('username').addEventListener('focus', function (event) {
        if (document.getElementById('error')) {
            modal.removeChild(document.getElementById('error'));
        }
    }, false)

    // Login button in popup ->
    var finalLoginButton = document.getElementById('submit-button');
    finalLoginButton.addEventListener('click', function (event) {
        var inputs = document.querySelectorAll('#login-register-popup #login-form input');
        var username = inputs[0].value.trim();
        var password = inputs[1].value.trim();
        if (userModel.loginUser(username, password)) {
            console.log('You login succesfully');
            inputs[0].value = '';
            inputs[1].value = '';
            logged(username);

        } else {
            if (document.getElementById('error') !== modal.lastChild) {
                var error = document.createElement('p');
                error.id = 'error';
                error.textContent = 'Въвели сте неправилно потребителско име или парола.';
                modal.appendChild(error);
                inputs[0].value = '';
                inputs[1].value = '';
            }
        }
        if (document.getElementById('succesfullRegistration')) {
            modal.removeChild(document.getElementById('succesfullRegistration'));
        }

        event.preventDefault();
    }, false)
    // Register button in popup ->
    var finalRegisterButton = document.getElementById('submit-register-form');
    finalRegisterButton.addEventListener('click', function (event) {
        // Get all inputs ->
        var inputs = document.querySelectorAll('#login-register-popup #register-form input');
        var username = inputs[0].value.trim();
        var lastname = inputs[1].value.trim();
        var town = inputs[2].value.trim();
        var email = inputs[3].value.trim();
        var pass = inputs[4].value.trim();
        var repeatedPass = inputs[5].value.trim();
        // On focus at every input errors are deleted ->
        for (var index = 0; index < inputs.length; index++) {
            inputs[index].addEventListener('focus', function (event) {
                if (document.getElementById('registrationError')) {
                    modal.removeChild(document.getElementById('registrationError'));
                } else if (document.getElementById('existUsername')) {
                    modal.removeChild(document.getElementById('existUsername'));
                } else if (document.getElementById('wrongPassword')) {
                    modal.removeChild(document.getElementById('wrongPassword'));
                }
            }, false)
        }
        if (document.getElementById('succesfullRegistration')) {
            modal.removeChild(document.getElementById('succesfullRegistration'));
        };


        // Checking all inputs ->
        var result = userModel.validate(username, lastname, town, email);
        var uniqueUsername = userModel.validateUsername(username);
        var validatePassword = userModel.validatePassword(pass, repeatedPass);
        if ((result === true) && (uniqueUsername === false) && (validatePassword === true)) {
            userModel.addUser(new User(username, lastname, town, email, pass));
            inputs[0].value = '';
            for (var index = 0; index < inputs.length; index++) {
                inputs[index].value = '';
            }
            var succesfullRegistration = document.createElement('p');
            succesfullRegistration.id = 'registrationError';
            succesfullRegistration.textContent = 'Поздравления, Вие успешно се регистрирахте в сайта..';
            modal.appendChild(succesfullRegistration);
        }
        // If there are empty fields ->
        else if (!result) {
            if (document.getElementById('registrationError') !== modal.lastChild) {
                var registrationError = document.createElement('p');
                registrationError.id = 'registrationError';
                registrationError.textContent = 'Моля въведете всички полета и опитайте отново.';
                modal.appendChild(registrationError);
            }
        }
        // If username is not unique -> 
        else if (uniqueUsername) {
            if (document.getElementById('existUsername') !== modal.lastChild) {
                var existUsername = document.createElement('p');
                existUsername.id = 'existUsername';
                existUsername.textContent = 'Това потребителско име вече съществува. Моля опитайте отново.';
                modal.appendChild(existUsername);
            }
        }
        // If passwords are wrong -> 
        else if (!validatePassword) {
            if (document.getElementById('wrongPassword') !== modal.lastChild) {
                var wrongPassword = document.createElement('p');
                wrongPassword.id = 'wrongPassword';
                wrongPassword.textContent = 'Паролата Ви трябва да съдържа повече от 5 символа. Въведените пароли трябва да бъдат еднакви.';
                modal.appendChild(wrongPassword);
            }
        }
        event.preventDefault();
    }, false);

    // Closing form - button
    document.getElementById('close-popup').addEventListener('click', function (event) {
        document.getElementById('login-register-popup').style.display = 'none';
        document.getElementById("login-background").style.display = "none";
        event.preventDefault();
    }, false);
    // End of popup login registration form


})();