/**
 * Created by ivo on 10.03.17.
 */

(function(){
    var homeLoginButton = document.getElementById("login-button");
    homeLoginButton.addEventListener('click', function(event){
        document.getElementById('login-register-popup').style.display = 'block';
        event.preventDefault();
    }, false)
})();