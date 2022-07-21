//Slideshow.
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Change Amount of Products.
let amount = 0;
let amountSpan = document.querySelector(".amount-of-products");

function IncreaseAmountOfProducts(value) {
  amountSpan.textContent = amount += value;
  return value;
}

function DecreaseAmountOfProducts(value) {
  let amountSpan = document.querySelector(".amount-of-products");
  if (amount > 0) {
    amountSpan.textContent = amount -= value;
  }

  return value;
}

//Add to cart.
let textOfProductsInCart = document.createElement("p");
let productsInCart = 0;

function AddToCart() {
  let cart = document.querySelector(".cart-container");
  productsInCart += amount;
  textOfProductsInCart.innerHTML = productsInCart;
  textOfProductsInCart.setAttribute("class", "quantity-in-cart");
  amountSpan.textContent = 0;
  amount = 0;
  cart.appendChild(textOfProductsInCart);
}
