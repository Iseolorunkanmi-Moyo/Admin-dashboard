if(!localStorage.hasOwnProperty('AdminDash')){
    console.log("Login required")
setTimeout(() => {
    window.open("/login.html", "_top")
}, 500);
    
}

else{
    var details = localStorage.getItem('AdminDash')
    // console.log(details)
    var Importedemail =  JSON.parse(details)
    console.log(Importedemail)
    console.log(Importedemail.email)
    document.getElementById("name").innerHTML = Importedemail.name
}
