
var searchInput = document.getElementById("search-input")

document.getElementById("search-btn").addEventListener("click", search)

function search(){

    var customer = ['customer'];
    
    if(searchInput.value  == customer){
        setTimeout(() => {
        window.open("/FRONTEND/Admin/customer/customer index.html", "_top")
        }, 500)
    }
}

var displayDate = document.getElementById("displayDate")

var date = new Date();

var day;
 switch (date.getDay()){
    case 0: 
    day = "Sunday"
    break;

    case 1: 
    day = "Monday"
    break;

    case 2: 
    day = "Tuesday"
    break;

    case 3: 
    day = "Wednesday"
    break;

    case 4: 
    day = "Thursday"
    break;

    case 5: 
    day = "Friday"
    break;

    case 6: 
    day = "Saturday"
    break;

    
 }



var month = date.getMonth();

switch (date.getMonth()){
    case 0: 
    month = "January"
    break;

    case 1: 
    month = "February"
    break;

    case 2: 
    month = "March"
    break;

    case 3: 
    month = "April"
    break;

    case 4: 
    month = "May"
    break;

    case 5: 
    month = "June"
    break;

    case 6: 
    month = "July"
    break;

    case 7: 
    month = "August"
    break;

    case 8: 
    month = "September"
    break;

    case 9: 
    month = "October"
    break;

    case 10: 
    month = "November"
    break;

    case 11: 
    month = "December"
    break;

}

var year = date.getFullYear();

var dayInteger = date.getDate()

var displayDateCode = day + " " + dayInteger +" "+ month + " " + year

displayDate.innerHTML = displayDateCode;

//search function

var searchInput = document.getElementById("search-input")
var searchBtn = document.getElementById("search-btn")
var salesNum = document.getElementById("sales")
searchInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      searchFunc();
    }

});

searchBtn.addEventListener("click", searchFunc)

function searchFunc(){
    
    if(searchInput.value == "sale"){

        salesNum.style.animationName = "scale"

        // salesNum.style.animationName = "sc"

        setTimeout (() =>{
        salesNum.style.animationName = ""       
        }, 2000)
        
    
    }

        
}
