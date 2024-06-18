function fetchData(){
fetch("/DATABASE/User Data/userData.json")
.then(res => {
    // console.log(res)
    return res.json();
})

.then( (objectData) => {

    document.getElementById("table-body").innerHTML = ""


    var mainRow = document.createElement('tr');
    var cell1 = document.createElement('td')
    var cell2 = document.createElement('td')
    var cell3 = document.createElement('td')
    var cell4 = document.createElement('td')
    var cell5 = document.createElement('td')
    var cell6 = document.createElement('td')
    var viewBtn = document.createElement('button')

    let tempStorage = 0;

    for (let i = 0; i < objectData.length; i++) {

      var mainRow = document.createElement('tr');
      var cell1 = document.createElement('td')
      var cell2 = document.createElement('td')
      var cell3 = document.createElement('td')
      var cell4 = document.createElement('td')
      var cell5 = document.createElement('td')
      var cell6 = document.createElement('td')
      var viewBtn = document.createElement('button')
      viewBtn.innerText = "View"
      viewBtn.addEventListener("click", openCustomer)

      viewBtn.name = objectData[i].uniqueNumber

      // viewBtn.onclick = viewOrderBackground()

      mainRow.appendChild(cell1)
      mainRow.appendChild(cell2)
      mainRow.appendChild(cell3)
      mainRow.appendChild(cell4)
    //   mainRow.appendChild(cell5)
      mainRow.appendChild(cell6)

      cell1.textContent = objectData[i].uniqueNumber
      cell2.textContent = objectData[i].email
      cell3.textContent = objectData[i].name
      cell4.textContent = objectData[i].pendingOrders
      // cell5.textContent = objectData[i].address
      viewBtn.onclick = `openCustomer(${i})`

      cell6.appendChild(viewBtn)
    
    var table =  document.getElementById("table-body").appendChild(mainRow)
    

    }

}
  
)

.catch(error => console.log('error'));

}

setInterval(fetchData, 2000)

fetchData()


function openCustomer(inde){
        
    inde = (this.name) 
  console.log(inde)

  var userName = document.getElementById("userName")
  var email = document.getElementById("email")
  var PendingOrders = document.getElementById("Pending-Orders")
  var productQuantity = document.getElementById("product-quantity")
  var userAddress = document.getElementById("userAddress")
  var phone = document.getElementById("PhoneNumber")
  var userImage = document.getElementById("userImage")
  var status = document.getElementById("status")
  var productSerialNumber = document.getElementById("ProductSerialNumber")

  fetch("/DATABASE/User Data/userData.json")
  .then(res => {
    // console.log(res)
    return res.json();
  })

  .then((objectData) => {

    const searchTerm = inde;

    for (let i = 0; i < objectData.length; i++) {
      if (objectData[i].uniqueNumber === searchTerm) {
        userName.innerText = objectData[i].name  
        email.innerText = objectData[i].email
        userAddress.innerText = objectData[i].address
        phone.innerText = objectData[i].phone
        PendingOrders.innerText = objectData[i].pendingOrders
        userImage.setAttribute("src", objectData[i].userImageSrc)

        // break;
      }
    } 

  })

//   setTimeout(() => {
  viewOrderBackground.style.display = "flex"    
//   }, 500);

}

var cells = document.querySelector("td")

var viewOrderBackground = document.getElementById('viewOrderBackground')

var viewOrderDiv = document.getElementById('viewOrderDiv')

viewOrderBackground.addEventListener("click", closeviewOrderBackground)

function closeviewOrderBackground(e) {

  if (e.target == viewOrderBackground) {

    viewOrderBackground.style.display = "none"

  }

}

function closeviewOrder() {
    viewOrderBackground.style.display = "none"
  }
  
var searchBtn = document.getElementById("search-btn").addEventListener("click", search )

function search(e){

}

// document.getElementById("mode").addEventListener("click", function(e){
    
// })