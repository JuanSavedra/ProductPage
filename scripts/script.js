//Slideshow.
let slideIndex = 1;
ShowSlides(slideIndex);

function PlusSlides(n) {
  ShowSlides((slideIndex += n));
}

function CurrentSlide(n) {
  ShowSlides((slideIndex = n));
}

function ShowSlides(n) {
  let i;
  let slides = document.querySelectorAll(".mySlides");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//Change Amount of Products.
let amount = 1;
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
  cart.appendChild(textOfProductsInCart);
}

//Scroll
function DisableScroll() {
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft)(
    (window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    })
  );
}

function EnableScroll() {
  window.onscroll = function () {};
}

//Modal
let modal = document.querySelector("#myModalCart");
let cartButton = document.querySelector(".cart-button");
let cartModalIsActive = false;

function ModalCartControl() {
  if (!cartModalIsActive) {
    modal.style.display = "block";
    DisableScroll();
  } else {
    modal.style.display = "none";
    EnableScroll();
  }
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    EnableScroll();
  }
};
