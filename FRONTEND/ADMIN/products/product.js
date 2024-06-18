fetch("/DATABASE/product.json")
    .then(res => {
        // console.log(res)
        return res.json();
    })

    .then((objectData) => {
        // console.log(objectData)

        var display = document.createElement('div')

        display = "";
        objectData.map((values) => {
            var i = 0;
            display += `
                    <div class="product-card">

                        <div class="product-image-div"><img src="${values.imageSrc}" class="product-image"></div>
                        <div class="product-name">${values.name}</div>
                        <div class="product-price">${values.price}</div>
                        <div class="product-stock">${values.stock}</div>
                        <button id= ${i} class="orderBtn">View</button>

                    </div>
                    `
        })

        console.log(display)

document.getElementById("display").innerHTML = display

    })
