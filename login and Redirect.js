if(!localStorage.hasOwnProperty('AdminDash')){
    console.log("Login required")
    setTimeout(() => {
    window.open("/login.html", "_top")
    }, 500);
    
}



else{
    var details = localStorage.getItem('AdminDash')
    var Importedemail =  JSON.parse(details)

    document.getElementById("name").innerHTML = Importedemail.name
    // document.getElementById("profile-pic").setAttribute('src', Importedemail.adminImage)
}

var logoutBtn = document.getElementById("logout")
logoutBtn.addEventListener("click", logoutFunc)

function logoutFunc(){

    localStorage.removeItem('AdminDash')
    window.open('/login.html', '_top')

}


