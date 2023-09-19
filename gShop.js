// header create and append in body
const body = document.getElementById('body')
const header = document.createElement('header')
header.classList.add('header')
header.innerHTML = `<div>
<h1> <span
class="logo1">Gifting</span><span class="logo2">Gallery</span></h1>
</div>
<div>
<ul>
<li class="home">Home</li>
<li>About</li>
<li>Contact</li>
<li>Product</li>
<li>Login</li>
<li><i class="fa-solid fa-magnifying-glass"></i></li>
</ul>
</div>
`
body.appendChild(header)

// create main container then append in body after that create banner section and append in main container

const main = document.createElement('main')
main.classList.add('main-container')
const section = document.createElement('section')
section.classList.add('banner')
section.innerHTML=`

<div class="first-banner-des">
    <h3>Welcome to <i> <span class="banner-name icon" >Gifting Gallery <i class="fa-solid fa-gift" style="color: #e06ca4;"></i>!</span> </i></h3>
    <p class="banner-des">We believe that every occasion is 
    an opportunity to spread joy and create cherished memories.Our carefully curated collection of gifts is designed to delight and inspire, offering a diverse range of options for every taste and budget. </p>
    <h4 class="offer"> Spacial offer <span class="sale"> Sale</span> Up to 60%</h4>
    <button class="shop-btn">Shop Now</button>
</div>
<div class="banner-img">
    <img src="./Images/b-removebg-preview.png" alt="Image">
</div>
`
body.appendChild(main)
main.appendChild(section)


