function disp_alert() 
{ 
    var form = document.getElementById('myForm');
    var UserName = form.elements['username'].value,Password = form.elements['password'].value;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    alert("这位名为"+UserName+"的用户，您的密码是："+Password+"，猜猜接下来会发生什么呢？");
} 