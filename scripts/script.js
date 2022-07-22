//Slideshow.
let slideIndex = 1;

const PlusSlides = (n) => {
  ShowSlides((slideIndex += n));
};

const CurrentSlide = (n) => {
  ShowSlides((slideIndex = n));
};

const ShowSlides = (n) => {
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
};

ShowSlides(slideIndex);

//Change Amount of Products.
let amount = 1;
let amountSpan = document.querySelector(".amount-of-products");

const IncreaseAmountOfProducts = (value) => {
  amountSpan.textContent = amount += value;
  return value;
};

const DecreaseAmountOfProducts = (value) => {
  let amountSpan = document.querySelector(".amount-of-products");
  if (amount > 1) {
    amountSpan.textContent = amount -= value;
  }

  return value;
};

//Add to cart.
let textOfProductsInCart = document.createElement("p");
let productsInCart = 0;

const AddToCart = () => {
  let cart = document.querySelector(".cart-container");
  productsInCart += amount;
  textOfProductsInCart.textContent = productsInCart;
  textOfProductsInCart.setAttribute("class", "quantity-in-cart");
  cart.appendChild(textOfProductsInCart);
  cartIsEmpty = false;
};

//Cart Info.
let cartIsEmpty = true;
let totalPrice;
const modalCartBody = document.querySelector(".modal-cart-body");
const divContainer = document.createElement("div");
const imageProduct = document.createElement("img");
const divInfos = document.createElement("div");
const productName = document.createElement("p");
const spanProductInfo = document.createElement("span");
const spanTotalPrice = document.createElement("span");
const buttonDelete = document.createElement("a");
const iconDelete = document.createElement("img");
const buttonCheckout = document.createElement("a");

const ListProductsInTheCart = () => {
  let textCart = document.querySelector(".text-cart-modal");
  modalCartBody.appendChild(textCart);

  if (cartIsEmpty) {
    textCart.textContent = "Your cart is empty.";
  } else {
    textCart.textContent = "";
    totalPrice = 125.0 * productsInCart;
    DefineHTMLElements();
    CreatingElements();
  }
};

const DeleteProductsInTheCart = () => {
  const quantityInTheCart = document.querySelector(".quantity-in-cart");

  quantityInTheCart.parentNode.removeChild(quantityInTheCart);
  buttonDelete.parentNode.removeChild(buttonDelete);
  divContainer.parentNode.removeChild(divContainer);
  imageProduct.parentNode.removeChild(imageProduct);
  divInfos.parentNode.removeChild(divInfos);
  productName.parentNode.removeChild(productName);
  spanProductInfo.parentNode.removeChild(spanProductInfo);
  spanTotalPrice.parentNode.removeChild(spanTotalPrice);
  buttonCheckout.parentNode.removeChild(buttonCheckout);

  cartIsEmpty = true;
  productsInCart = 0;
  amount = 1;
  amountSpan.textContent = amount;
  ListProductsInTheCart();
};

const DefineHTMLElements = () => {
  imageProduct.src = "../../assets/image-product-1.jpg";
  productName.textContent = "Autumn Limited Edition...";
  spanProductInfo.textContent = `$125.00 x ${productsInCart} / `;
  spanTotalPrice.textContent = totalPrice;
  iconDelete.src = "../../assets/icon-delete.svg";
  buttonCheckout.textContent = "Checkout";
  spanTotalPrice.setAttribute("class", "cart-total-price");
  buttonCheckout.setAttribute("class", "checkout-button");
  buttonCheckout.setAttribute("onclick", "Checkout()");
  buttonDelete.setAttribute("onclick", "DeleteProductsInTheCart()");
};

const CreatingElements = () => {
  buttonDelete.appendChild(iconDelete);
  modalCartBody.appendChild(divContainer);
  divContainer.appendChild(imageProduct);
  divContainer.appendChild(divInfos);
  divInfos.appendChild(productName);
  divInfos.appendChild(spanProductInfo);
  divContainer.appendChild(buttonDelete);
  spanProductInfo.appendChild(spanTotalPrice);
  modalCartBody.appendChild(buttonCheckout);
};

//Checkout.
const Checkout = () => {
  alert("Pedido realizado!");
  ModalCartControl();
  DeleteProductsInTheCart();
  ListProductsInTheCart();
};

//Scroll.
const DisableScroll = () => {
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
    (window.onscroll = function () {
      window.scrollTo(LeftScroll, TopScroll);
    });
};

const EnableScroll = () => {
  window.onscroll = function () {};
};

//Modal.
let modal = document.querySelector("#myModalCart");
let cartButton = document.querySelector(".cart-button");
let cartModalIsActive = false;

const ModalCartControl = () => {
  ListProductsInTheCart();

  if (!cartModalIsActive) {
    modal.style.display = "block";
    DisableScroll();
  } else {
    modal.style.display = "none";
    EnableScroll();
  }

  cartModalIsActive = !cartModalIsActive;
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cartModalIsActive = false;
    EnableScroll();
  }
};
