// header create and append in body
const body = document.getElementById('body')
const header = document.createElement('header')
header.classList.add('header')
header.innerHTML = `<div class="header-div">
<div>
    <h1> <span class="logo1">Gifting</span><span class="logo2">Gallery</span></h1>
</div>
<div>
    <ul>
       <li class="home">Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Product</li>
    </ul>
</div>
<div>
    <ul class="icons">
      <li><i class="fa-solid fa-user" style="color: #e06ca4;"></i></li>
      <li> <i class="fas fa-search" style="color: #e06ca4;"></i> </li>
    </ul>
</div>
</div>
`
body.appendChild(header)

// create main container then append in body after that create banner section and append in main container

const main = document.createElement('main')
main.classList.add('main-container')
const section = document.createElement('section')
section.classList.add('banner')
section.innerHTML = `

<div class="first-banner-des">
    <h3>Welcome to<i><span class="banner-name icon">Gifting Gallery <i class="fa-solid fa-gift" style="color: #e06ca4;"></i>!</span> </i></h3>
    <p class="banner-des">Our carefully curated collection of gifts is designed to delight and inspire, offering a diverse range of options for every taste and budget. </p>
    <h4 class="offer"> Spacial offer <span class="sale"> Sale</span> Up to 60%</h4>
    <button class="shop-btn">Shop Now</button>
    <button class="read-btn">View Story</button>
</div>
<div class="banner-img">
    <img src="./Images/b-removebg-preview.png" alt="Image">
</div>
`
body.appendChild(main)
main.appendChild(section)



const products = [
    {
        id: 1,
        img: '/Images/teddy2.png',
        name: 'Teddy Bear',
        price: '700 tk',
        rating: 3
    },
    {
        id: 2,
        img: '/Images/bird.png',
        name: 'Show Pice',
        price: '500 tk',
        rating: 4
    },
    {
        id: 3,
        img: '/Images/cbox_-removebg-preview.png',
        name: 'Chocolate Box',
        price: '350 tk',
        rating: 3
    },
    {
        id: 4,
        img: '/Images/mother-removebg-preview.png',
        name: 'Flower Bouquet',
        price: '400 tk',
        rating: 4
    },
    {
        id: 5,
        img: '/Images/ll_-removebg-preview.png',
        name: 'Lamp',
        price: '450 tk',
        rating: 2
    },
    {
        id: 6,
        img: '/Images/photof-removebg-preview.png',
        name: 'Photo Frame',
        price: '800 tk',
        rating: 5
    },
]

   let  starIcon = '<i class="fa-solid fa-star"></i>';
   let getRating =(rating)=>{
    let icon ='';
    for(let i=0;i<rating; i++){
      icon = icon+starIcon
    }
    return icon;
   }

// Create a card section
const newSection = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = `Latest Product`
h1.classList.add('product-heading')
newSection.appendChild(h1)
const div = document.createElement('div')
div.classList.add('cardWrap')
newSection.appendChild(div)
products.forEach(product => {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML += `
            <img src="${product.img}" alt="image">
        <div class="card-content">
            <h3 class="card-title">${product.name}</h3>
            <p class="rating">${getRating(product?.rating)}</p>
            <h5 class="price">${product.price}</h5>
            <button class="card-btn">Buy Now</button>
        </div>
        
       `
    const btn = card.querySelector('.card-btn')
    btn.addEventListener('click',()=>{
       const h1 = document.querySelector('.product-heading')
       h1.innerText = product.name
    })


    div.appendChild(card)
});
main.appendChild(newSection)

