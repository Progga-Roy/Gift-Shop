// header create and append in body
const body = document.getElementById('body')
const header = document.createElement('header')
header.classList.add('header')
header.innerHTML = `<div class="header-div">
<div>
    <h1><i class="fa-solid fa-gift" style="color: #db7093;"></i><span class="logo1">Gifting</span><span class="logo2">Gallery</span></h1>
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
    <h3>Welcome to<i><span class="banner-name icon">Gifting Gallery!</span> </i></h3>
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



// const products = [
//     {
//         id: 1,
//         img: '/Images/teddy2.png',
//         name: 'Teddy Bear',
//         price: '700 tk',
//         rating: 3
//     },
//     {
//         id: 2,
//         img: '/Images/bird.png',
//         name: 'Show Pice',
//         price: '500 tk',
//         rating: 4
//     },
//     {
//         id: 3,
//         img: '/Images/cbox_-removebg-preview.png',
//         name: 'Chocolate Box',
//         price: '350 tk',
//         rating: 3
//     },
//     {
//         id: 4,
//         img: '/Images/mother-removebg-preview.png',
//         name: 'Flower Bouquet',
//         price: '400 tk',
//         rating: 4
//     },
//     {
//         id: 5,
//         img: '/Images/ll_-removebg-preview.png',
//         name: 'Lamp',
//         price: '450 tk',
//         rating: 2
//     },
//     {
//         id: 6,
//         img: '/Images/photof-removebg-preview.png',
//         name: 'Photo Frame',
//         price: '800 tk',
//         rating: 5
//     },
// ]

// let starIcon = '<i class="fa-solid fa-star"></i>';
// let getRating = (rating) => {
//     let icon = '';
//     for (let i = 0; i < rating; i++) {
//         icon = icon + starIcon
//     }
//     return icon;
// }

// // Create a card section
// const newSection = document.createElement('section')
// const h1 = document.createElement('h1')
// h1.innerText = `Latest Product`
// h1.classList.add('product-heading')
// newSection.appendChild(h1)
// const hr = document.createElement('hr')
// hr.classList.add('horizontalLine')
// newSection.appendChild(hr)
// const div = document.createElement('div')
// div.classList.add('cardWrap')
// newSection.appendChild(div)
// products.forEach(product => {
//     const card = document.createElement('div')
//     card.classList.add('card')
//     card.innerHTML += `
//             <img src="${product.img}" alt="image">
//         <div class="card-content">
//             <h3 class="card-title">${product.name}</h3>
//             <p class="rating">${getRating(product?.rating)}</p>
//             <h5 class="price">${product.price}</h5>
//             <button class="card-btn">Buy Now</button>
//         </div>
        
//        `

//     const btn = card.querySelector('.card-btn')
//     btn.addEventListener('click', () => {
//         const h1 = document.querySelector('.product-heading')
//         h1.innerText = product.name
//     })


//     div.appendChild(card)
// });
// main.appendChild(newSection)


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

let starIcon = '<i class="fa-solid fa-star"></i>';
let getRating = (rating) => {
    let icon = '';
    for (let i = 0; i < rating; i++) {
        icon = icon + starIcon
    }
    return icon;
}

// Create a card section
const newSection = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = `Latest Product`
h1.classList.add('product-heading')
newSection.appendChild(h1)
const hr = document.createElement('hr')
hr.classList.add('horizontalLine')
newSection.appendChild(hr)
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
       div.appendChild(card)
});
main.appendChild(newSection)


// Create a Bootstrap-style modal
const modal = document.createElement('div');
modal.classList.add('modal-container');
modal.innerHTML = `
    <div class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <span class="close">&times;</span>
                <h3>Product Details</h3>
            </div>
            <div class="modal-body">
               
            </div>
        </div>
    </div>
`;
document.body.appendChild(modal);


const buyButtons = document.querySelectorAll('.card-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('.card-title').innerText;
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = `
            <h3>${productName}</h3>
           
        `;
        modal.style.display = 'block';
    });
});


const closeModal = document.querySelector('.modal .close');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});




// Frequently Asking Question Section

const accordionsObject = [
    {
        id: 1,
        question: "What types of gifts do you offer?",
        answer: "We offer a wide range of gifts including personalized items, gourmet gift baskets, flowers, and unique handmade crafts.",
        icon: '<i class="fas fa-angle-down"></i>'
    },
    {
        id: 2,
        question: "Can I customize a gift?",
        answer: "Yes, many of our items can be customized to add a personal touch. Look for the 'Customize' option on the product page.",
        icon: '<i class="fas fa-angle-down"></i>'
    },

    {
        id: 3,
        question: "What payment methods do you accept?",
        answer: "We accept major credit cards including Visa, MasterCard, American Express, and Discover. We also accept PayPal.",
        icon: '<i class="fas fa-angle-down"></i>'
    },
    {
        id: 4,
        question: "Can I return or exchange a gift?",
        answer: "Yes, we have a 30-day return policy. Please visit our 'Returns & Exchanges' page for more information.",
        icon: '<i class="fas fa-angle-down"></i>'
    },

];
const fqaSection = document.createElement('section')
fqaSection.classList.add('FQA-container')
const heading = document.createElement('h1')
heading.classList.add('heading')
heading.innerText = 'Frequently Asking Question'
fqaSection.appendChild(heading)
const hr2 = document.createElement('hr')
hr2.classList.add('horizontal-line')
fqaSection.appendChild(hr2)
const accordionContainer = document.createElement('div')
accordionContainer.classList.add('accordion-container')

fqaSection.appendChild(accordionContainer)

accordionsObject.forEach(accordion => {
    const accordions = document.createElement('div')
    accordions.classList.add('accordion')
  
    accordions.innerHTML += `
    <div class="accordion-heading ">
    <h3>${accordion.question}</h3>
    <p>${accordion.icon} </p>
   </div>
   <p class="answer">${accordion.answer}</p>
    `
    fqaSection.appendChild(accordions)

    accordions.addEventListener('click', () => {
        const allAccordions = document.querySelectorAll('.accordion');
        allAccordions.forEach(acco => {
            acco.classList.remove('active');
        });
        accordions.classList.toggle('active')
    })

});

main.appendChild(fqaSection)




// footer 
// const footer = document.getElementById('footer')
const footerContainer = document.createElement('section')
footerContainer.classList.add('footer-container')
footerContainer.innerHTML = ` 
    <div class="footer-links">
         <h3>Useful Links</h3>
         <div class="links">
            <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a> About</li>
            <li><a href="#"><i class="fa-solid fa-address-book"></i> </a>Contact</li>
            <li><a href="#"><i class="fa-brands fa-product-hunt"></i> </a>Product</li>
            <li><a href="#"><i class="fa-brands fa-shopify"></i> </a>Shop</li>
         </div>
     </div>

    <div class="footer-address">
            <h3>Newsletter</h3>
          <div class="input">
                <input class="input-field" type="text" placeholder="Your email address">
                <button class="send">Send</button>     
          </div>
            <div class="subscribe"><button class=" subscribe-btn">Subscribe Now</button> </div>
    </div>

        <div class="footer-social-link">
            <h3>Contact</h3>
           <div class="address">
            123 Gift Street,Joyville,
                <br>
            Happiness County,
            Giftland.
           </div>
           <div class="social-links">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
           </div>
        </div>
`
body.appendChild(footerContainer)