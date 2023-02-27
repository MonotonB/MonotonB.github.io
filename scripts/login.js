function checkUsernamePassword() {
    var isLogin = false;
    var usernameList = ['TestUser1', 'TestUser2'];
    var passwordList = ["qwe123", "rty456"];
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    for (var i = 0; i < passwordList.length; i++) {
        if (username == usernameList[i] && password == passwordList[i]) {
            window.location = "../index.html";
            alert('Welcome back, ' + username + '!');
            isLogin = true;
        }
        else if (!isLogin) {
            window.location = "invalid-login.html";
        }
    }
}