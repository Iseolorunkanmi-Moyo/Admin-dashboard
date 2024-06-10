fetch("/DATABASE/data.json")
.then(res => {
    // console.log(res)
    return res.json();
})

.then( (objectData) => {

    // console.log(objectData[0].name);
    let tableData = "";
    objectData.map((values)=>{
        var i = 0;
        tableData += `
            <tr>
            <td>${objectData.indexOf(values)  + 1}</td>
            <td>${values.email}</td>
            <td>${values.name}</td>
            <td>${values.password}</td>
            <td>${values.phone}</td>
            </tr>
        `

        console.log(objectData.findIndex)

    })
   
    var table = document.getElementById("table-body").innerHTML = tableData;
    
}
  
)

.catch(error => console.log('error'));

var cells = document.querySelector("td")

cells.addEventListener("dblclick", function(e){
    // console.log(e.innerHTML)
    alert("cell")
})
var tableBdy = document.querySelector("tbody")

tableBdy
var searchBtn = document.getElementById("search-btn").addEventListener("click", search )


function search(e){

}

// document.getElementById("mode").addEventListener("click", function(e){
    
// })