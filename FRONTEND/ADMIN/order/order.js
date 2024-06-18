var orderProcessBtn = document.getElementById('orderProcessBtn')


fetch("/DATABASE/order.json")
  .then(res => {
    // console.log(res)
    return res.json();
  })

  .then((objectData) => {


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
      viewBtn.addEventListener("click", openViewOrder)

      viewBtn.name = objectData[i].uniqueNumber

      // viewBtn.onclick = viewOrderBackground()

      mainRow.appendChild(cell1)
      mainRow.appendChild(cell2)
      mainRow.appendChild(cell3)
      mainRow.appendChild(cell4)
      // mainRow.appendChild(cell5)
      mainRow.appendChild(cell6)

      cell1.textContent = objectData[i].uniqueNumber
      cell2.textContent = objectData[i].email
      cell3.textContent = objectData[i].productName
      cell4.textContent = objectData[i].status
      // cell5.textContent = objectData[i].address
      viewBtn.onclick = `openViewOrder(${i})`

      cell6.appendChild(viewBtn)

      var tableBody = document.getElementById("table-body")
      tableBody.appendChild(mainRow);
    }

  })

  .catch(error => console.log('error'));

function openViewOrder(inde) {

  inde = (this.name) 
  console.log(inde)

  var userName = document.getElementById("userName")
  var email = document.getElementById("email")
  var productName = document.getElementById("product-name")
  var productQuantity = document.getElementById("product-quantity")
  var userAddress = document.getElementById("userAddress")
  var phone = document.getElementById("PhoneNumber")
  var productImgSrc = document.getElementById("productImgSrc")
  var status = document.getElementById("status")
  var productSerialNumber = document.getElementById("ProductSerialNumber")

  fetch("/DATABASE/order.json")
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
        productName.innerText = objectData[i].productName
        productQuantity.innerText = objectData[i].quantity
        userAddress.innerText = objectData[i].address
        phone.innerText = objectData[i].phone
        productSerialNumber.innerText = objectData[i].productSerial
        productName.innerText = objectData[i].productName
        productImgSrc.setAttribute("src", objectData[i].productImageSrc)
        status.innerText = objectData[i].status
        orderProcessBtn.innerText = objectData[i].status
    
        if(objectData[i].status == "Processing"){
          orderProcessBtn.style.zIndex = "-1"
          orderProcessBtn.style.cursor = "none"
          orderProcessBtn.innerHTML = "Processing"
          orderProcessBtn.style.boxShadow = "0px 0px 0px 0px "
          orderProcessBtn.style.opacity = 0.8
        }
    
        else{
          orderProcessBtn.style.zIndex = "0"
          orderProcessBtn.style.cursor = "pointer"
          orderProcessBtn.style.boxShadow = "0px 4px 0px 0px rgba(0, 0, 0, 0.2)"
          orderProcessBtn.style.opacity = 1
        }
    

        // break;
      }
    } 


   
  })
  viewOrderBackground.style.display = "flex"

  
}

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



orderProcessBtn.addEventListener("click", orderProcessing)

function orderProcessing(){
  orderProcessBtn.innerText = 'Processing'
}