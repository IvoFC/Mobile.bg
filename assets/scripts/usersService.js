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
            }
        },

        loginUser: function(username, password) {
             return users.some(function(u) {
                 return ((u.firstName === username || u.email === username) && u.password === password);
             });
            // Returns true or false
        },

        validate: function(username, lastname, town, email) {
            // Validate registration form -->
            return (username !== '' && lastname !== '' && town !== '' && email !== '');
        },
        validateUsername: function(username) {
            // Returns false if there isn username with that name ->
            return users.some(function(u) {
                 return u.firstName === username;
             });
        },

        validatePassword: function(password, repeatedPassword) {
            return (password.length > 5 && password === repeatedPassword);
        }
}
})();