function User(firstName, lastName, town, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.town = town;
    this.email = email;
    this.password = password;
}

var userModel = (function(){
     var users = [];

    return {
        usersss: users,
        
        addUser: function(user) {
            if(user instanceof User) {
                users.push(user)
                console.log(user);
            }
        },

        loginUser: function(username, password) {
             return users.some(function(u) {
                 return (u.firstName === username || u.email === username) && u.password === password;
             });
            // Returns true or false
        },

        validate: function(username, lastname, town, email, password, repeatedPassword) {
            // Validate registration form -->
            if(users.indexOf(username) !== -1 || username == '') {
                return username;
            } else if(lastname === '') {
                return lastname;
            } else if(town === '') {
                return town;
            } else if(email === '') {
                return email;
            } else if(password.length < 3) {
                return password;
            } else if(password != repeatedPassword) {
                return repeatedPassword;
            }  else {
                return true;
            }
        }
}
})();