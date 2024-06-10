
var logoutBtn = document.getElementById("logout")
logoutBtn.addEventListener("click", logoutFunc)

function logoutFunc(){

    localStorage.removeItem('AdminDash')
    window.open('/login.html', '_top')

}


