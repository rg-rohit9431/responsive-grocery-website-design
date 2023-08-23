let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menubar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    menubar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menubar.classList.remove('active');
}

let menubar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    menubar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    menubar.classList.remove('active');
}
var i = 1;
function submit() {
    var emailname = document.getElementById("val").value;
    if (!emailname.includes('@')) {
        alert("enter correct email");
    }
    else {
        console.log("Email " + i + ": " + emailname);
        i++;
        alert("Submit successfully");
    }
}

function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-box').value;

    console.log('Search query:', searchInput);
    alert("written in console");
}