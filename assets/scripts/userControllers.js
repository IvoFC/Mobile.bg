/**
 * Created by ivo on 10.03.17.
 */

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
// End of popup login registration form
})();