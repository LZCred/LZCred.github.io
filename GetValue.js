var UserName,Password;
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    UserName = document.getElementById('username').value;
    Password = document.getElementById('password').value;
});
var myVariable = "Hello, World!";
document.getElementById("myParagraph").innerHTML = myVariable;