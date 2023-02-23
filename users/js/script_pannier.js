fetch("product.json").then(function(response){
    return response.json();
});

fetch("product.json").then(function(data){
    localStorage.setItem("product", JSON.stringify(data));

    if(!localStorage.getItem("card")){
        localStorage.setItem("card", "[]");
    }


});


let products = JSON.parse(localStorage.getItem("product"));
let card = JSON.parse(localStorage.getItem("card"));


function addItemToCart(productId){

    let product = products.find(function(product){
        return product.id == productId;
    });


    if(card.length == 0){
        card.push(product)
    }else{
        let res = card.find(element => element.id == productId);
        if(res === undefined)
        {
            card.push(product);
        }

    }

    localStorage.setItem("card", JSON.stringify(card));
}

/*addItemToCart(1);
addItemToCart(2);
addItemToCart(3);*/


function removeItemFromCart(productId){
    let temp =card.filter(item => item.id != productId);
    localStorage.setItem("card", JSON.stringify(temp));
}

removeItemFromCart(3);



function updateQuantity(productId, quantity){
    for(let product of card){
        if(product.id == productId){
            product.quantity = quantity;
        }
    }
    localStorage.setItem("card", JSON.stringify(card));
}


updateQuantity(2,8);


function geTotal(){
    let temp = card.map(function(item){
        return parseFloat(item.price);
    });

    let sum = temp.reduce(function(prev, next){
        return prev + next;  
    }, 0);

    console.log(sum);
}
    getTotal(); 