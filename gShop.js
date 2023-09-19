const body = document.getElementById('body')
const header = document.createElement('header')
header.classList.add('header')
header.innerHTML = `<div>
<h1> <span class="icon"><i class="fa-solid fa-gift" style="color: #e06ca4;"></i></span><span
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

