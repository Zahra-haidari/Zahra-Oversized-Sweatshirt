/* =========================================
   ZAHRA — WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   PRODUCT GALLERY
========================================= */

const products = [
  {
    title: "Zahra — Oversized Sweatshirt",
    price: "1,680 ₴",
    code: "M57122",
    gender: "Female",

    images: [
      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=80",

      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80",

      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=1000&q=80",

      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
    ]
  },

  {
    title: "Zahra — Classic Hoodie",
    price: "1,380 ₴",
    code: "M57123",
    gender: "Female",

    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",

      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=1000&q=80",

      "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=1400&q=80"
    ]
  }
];


/* =========================================
   GET ELEMENTS
========================================= */

const mainImage =
  document.querySelector(".gallery__main img");

const thumbnails =
  document.querySelectorAll(".gallery__thumb");

const dots =
  document.querySelectorAll(".dot");

const nextButton =
  document.querySelector(".gallery-next");

const previousButton =
  document.querySelector(".gallery-prev");

const pagerCount =
  document.querySelector(".pager__count");

const productCode =
  document.querySelector(".hero__stats strong");

const heroPrice =
  document.querySelector(".price");

const heroTitle =
  document.querySelector(".hero__title");

const genderElement =
  document.querySelectorAll(".hero__stats strong")[1];


/* =========================================
   CURRENT IMAGE
========================================= */

let currentImage = 0;


/* =========================================
   UPDATE GALLERY
========================================= */

function updateGallery(index) {

  if (!mainImage) {
    return;
  }

  currentImage = index;

  const product = products[0];

  const image =
    product.images[currentImage];

  mainImage.src = image;

  /*
    Update active thumbnail
  */

  thumbnails.forEach((thumbnail, i) => {

    thumbnail.classList.toggle(
      "is-active",
      i === currentImage
    );

  });


  /*
    Update dots
  */

  dots.forEach((dot, i) => {

    dot.classList.toggle(
      "is-active",
      i === currentImage
    );

  });


  /*
    Update counter
  */

  if (pagerCount) {

    const number =
      String(currentImage + 1).padStart(2, "0");

    pagerCount.textContent =
      `${number} / ${String(product.images.length).padStart(2, "0")}`;

  }

}


/* =========================================
   NEXT IMAGE
========================================= */

function nextImage() {

  const product = products[0];

  currentImage++;

  if (currentImage >= product.images.length) {

    currentImage = 0;

  }

  updateGallery(currentImage);

}


/* =========================================
   PREVIOUS IMAGE
========================================= */

function previousImage() {

  const product = products[0];

  currentImage--;

  if (currentImage < 0) {

    currentImage =
      product.images.length - 1;

  }

  updateGallery(currentImage);

}


/* =========================================
   NEXT / PREVIOUS BUTTONS
========================================= */

if (nextButton) {

  nextButton.addEventListener(
    "click",
    nextImage
  );

}

if (previousButton) {

  previousButton.addEventListener(
    "click",
    previousImage
  );

}


/* =========================================
   CLICK THUMBNAILS
========================================= */

thumbnails.forEach((thumbnail, index) => {

  thumbnail.addEventListener(
    "click",
    () => {

      if (index < products[0].images.length) {

        updateGallery(index);

      }

    }
  );

});


/* =========================================
   CLICK DOTS
========================================= */

dots.forEach((dot, index) => {

  dot.addEventListener(
    "click",
    () => {

      if (index < products[0].images.length) {

        updateGallery(index);

      }

    }
  );

});


/* =========================================
   SIZE SELECTOR
========================================= */

const sizeButtons =
  document.querySelectorAll(
    ".size-picker__item"
  );

sizeButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      sizeButtons.forEach((item) => {

        item.classList.remove(
          "is-active"
        );

      });

      button.classList.add(
        "is-active"
      );

    }
  );

});


/* =========================================
   COLOR SELECTOR
========================================= */

const colorButtons =
  document.querySelectorAll(
    ".color-picker__item"
  );

colorButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      colorButtons.forEach((item) => {

        item.classList.remove(
          "is-active"
        );

      });

      button.classList.add(
        "is-active"
      );

    }
  );

});


/* =========================================
   MOBILE MENU
========================================= */

const menuButton =
  document.querySelector(
    ".topbar__menu"
  );

const menuDrawer =
  document.querySelector(
    ".menu-drawer"
  );

const menuLinks =
  document.querySelectorAll(
    ".menu-drawer a"
  );


function toggleMenu() {

  if (!menuDrawer) {
    return;
  }

  const isOpen =
    menuDrawer.classList.toggle(
      "is-open"
    );

  menuDrawer.setAttribute(
    "aria-hidden",
    String(!isOpen)
  );

  if (menuButton) {

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  }

}


if (menuButton) {

  menuButton.addEventListener(
    "click",
    toggleMenu
  );

}


/*
  Close menu when a link is clicked
*/

menuLinks.forEach((link) => {

  link.addEventListener(
    "click",
    () => {

      if (!menuDrawer) {
        return;
      }

      menuDrawer.classList.remove(
        "is-open"
      );

      menuDrawer.setAttribute(
        "aria-hidden",
        "true"
      );

      if (menuButton) {

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

      }

    }
  );

});


/*
  Close menu by clicking outside
*/

if (menuDrawer) {

  menuDrawer.addEventListener(
    "click",
    (event) => {

      if (
        event.target === menuDrawer
      ) {

        menuDrawer.classList.remove(
          "is-open"
        );

        menuDrawer.setAttribute(
          "aria-hidden",
          "true"
        );

        if (menuButton) {

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );

        }

      }

    }
  );

}


/* =========================================
   BUY BUTTON
========================================= */

const bagButton =
  document.querySelector(
    ".bag-button"
  );


if (bagButton) {

  bagButton.addEventListener(
    "click",
    () => {

      showCartMessage(
        "Your product has been added to your order."
      );

    }
  );

}


/* =========================================
   CART MESSAGE
========================================= */

function showCartMessage(message) {

  let toast =
    document.querySelector(
      ".cart-toast"
    );


  /*
    Create toast if it doesn't exist
  */

  if (!toast) {

    toast =
      document.createElement(
        "div"
      );

    toast.className =
      "cart-toast";

    document.body.appendChild(
      toast
    );

  }


  toast.textContent =
    message;

  toast.classList.add(
    "is-visible"
  );


  /*
    Hide after 3 seconds
  */

  setTimeout(() => {

    toast.classList.remove(
      "is-visible"
    );

  }, 3000);

}


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
  document.querySelectorAll(
    ".info-card, .product-card, .philosophy__visual, .contact-card"
  );


if (
  "IntersectionObserver"
  in window
) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "reveal",
                "is-visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.12
      }
    );


  revealElements.forEach(
    (element) => {

      element.classList.add(
        "reveal"
      );

      observer.observe(
        element
      );

    }
  );

}


/* =========================================
   IMAGE FALLBACK
========================================= */

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=1000&q=80";


document.querySelectorAll("img")
  .forEach((image) => {

    image.addEventListener(
      "error",
      () => {

        /*
          Prevent infinite fallback loop
        */

        if (
          image.dataset.fallbackApplied
        ) {

          return;

        }


        image.dataset.fallbackApplied =
          "true";


        image.src =
          FALLBACK_IMAGE;

      }
    );

  });


/* =========================================
   KEYBOARD GALLERY CONTROL
========================================= */

document.addEventListener(
  "keydown",
  (event) => {

    /*
      Don't change gallery when
      user is typing in an input.
    */

    const tag =
      event.target.tagName;

    if (
      tag === "INPUT" ||
      tag === "TEXTAREA"
    ) {

      return;

    }


    if (event.key === "ArrowRight") {

      nextImage();

    }


    if (event.key === "ArrowLeft") {

      previousImage();

    }

  }
);


/* =========================================
   INITIALIZE
========================================= */

updateGallery(0);