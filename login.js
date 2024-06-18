

if(localStorage.hasOwnProperty('AdminDash')){
    window.open('/FRONTEND/ADMIN/main/AdminDash.html', '_top')
}


var email = document.getElementById("email")
var password = document.getElementById("password")
var submit = document.getElementById("submit")

email.addEventListener
    ("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            Login()
        }
    })

password.addEventListener
    ("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            Login()
        }
    })


submit.addEventListener
("click", ()=>{
    Login()
})

function Login() {
    fetch("/DATABASE/data.json")
        .then(res => {
            // console.log(res)
            return res.json();
        })

        .then((objectData) => {
          

             if (document.getElementById("email").value.length == 0) {

                console.log("Fill in your Email")
                loginWarning.innerHTML = "Fill in your Email"
                loginWarning.style.display = "flex"
                setTimeout(() => {
                    loginWarning.style.display = "none"
                }, 2000);

            }

            // else   if (document.getElementById("email").value !== "email") {

            //     console.log("Invalid Email")
            //     loginWarning.innerHTML = "Invalid Email"
            //     loginWarning.style.display = "flex"
            //     setTimeout(() => {
            //         loginWarning.style.display = "none"
            //     }, 2000);

            // }

            else if (password.value == 0) {
                console.log("Fill in your password")
                loginWarning.innerHTML = "Fill in your password"
                loginWarning.style.display = "flex"
                setTimeout(() => {
                    loginWarning.style.display = "none"
                }, 2000);
            }

            else if (document.getElementById("email").value.length > 0 && document.getElementById("password").value.length > 0) {
                var index = 0;
                var array = [];
                var indexNumber = [];
                var tempEmailStorage = "Not found";
                var tempPasswordStorage = "Not found";
                var adminUserImgSrc = "Not found"


                for (let i = 0; i < objectData.length; i++) {
                    const element = objectData[i].matric;
                    if (objectData[i].email === document.getElementById("email").value) {
                        array.push("yes")
                        console.log(i)
                        // console.log(indexNumber)

                        tempEmailStorage = objectData[i].email
                        tempPasswordStorage = objectData[i].password
                        tempNameStorage = objectData[i].name
                        adminUserImgSrc = objectData[i].adminUserImgSrc
                        userImageSrc = objectData[i].imageSrc
                    }

                }

                if (array.includes("yes")) {

                    if (password.value == 0) {
                        console.log("Input your password")
                        loginWarning.innerHTML = "Input your password"
                        loginWarning.style.display = "flex"
                        setTimeout(() => {
                            loginWarning.style.display = "none"
                        }, 2000);
                    }

                    else if (tempPasswordStorage !== password.value) {
                        console.log("incorrect password")

                        loginWarning.innerHTML = "Incorrect password"
                        loginWarning.style.display = "flex"
                        setTimeout(() => {
                            loginWarning.style.display = "none"
                        }, 2000);
                    }

                    else if (tempPasswordStorage === password.value) {
                        console.log("Login successful")
                        // welcomeUserPicture.setAttribute("src", userImageSrc )

                        var setLocalStorage = {
                                                "email":email.value,
                                                "password":password.value,
                                                "name": tempNameStorage,
                                                "adminImage" : adminUserImgSrc
                                            }

                        localStorage.setItem('AdminDash', JSON.stringify(setLocalStorage))
                        window.open('/FRONTEND/ADMIN/main/AdminDash.html', '_top')

                        password.value = ""
                        email.value = ""

                    }

                }

                else if (tempEmailStorage == "Not found") {
                    console.log("User not found")

                    loginWarning.innerHTML = "User not found"
                    loginWarning.style.display = "flex"
                    setTimeout(() => {
                        loginWarning.style.display = "none"
                    }, 2000);
                }

            }

        })

}


// Login();