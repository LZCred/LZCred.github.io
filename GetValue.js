function DispAlert() 
{ 
    window.location.href="https://LZCred.github.io/learning"
    var form = document.getElementById('myForm');
    var UserName = form.elements['username'].value,Password = form.elements['password'].value;
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    });
    alert("这位名为"+UserName+"的用户，您的密码是："+Password+"，相信你也知道后果了。");
} 