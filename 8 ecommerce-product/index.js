// Select an element by its ID
const mainImg = document.getElementById("main-img");
const mainPopupImg = document.getElementById("mainPopupImg");
const thumbnails = Array.from(document.getElementsByClassName("thumbnail"));
const popupThumbnails = Array.from(document.getElementsByClassName("popup-thumbnail"));
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const numberQuantity = document.getElementById("num");
const overlay = document.querySelector(".overlay");
const closePopup = document.querySelector(".close-popup");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const accToCartBtn = document.querySelector(".btn-With-icon");
const CartPPopupContainer = document.getElementById("cart-popup");
const cartIcon = document.getElementById("cart-icon"); 

// add event Listener to the each thumbnail
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    //update main image 
    mainImg.src = thumbnail.src;

    // remove activated class from all then add to  clicked
    thumbnails.forEach((thumb) => thumb.classList.remove("activated"));
    thumbnail.classList.add("activated");

  });
}); 

// click event for main image to open the popup
mainImg.addEventListener("click", () => {
  overlay.classList.add("active");
});

// clicking on close button
closePopup.addEventListener("click", () => {
  overlay.classList.remove("active");
}); 

// event for popup  next button
next.addEventListener("click", () => {
  const currentIndex = popupThumbnails.findIndex(
    (popupThumbnail) => popupThumbnail.src === mainPopupImg.src
  );
  if (currentIndex >= 0) {
    const nextIndex = (currentIndex + 1) % popupThumbnails.length;
    mainPopupImg.src = popupThumbnails[nextIndex].src;
    popupThumbnails.forEach((popupThumbnail) => {
      if (mainPopupImg.src === popupThumbnail.src) {
        popupThumbnail.classList.add("activated");
      } else {
        popupThumbnail.classList.remove("activated");
      }
    });
  }
});