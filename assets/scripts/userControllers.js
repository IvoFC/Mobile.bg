
(function(){
    var homeLoginButton = document.getElementById("login-button");
    homeLoginButton.addEventListener('click', function(event){
        document.getElementById('login-register-popup').style.display = 'block';
        document.getElementById("login-form").style.display = "block";
        event.preventDefault();
    }, false);

    var homeRegisterButton = document.getElementById('register-button');
    homeRegisterButton.addEventListener('click', function(){
        document.getElementById('login-register-popup').style.display = 'block';
        document.getElementById("register-form").style.display = "block";
    }, false);

// Popup login/registration form -->
    var popupLoginButton = document.getElementById("showLoginForm");
    popupLoginButton.addEventListener('click', function(){
        document.getElementById("login-form").style.display = "block";
        document.getElementById("register-form").style.display = "none";
        console.log('login');
    }, false);
    
    var popupRegistrationButton = document.getElementById("showRegistrationForm");
    popupRegistrationButton.addEventListener('click', function(){
        console.log('Register');
        document.getElementById("register-form").style.display = "block";
        document.getElementById("login-form").style.display = "none";
    }, false);


    document.getElementById('username').addEventListener('focus', function(event){
        if(document.getElementById('error')) {
            event.target.parentElement.removeChild(document.getElementById('error'));
        }
    }, false)

    // Login button in popup ->
    var finalLoginButton = document.getElementById('submit-button');
    finalLoginButton.addEventListener('click', function(event){
        var inputs = document.querySelectorAll('#login-register-popup #login-form > input');
        var username = inputs[0].value.trim();
        var password = inputs[0].value.trim();
        if(userModel.loginUser(username, password)) {
            console.log('You login succesfully');
        } else {
            if(document.getElementById('error') !== inputs[0].parentElement.lastChild) {
                var error = document.createElement('p');
                error.id = 'error';
                error.textContent = 'Въвели сте неправилно потребителско име или парола.';
                inputs[0].parentElement.appendChild(error);
            }
        }
        event.preventDefault();
    }, false)

    // Register button in popup ->
    var finalRegisterButton = document.getElementById('submit-register-form');
    finalRegisterButton.addEventListener('click', function() {
        var inputs = document.querySelectorAll('#login-register-popup #register-form > input');
        var username = inputs[0].value.trim();
        var lastname = inputs[1].value.trim();
        var town = inputs[2].value.trim();
        var email = inputs[3].value.trim();
        var pass = inputs[4].value.trim();
        var repeatedPass = inputs[5].value.trim();
        for(var index = 0; index < inputs.length; index++) {
            inputs[index].addEventListener('focus', function(event){
                if(document.getElementById('registrationError')) {
                    	event.target.parentElement.removeChild(document.getElementById('registrationError'));
                }
            }, false)
        }
        var result = userModel.validate(username, lastname, town, email, pass, repeatedPass);
        if(result) {
            userModel.addUser(new User(username, lastname, town, email, pass));
            console.log('Register user    ' + username);
        }
        else {
            if(document.getElementById('registrationError') !== inputs[0].parentElement.lastChild) {
            var registrationError = document.createElement('p');
                registrationError.id = 'registrationError';
                registrationError.textContent = 'Моля въведете всички полета и опитайте отново.';
                inputs[0].parentElement.appendChild(registrationError);
                console.log('registration error');
            }
        }


        //     if(result == username) {
        //     if(document.getElementById('wrongUsername') !== inputs[0].parentElement.lastChild) {
        //         var wrongUsername = document.createElement('p');
        //         wrongUsername.id = 'wrongUsername';
        //         wrongUsername.textContent = 'Въвели сте неправилно потребителско име.';
        //         inputs[0].parentElement.appendChild(wrongUsername);
        //         console.log('wrongUsername');
        //         // inputs[0].style. = 'red';
        //     }
        // }
        // if(result == lastname) {
        //     if(document.getElementById('wrongLastname') !== inputs[0].parentElement.lastChild) {
        //         var wrongLastname = document.createElement('p');
        //         wrongLastname.id = 'wrongLastname';
        //         wrongLastname.textContent = 'Въвели сте неправилнa familiq.';
        //         inputs[0].parentElement.appendChild(wrongLastname);
        //         console.log('wrongLastname');
        //     }
        //     console.log('lastname');
        // }
        // if(result == town) {
        //     if(document.getElementById('wrongTown') !== inputs[0].parentElement.lastChild) {
        //         var wrongTown = document.createElement('p');
        //         wrongTown.id = 'wrongTown';
        //         wrongTown.textContent = 'Въвели сте неправилen grad';
        //         inputs[0].parentElement.appendChild(wrongTown);
        //         console.log('wrongTown');
        //     }
        //     console.log('town');
        // } 
        // if(result == email) {
        //     if(document.getElementById('wrongEmail') !== inputs[0].parentElement.lastChild) {
        //         var wrongEmail = document.createElement('p');
        //         wrongEmail.id = 'wrongEmail';
        //         wrongEmail.textContent = 'Въвели сте неправилen email';
        //         inputs[0].parentElement.appendChild(wrongEmail);
        //         console.log('wrongEmail');
        //     }
        //     console.log('town');
        // };
        // if(result == pass) {
        //     if(document.getElementById('wrongPass') !== inputs[0].parentElement.lastChild) {
        //         var wrongPass = document.createElement('p');
        //         wrongPass.id = 'wrongPass';
        //         wrongPass.textContent = 'Въвели сте неправилen parola';
        //         inputs[0].parentElement.appendChild(wrongPass);
        //         console.log('wrongPass');
        //     }
        //     console.log('town');
        // } ;
        // if(result == repeatedPass) {
        //     if(document.getElementById('wrongRepeatedPass') !== inputs[0].parentElement.lastChild) {
        //         var wrongRepeatedPass = document.createElement('p');
        //         wrongRepeatedPass.id = 'wrongRepeatedPass';
        //         wrongRepeatedPass.textContent = 'Въвели сте неправилen povtorna parola';
        //         inputs[0].parentElement.appendChild(wrongRepeatedPass);
        //         console.log('wrongRepeatedPass');
        //     }
        //     console.log('wrongRepeatedPass');
        // } ;
        

        event.preventDefault();
    }, false);

    // Closing form - button
    document.getElementById('close-popup').addEventListener('click', function(){
        document.getElementById('login-register-popup').style.display = 'none';
    }, false);
// End of popup login registration form
})();