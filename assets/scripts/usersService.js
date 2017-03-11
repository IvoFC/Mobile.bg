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
        addUser: function(user) {
            if(user instanceof User) {
                users.push(user)
            }
        },

        loginUser: function(username, password) {
             return users.some(function(u) {
                 return u.username === username && u.password === password;
             });
            // Returns true or false
        },

        validate: function(username, password, repeatedPassword) {
            if(users.indexOf(username) !== -1) {
                return username;
            } else if(password.length < 3) {
                return password;
            } else if(password != repeatedPassword) {
                return repeatedPassword;
            } else {
                return true;
            }
        }
}
})();