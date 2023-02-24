
let done = [
    {
        id: 1,
        name: 'Smartphones',
        rade: '13.33$',
        addJ: '123$',
        photo:'images/telephone-2.png',
        photoB:'images/telephone.png'
    },

    {
        id: 2,
        name: 'Ordinateur',
        rade: '14$',
        addJ: '123$',
        photo:'images/ordi.png',
        photoB:'images/ordinateur.png'
    },

    {
        id: 3,
        name: 'Bracelets',
        rade: '13.45$',
       addJ: '123$',
        photo:'images/bracelet.png',
        photoB:'images/bracelet-2.png'
    },

    {
        id: 4,
        name: 'Costumes',
        rade: '1314$',
       addJ: '123$',
        photo:'images/costume-2.webp',
        photoB:'images/costume.webp'
    },
    {
        id: 5,
        name: 'sac',
        rade: '1314$',
       addJ: '123$',
        photo:'images/sac.png',
        photoB:'images/sac-2.png'
    },
    {
        id: 6,
        name: 'maillot',
        rade: '134$',
       addJ: '123$',
        photo:'images/maillot.webp',
        photoB:'images/maillot-2.png'
    },


    {
        id: 7,
        name: 'Sac à Dos ',
        rade: '10$',
       addJ: '123$',
        photo:'images/chaussure-2.png',
        photoB:'images/chaussure.png'
    },

    {
        id: 8,
        name: 'Chaussures de femme',
        rade: '234$',
        addJ: '123$',
        photo:'images/chaussure-femme-2.webp',
        photoB:'images/chaussure-2.jpg'
    },

    {
        id: 9,
        name: 'Tablette',
        rade: '16$',
       addJ: '123$',
        photo:'images/tablette.png',
        photoB:'images/tablette-2.png'
    },

    {
        id: 10,
        name: 'Batterie',
        rade: '154$',
       addJ: '123$',
        photo:'images/batterie.png',
        photoB:'images/batterie-2.png'
    },

    {
        id: 11,
        name: 'Pneu',
        rade: '124$',
       addJ: '123$',
        photo:'images/sac.png',
        photoB:'images/sac-2.png"'
    },

    {
        id: 12,
        name: 'Piano ',
        rade: '34$',
       addJ: '123$',
        photo:'images/piano-2.png',
        photoB:'images/piano.png'
    },

    {
        id: 13,
        name: 'batterie',
        rade: '14$',
       addJ: '123$',
        photo:'images/batterie-2.png',
        photoB:'images/batterie.png'
    },

    {
        id: 14,
        name: 'chargeur',
        rade: '13$',
        addJ: '123$',
        photo:'images/chargeur-2.png',
        photoB:'images/chargeur3.png'
    },

    {
        id: 15,
        name: ' Malettes X-box',
        rade: '13$',
       addJ: '123$',
        photo:'images/malette-2.png',
        photoB:'images/mallette.jpg'
    },
    {
        id: 3,
        name: 'Sony ps3 ',
        rade: '13$',
         addJ: '123$',
        photo:'images/sony.png',
        photoB:'images/sony-2.webp'
    },
    
   
];

    let recup = document.getElementById('recup');

    for(let i = 0; i < done.length; i++){
   
    const element = done[i];
    
    // console.log(done[i]);
    let affiche = ` <div class="box">

    <div class="image">
    <img src="${done[i].photo}" class="main-img" alt="${done[i].name}">
    <img src="${done[i].photoB}" class="hover-img" alt="${done[i].name}">
    </div>
    <div class="icons">
    <a href="#" class="fas fa-shopping-cart" onclick="addToCart" id="shopping">${done[i].id}</a>
    <a href="#" class="fas fa-search-plus"></a>
    <a href="#" class="fas fa-heart"></a>
    <a href="#" class="fas fa-share"></a>
    </div>
    <div class="content">
    <h3>${done[i].name}</h3>
    <div class="price">
    ${done[i].rade}<button onclick ="" class"btnP">${done[i].addJ}</button>
    </div>
    <div class="stars">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half-alt"></i>
    </div>

</div>`;






let box = document.querySelector('.box-container')
recup.innerHTML += affiche;

}





const getCart = id => cart.indexOf(cart.find(done => done.id === id));


let shopping = document.getElementById('shopping');
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
const popCart = () =>{
    console.log();
}

    
shopping.addEventListener('click', () =>{
    const addToCart = id =>{
        if(cart.length > 0){
             getIndex(id) > -1 ? cart[getIndex(id)].qty +=1  : cart.push({
                id,qty: 1
             });
        }
        else{
            cart.push({
                id,qty: 1
             });
        }
       localStorage.getItem('cart' , JSON.stringify(cart));
        
    }
})



// addP.forEach(clic => clic.addEventListener("click", (e) =>{
//         console.log(clic);

// }));
// addP.forEach(element => element.addEventListener('click',(e)=>{
//     e.preventDefault();
//         console.log(e) 
// })); 
