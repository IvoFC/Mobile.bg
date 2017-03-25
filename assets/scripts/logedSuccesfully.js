
function changeLoggedStatus() {

    function getById(id) {
        return document.getElementById(id);
    }



     if(window.localStorage.getItem("isLogged") === "true"){
        // Get name of current user.
        var username = JSON.parse(window.localStorage.getItem("currentUser"));
        username = username.firstName;
        
        // Hiding login-register popup and buttons.
        getById('login-register-popup').style.display = 'none';
        getById('left-register-link').style.display = 'none';
        getById('login-button').style.display = 'none';
        document.getElementById("login-background").style.display = "none";

        var welcomeUser = document.createElement('p');
        welcomeUser.innerHTML = "Здравейте, " + "<span>" + username + "</span>";
        welcomeUser.id = "welcome-message";        
        getById('logged-user').appendChild(welcomeUser);

        var exit = document.createElement('a');
        exit.innerHTML = "Изход";
        exit.id = "exit-from-accaunt";
        exit.addEventListener("click", function(event) {
            console.log("klikna me");
            window.localStorage["currentUser"] = "";
            console.log(window.localStorage["currentUser"]);            
            window.localStorage["isLogged"] = false;
            console.log( window.localStorage["isLogged"]);            
            changeLoggedStatus();
        }, false)
        getById('logged-user').appendChild(exit);

     }else{
        // Enable login and registration buttons again
        getById("left-register-link").style.display = "block";
        getById("login-button").style.display = "block";

        // Delete welcome messages.
        getById("logged-user").innerHTML = "";
        
     }
}