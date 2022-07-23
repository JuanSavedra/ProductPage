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
  ListProductsInTheCart();
};

//Cart Modal Info.
const modalCartBody = document.querySelector(".modal-cart-body");
let cartIsEmpty = true;
let totalPrice = 0;
let isCreated = false;
let createdElements = [];

const ListProductsInTheCart = () => {
  let textCart = document.querySelector(".text-cart-modal");
  modalCartBody.appendChild(textCart);

  if (cartIsEmpty) {
    textCart.textContent = "Your cart is empty.";
  } else {
    textCart.textContent = "";
    totalPrice = 125.0 * productsInCart;

    if (!isCreated) {
      CreateCartProducts();
    } else {
      RefreshCart();
    }
  }
};

function CreateElements(type, content, src) {
  let element = document.createElement(type);
  element.textContent = content;

  if (type === "img") {
    element.src = src;
  }

  return element;
}

const DeleteProductsInTheCart = () => {
  const quantityInTheCart = document.querySelector(".quantity-in-cart");
  quantityInTheCart.parentNode.removeChild(quantityInTheCart);

  for (let i = 0; i < createdElements.length; i++) {
    createdElements[i].parentNode.removeChild(createdElements[i]);
  }

  cartIsEmpty = true;
  isCreated = false;
  productsInCart = 0;
  amount = 1;
  amountSpan.textContent = amount;
  createdElements = [];
  ListProductsInTheCart();
};

const CreateCartProducts = () => {
  createdElements.push(
    modalCartBody.appendChild(CreateElements("div", null, null))
  );

  createdElements.push(
    createdElements[0].appendChild(
      CreateElements("img", null, "../../assets/image-product-1.jpg")
    )
  );

  createdElements.push(
    createdElements[0].appendChild(CreateElements("div", null, null))
  );

  createdElements.push(
    createdElements[2].appendChild(
      CreateElements("p", "Autumn Limited Edition...", null)
    )
  );

  createdElements.push(
    createdElements[2].appendChild(
      CreateElements("span", `$125.00 x ${productsInCart} / `, null)
    )
  );

  createdElements.push(
    createdElements[4].appendChild(
      CreateElements(
        "span",
        `${new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totalPrice)}`,
        null
      )
    )
  );

  createdElements.push(
    createdElements[0].appendChild(CreateElements("a", null, null))
  );

  createdElements.push(
    createdElements[6].appendChild(
      CreateElements("img", null, "../../assets/icon-delete.svg")
    )
  );

  createdElements.push(
    modalCartBody.appendChild(CreateElements("a", "Checkout", null))
  );

  createdElements[5].setAttribute("class", "cart-total-price");
  createdElements[6].setAttribute("onclick", "DeleteProductsInTheCart()");
  createdElements[8].setAttribute("class", "checkout-button");
  createdElements[8].setAttribute("onclick", "Checkout()");
  isCreated = true;
};

const RefreshCart = () => {
  totalPrice = 125.0 * productsInCart;
  createdElements[5].textContent = `${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice)}`;
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
let rendered = false;

const ModalCartControl = () => {
  if (!cartModalIsActive) {
    modal.style.display = "block";
    DisableScroll();
  } else {
    modal.style.display = "none";
    EnableScroll();
  }

  cartModalIsActive = !cartModalIsActive;
};

//Sidebar.
const aside = document.querySelector("aside");

const OpenSidebar = () => {
  aside.style.display = "block";
  DisableScroll();
};

const CloseSidebar = () => {
  aside.style.display = "none";
  EnableScroll();
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    cartModalIsActive = false;
    EnableScroll();
  } else if (event.target == aside) {
    aside.style.display = "none";
    CloseSidebar();
  }
};

//Responsiveness.
const navContainer = document.querySelector(".div-nav");
const menu = document.querySelector(".icon-menu");
const createdNavElements = [];

const VerifyScreenSize = () => {
  if (window.innerWidth >= 768) {
    menu.parentNode.removeChild(menu);
    navContainer.appendChild(CreateElements("a", "Collections", null));
    navContainer.appendChild(CreateElements("a", "Men", null));
    navContainer.appendChild(CreateElements("a", "Women", null));
    navContainer.appendChild(CreateElements("a", "About", null));
    navContainer.appendChild(CreateElements("a", "Contact", null));
  } else {
  }
};

VerifyScreenSize();
