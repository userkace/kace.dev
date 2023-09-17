'use strict';

/**
 * The function toggles the "active" class on a given element.
 * @param elem - The `elem` parameter is a reference to an HTML element.
 */
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

/* These lines of code are selecting HTML elements with the attribute `data-sidebar` and
`data-sidebar-btn` using the `document.querySelector()` method. The selected elements are then
assigned to the variables `sidebar` and `sidebarBtn`, respectively. */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

/* The code `sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });` is
adding a click event listener to the `sidebarBtn` element. When the `sidebarBtn` element is clicked,
the function `elementToggleFunc(sidebar)` is executed. This function toggles the "active" class on
the `sidebar` element, which means it adds the class if it's not present and removes it if it's
already present. This allows the sidebar to be shown or hidden when the button is clicked. */
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

/* These lines of code are selecting HTML elements with specific data attributes using the
`document.querySelector()` and `document.querySelectorAll()` methods. */
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

/* These lines of code are selecting HTML elements with specific data attributes using the
`document.querySelector()` method. */
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalTime = document.querySelector("[data-modal-time]");
const modalText = document.querySelector("[data-modal-text]");

/**
 * The function toggles the "active" class on the modal container and overlay elements.
 */
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

/* The code block is adding a click event listener to each element in the `testimonialsItem` array.
When any of these elements are clicked, the function inside the event listener is executed. */
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalTime.innerHTML = this.querySelector("[data-testimonials-time]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();

  });

}

/* The code `modalCloseBtn.addEventListener("click", testimonialsModalFunc);` adds a click event
listener to the `modalCloseBtn` element. When the `modalCloseBtn` element is clicked, the function
`testimonialsModalFunc()` is executed. This function toggles the "active" class on the modal
container and overlay elements, effectively closing the modal. */
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

/* This code is selecting HTML elements with specific data attributes using the
`document.querySelector()` and `document.querySelectorAll()` methods. */
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

/* The code block is adding a click event listener to each element in the `selectItems` array. When any
of these elements are clicked, the function inside the event listener is executed. */
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

/* The code block defines a function called `filterFunc` that takes a parameter `selectedValue`. Inside
the function, it loops through all the elements selected by the
`document.querySelectorAll("[data-filter-item]")` selector, which have the attribute
`data-filter-item`. */
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

/* The code block is adding a click event listener to each element in the `filterBtn` array. When any
of these elements are clicked, the function inside the event listener is executed. */
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}

/* This code is selecting HTML elements with specific data attributes using the
`document.querySelector()` and `document.querySelectorAll()` methods. */
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

/* The code block is adding an event listener to each element in the `formInputs` array. The event
listener listens for the "input" event, which is triggered when the user interacts with an input
field (e.g., typing, pasting, or deleting text). */
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    /* The code block is checking the validity of the form using the `checkValidity()` method. */
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

/* These lines of code are selecting HTML elements with the attribute `data-nav-link` and `data-page`
using the `document.querySelectorAll()` method. */
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/* The code block is adding a click event listener to each element in the `navigationLinks` array. When
any of these elements are clicked, the function inside the event listener is executed. */
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}