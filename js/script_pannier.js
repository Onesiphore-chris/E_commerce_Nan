

function recuP(){

    let action = localStorage.getItem('myObjet');

    let ajout = document.getElementById('pannier');


       action = JSON.parse(action);
       let count = action?.length;
    

       localStorage.getItem(count);

       if(action  == null){
           ajout.textContent = 0;

       }else{
           count = action.length;
           ajout.textContent = count;  

        
    }

   
   } 

recuP()


 function buttonClick(){


const getCart = id => cart.indexOf(cart.find(done => done.id === id));

let shopping = document.querySelectorAll('.fa-shopping-cart');
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    shopping.forEach(element => element.addEventListener('click', (e) =>{
        e.preventDefault();
        let parent = element.closest(".box");
        let nomprod = parent.querySelector(".content h3");
        let nomImage = parent.querySelector(".image .main-img");
        let nomPrice = parent.querySelector(".content .price");

        const myObjet  ={
            nomprod : nomprod.textContent,
            nomImage: nomImage.src,
            nomPrice: nomPrice.textContent
        }

        console.log();
        
    let objet = localStorage.getItem('myObjet');
            if(objet == null){
                objet = [];
                objet.push(myObjet);
                window.localStorage.setItem("myObjet", JSON.stringify(objet));
                recuP();
            }else{
                objet = JSON.parse(objet);
                objet.push(myObjet);
                window.localStorage.setItem("myObjet", JSON.stringify(objet));
                recuP();

            }

    }));

}





function  recupIp(){
    let recuper = localStorage.getItem("myObjet")
    console.log(recuper)
}
recupIp()





















/*fetch("product.json").then(function(response){
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

/*
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
    getTotal(); */