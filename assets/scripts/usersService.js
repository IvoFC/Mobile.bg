function User(firstName, lastName, town, email, password, cars) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.town = town;
    this.email = email;
    this.password = password;
    this.cars = cars;
}

var userModel = (function () {
    var usersStorage = JSON.parse(window.localStorage.getItem('users'));
    var users = [];
    if (Array.isArray(usersStorage)) {
        for (var index = 0; index < usersStorage.length; index++) {
            var flag = true;
            for (var index1 = 0; index1 < users.length; index1++) {
                if (usersStorage[index].firstName == users[index1].firstName &&
                    usersStorage[index].lastName == users[index1].lastName &&
                    usersStorage[index].email == users[index1].email) {
                    flag = false;
                }
            }
            if (flag) {
                users.push(usersStorage[index]);
            }
        }
    }

    return {
        peoples: users,
        storageUsers: usersStorage,
        // Get some info for current user to display it later ->            
        // getUserInfo: function() {
        //     return users[users.length - 1].firstName;
        // },

        addUser: function (user) {
            if (user instanceof User) {
                users.push(user);
                window.localStorage.setItem('users', JSON.stringify(users));
            }
        },

        loginUser: function (username, password) {
            var currentUser = "";
            users.some(function (u) {
                if((u.firstName === username || u.email === username) && u.password === password) {                
                    currentUser = u;
                } 
            })
            if(currentUser != "") {
                return currentUser;
            } else return false;
            // Returns object or false
        },

        validate: function (username, lastname, town, email) {
            // Validate registration form -->
            return (username !== '' && lastname !== '' && town !== '' && email !== '');
        },
        validateUsername: function (username) {
            // Returns false if there isn username with that name ->
            return users.some(function (u) {
                return u.firstName === username;
            });
        },

        validatePassword: function (password, repeatedPassword) {
            return (password.length > 5 && password === repeatedPassword);
        }
        
        // getUser: function(username, password) {
            
        // }

               // getUser: function (username, password) {
        //     for (var index = 0; index < cars.length; index++) {
        //         if (JSON.stringify(car) === JSON.stringify(cars[index])) {
        //             cars.splice(index, 1);
        //             break;
        //         }
        //     }
        // }
    }
})();