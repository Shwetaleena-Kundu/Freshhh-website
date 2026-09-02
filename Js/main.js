console.log("Freshhh JavaScript is connected!");

const eyeIcons =
  document.querySelectorAll(".eye-icon");

eyeIcons.forEach(function (eyeIcon) {

  eyeIcon.addEventListener("click", function () {

    const inputBox = eyeIcon.parentElement;

    const passwordInput =
      inputBox.querySelector("input");

    if (passwordInput.type === "password") {

      passwordInput.type = "text";

      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");

    } else {

      passwordInput.type = "password";

      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");

    }

  });

});
// =====================================
// PRODUCT SEARCH
// =====================================

const searchBox =
  document.querySelector(".search-box");

if (searchBox) {

  const searchInput =
    searchBox.querySelector("input");

  const searchButton =
    searchBox.querySelector("button");


  function searchProducts() {

    const searchText =
      searchInput.value.trim().toLowerCase();

    const productCards =
      document.querySelectorAll(".shop-product-card");


    // Stop if the search box is empty
    if (searchText === "") {
      return;
    }


    // If products aren't on the current page,
    // send the search to product.html
    if (productCards.length === 0) {

      window.location.href =
        "product.html?search=" +
        encodeURIComponent(searchText);

      return;
    }


    // We are on product.html:
    // check and filter every product
    productCards.forEach(function (card) {

      const heading = card.querySelector("h3");

      if (!heading) {
        return;
      }

      const productName =
        heading.textContent.toLowerCase();

      const cardColumn = card.parentElement;

      if (productName.includes(searchText)) {

        cardColumn.style.display = "";

      } else {

        cardColumn.style.display = "none";

      }

    });

  }


  // Search-icon click
  searchButton.addEventListener(
    "click",
    searchProducts
  );


  // Enter-key search
  searchInput.addEventListener(
    "keydown",
    function (event) {

      if (event.key === "Enter") {
        searchProducts();
      }

    }
  );


  // Read search text received by product.html
  const pageSearch =
    new URLSearchParams(
      window.location.search
    ).get("search");


  if (pageSearch) {

    searchInput.value = pageSearch;

    const productCards =
      document.querySelectorAll(".shop-product-card");

    if (productCards.length > 0) {
      searchProducts();
    }

  }

}
// =====================================
// SHARED WISHLIST COUNT
// =====================================

function updateWishlistCount() {

  const wishlistCountElements =
    document.querySelectorAll(
      ".wishlist-count"
    );

  let savedWishlist = [];

  const storedWishlist =
    localStorage.getItem(
      "freshhhWishlist"
    );

  if (storedWishlist) {

    savedWishlist =
      JSON.parse(storedWishlist);

  }

  wishlistCountElements.forEach(
    function (countElement) {

      countElement.textContent =
        savedWishlist.length;

    }
  );

}


// Show the saved count when any page opens
updateWishlistCount();
// =====================================
// SHARED CART
// =====================================

// Read the saved cart
function getSavedCart() {

  const storedCart =
    JSON.parse(
      localStorage.getItem("freshhhCart")
    ) || [];


  // Keep only valid cart items
  return storedCart.filter(
    function (item) {

      return (
        item &&
        Number.isFinite(Number(item.id)) &&
        Number(item.quantity) > 0
      );

    }
  );

}


// Save cart
function saveCart(cart) {

  localStorage.setItem(
    "freshhhCart",
    JSON.stringify(cart)
  );

}


// Update navbar cart count
function updateCartCount() {

  const cartCountElements =
    document.querySelectorAll(
      ".cart-count"
    );


  const cart =
    getSavedCart();


  // Count total quantities
  const totalQuantity =
    cart.reduce(
      function (total, item) {

        return total + Number(item.quantity);

      },
      0
    );


  cartCountElements.forEach(
    function (countElement) {

      countElement.textContent =
        totalQuantity;

    }
  );

}


// =====================================
// ADD PRODUCT TO CART
// =====================================

// This works for product cards on any page
document.addEventListener(
  "click",
  function (event) {

    const addButton =
      event.target.closest(
        ".shop-add-btn"
      );


    // Ignore clicks outside Add to Cart buttons
    if (!addButton) {
      return;
    }


    const productId =
      Number(
        addButton.dataset.productId
      );


    // Stop if the product ID is invalid
    if (!Number.isFinite(productId)) {
      return;
    }


    const cart =
      getSavedCart();


    // Check whether product is already in cart
    const existingItem =
      cart.find(
        function (item) {

          return Number(item.id) === productId;

        }
      );


    if (existingItem) {

      // Product already exists:
      // increase quantity
      existingItem.quantity =
        Number(existingItem.quantity) + 1;

    } else {

      // New product:
      // add it with quantity 1
      cart.push({
        id: productId,
        quantity: 1
      });

    }


    // Save the changed cart
    saveCart(cart);


    // Update navbar number
    updateCartCount();


    // Give visible feedback
    const originalHTML =
      addButton.innerHTML;


    addButton.innerHTML = `
      <i class="fas fa-check"></i>
      Added
    `;


    addButton.classList.add("added");


    setTimeout(
      function () {

        addButton.innerHTML =
          originalHTML;

        addButton.classList.remove(
          "added"
        );

      },
      1000
    );

  }
);


// Display cart count when every page opens
updateCartCount();
// =====================================
// FORM VALIDATION HELPERS
// =====================================

// Display an error under one field
function showFieldError(
  field,
  message
) {

  const fieldContainer =
    field.closest(".input-box") ||
    field.closest(".terms-box") ||
    field.parentElement;


  fieldContainer.classList.add(
    "input-error"
  );


  const errorMessage =
    document.createElement("small");


  errorMessage.className =
    "form-error";


  errorMessage.textContent =
    message;


  fieldContainer.insertAdjacentElement(
    "afterend",
    errorMessage
  );

}


// Remove old error and success messages
function clearFormMessages(form) {

  const oldErrors =
    form.querySelectorAll(
      ".form-error"
    );


  oldErrors.forEach(
    function (error) {

      error.remove();

    }
  );


  const errorContainers =
    form.querySelectorAll(
      ".input-error"
    );


  errorContainers.forEach(
    function (container) {

      container.classList.remove(
        "input-error"
      );

    }
  );


  const oldSuccess =
    form.querySelector(
      ".form-success"
    );


  if (oldSuccess) {
    oldSuccess.remove();
  }

}


// Display a success message
function showFormSuccess(
  form,
  message
) {

  const successMessage =
    document.createElement("div");


  successMessage.className =
    "form-success";


  successMessage.innerHTML = `
    <i class="fas fa-check-circle"></i>
    ${message}
  `;


  const formFooter =
    form.querySelector(
      ".form-footer"
    );


  if (formFooter) {

    formFooter.insertAdjacentElement(
      "beforebegin",
      successMessage
    );

  } else {

    form.appendChild(
      successMessage
    );

  }

}


// Check email format
function isValidEmail(email) {

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  return emailPattern.test(email);

}


// Check password strength
function isValidPassword(password) {

  // At least eight characters,
  // one letter and one number
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;


  return passwordPattern.test(
    password
  );

}


// =====================================
// REGISTER-FORM VALIDATION
// =====================================

const registerForm =
  document.getElementById(
    "register-form"
  );


if (registerForm) {

  registerForm.addEventListener(
    "submit",
    function (event) {

      // Stop the page from refreshing
      event.preventDefault();


      clearFormMessages(
        registerForm
      );


      // Find form inputs
      const nameInput =
        document.getElementById(
          "name"
        );

      const emailInput =
        document.getElementById(
          "email"
        );

      const passwordInput =
        document.getElementById(
          "password"
        );

      const confirmPasswordInput =
        document.getElementById(
          "confirm-password"
        );

      const phoneInput =
        document.getElementById(
          "phone"
        );

      const termsInput =
        document.getElementById(
          "terms"
        );


      // Clean input values
      const fullName =
        nameInput.value.trim();

      const email =
        emailInput.value
          .trim()
          .toLowerCase();

      const password =
        passwordInput.value;

      const confirmPassword =
        confirmPasswordInput.value;

      const phone =
        phoneInput.value.replace(
          /\D/g,
          ""
        );


      let formIsValid = true;


      // Check full name
      if (fullName === "") {

        showFieldError(
          nameInput,
          "Please enter your full name."
        );

        formIsValid = false;

      } else if (
        fullName.length < 3
      ) {

        showFieldError(
          nameInput,
          "Name must contain at least 3 characters."
        );

        formIsValid = false;

      }


      // Check email
      if (email === "") {

        showFieldError(
          emailInput,
          "Please enter your email."
        );

        formIsValid = false;

      } else if (
        !isValidEmail(email)
      ) {

        showFieldError(
          emailInput,
          "Please enter a valid email address."
        );

        formIsValid = false;

      }


      // Check password
      if (password === "") {

        showFieldError(
          passwordInput,
          "Please create a password."
        );

        formIsValid = false;

      } else if (
        !isValidPassword(password)
      ) {

        showFieldError(
          passwordInput,
          "Use at least 8 characters with one letter and one number."
        );

        formIsValid = false;

      }


      // Check confirm password
      if (confirmPassword === "") {

        showFieldError(
          confirmPasswordInput,
          "Please confirm your password."
        );

        formIsValid = false;

      } else if (
        password !== confirmPassword
      ) {

        showFieldError(
          confirmPasswordInput,
          "The passwords do not match."
        );

        formIsValid = false;

      }


      // Check phone number
      if (phone === "") {

        showFieldError(
          phoneInput,
          "Please enter your phone number."
        );

        formIsValid = false;

      } else if (
        phone.length !== 10
      ) {

        showFieldError(
          phoneInput,
          "Phone number must contain exactly 10 digits."
        );

        formIsValid = false;

      }


      // Check terms checkbox
      if (!termsInput.checked) {

        showFieldError(
          termsInput,
          "You must accept the terms and conditions."
        );

        formIsValid = false;

      }


      // Stop if any validation failed
      if (!formIsValid) {
        return;
      }


      // Frontend validation passed
      showFormSuccess(
        registerForm,
        "Your information is valid. Account creation will be connected with the backend."
      );

  });

}


// =====================================
// LOGIN-FORM VALIDATION
// =====================================

const loginForm =
  document.getElementById(
    "login-form"
  );


if (loginForm) {

  loginForm.addEventListener(
    "submit",
    function (event) {

      // Stop the page from refreshing
      event.preventDefault();


      clearFormMessages(
        loginForm
      );


      const emailInput =
        document.getElementById(
          "login-email"
        );

      const passwordInput =
        document.getElementById(
          "login-password"
        );


      const email =
        emailInput.value
          .trim()
          .toLowerCase();

      const password =
        passwordInput.value;


      let formIsValid = true;


      // Check email
      if (email === "") {

        showFieldError(
          emailInput,
          "Please enter your email."
        );

        formIsValid = false;

      } else if (
        !isValidEmail(email)
      ) {

        showFieldError(
          emailInput,
          "Please enter a valid email address."
        );

        formIsValid = false;

      }


      // Check password
      if (password === "") {

        showFieldError(
          passwordInput,
          "Please enter your password."
        );

        formIsValid = false;

      } else if (
        password.length < 8
      ) {

        showFieldError(
          passwordInput,
          "Password must contain at least 8 characters."
        );

        formIsValid = false;

      }


      // Stop if validation failed
      if (!formIsValid) {
        return;
      }


      // Frontend validation passed
      showFormSuccess(
        loginForm,
        "Your information is valid. Real login verification will be connected with the backend."
      );

  });

}
// =====================================
// CONTACT-FORM VALIDATION
// =====================================

const contactForm =
  document.getElementById(
    "contact-form"
  );


if (contactForm) {

  const contactSuccess =
    document.getElementById(
      "contact-success"
    );


  // Display an error under a contact field
  function showContactError(
    field,
    message
  ) {

    const inputBox =
      field.closest(
        ".contact-input-box"
      );


    inputBox.classList.add(
      "input-error"
    );


    const errorMessage =
      document.createElement(
        "small"
      );


    errorMessage.className =
      "contact-error";


    errorMessage.textContent =
      message;


    inputBox.insertAdjacentElement(
      "afterend",
      errorMessage
    );

  }


  // Remove old Contact-form messages
  function clearContactMessages() {

    const oldErrors =
      contactForm.querySelectorAll(
        ".contact-error"
      );


    oldErrors.forEach(
      function (error) {

        error.remove();

      }
    );


    const errorBoxes =
      contactForm.querySelectorAll(
        ".contact-input-box.input-error"
      );


    errorBoxes.forEach(
      function (box) {

        box.classList.remove(
          "input-error"
        );

      }
    );


    contactSuccess.style.display =
      "none";

  }


  contactForm.addEventListener(
    "submit",
    function (event) {

      // Prevent page refresh
      event.preventDefault();


      clearContactMessages();


      // Find form fields
      const nameInput =
        document.getElementById(
          "contact-name"
        );

      const emailInput =
        document.getElementById(
          "contact-email"
        );

      const phoneInput =
        document.getElementById(
          "contact-phone"
        );

      const subjectInput =
        document.getElementById(
          "contact-subject"
        );

      const messageInput =
        document.getElementById(
          "contact-message"
        );


      // Read and clean values
      const fullName =
        nameInput.value.trim();

      const email =
        emailInput.value
          .trim()
          .toLowerCase();

      const phone =
        phoneInput.value.replace(
          /\D/g,
          ""
        );

      const subject =
        subjectInput.value;

      const message =
        messageInput.value.trim();


      let formIsValid = true;


      // Validate name
      if (fullName === "") {

        showContactError(
          nameInput,
          "Please enter your full name."
        );

        formIsValid = false;

      } else if (
        fullName.length < 3
      ) {

        showContactError(
          nameInput,
          "Name must contain at least 3 characters."
        );

        formIsValid = false;

      }


      // Validate email
      if (email === "") {

        showContactError(
          emailInput,
          "Please enter your email."
        );

        formIsValid = false;

      } else if (
        !isValidEmail(email)
      ) {

        showContactError(
          emailInput,
          "Please enter a valid email address."
        );

        formIsValid = false;

      }


      // Validate phone
      if (phone === "") {

        showContactError(
          phoneInput,
          "Please enter your phone number."
        );

        formIsValid = false;

      } else if (
        phone.length !== 10
      ) {

        showContactError(
          phoneInput,
          "Phone number must contain exactly 10 digits."
        );

        formIsValid = false;

      }


      // Validate subject
      if (subject === "") {

        showContactError(
          subjectInput,
          "Please select a subject."
        );

        formIsValid = false;

      }


      // Validate message
      if (message === "") {

        showContactError(
          messageInput,
          "Please write your message."
        );

        formIsValid = false;

      } else if (
        message.length < 10
      ) {

        showContactError(
          messageInput,
          "Message must contain at least 10 characters."
        );

        formIsValid = false;

      }


      // Stop if any field is invalid
      if (!formIsValid) {
        return;
      }


      // Show success message
      contactSuccess.style.display =
        "block";


      // Clear form fields
      contactForm.reset();

  });

}
// =====================================
// NEWSLETTER VALIDATION
// =====================================

const newsletterForm =
  document.getElementById(
    "newsletter-form"
  );


if (newsletterForm) {

  const newsletterEmail =
    document.getElementById(
      "newsletter-email"
    );

  const newsletterError =
    document.getElementById(
      "newsletter-error"
    );

  const newsletterSuccess =
    document.getElementById(
      "newsletter-success"
    );


  newsletterForm.addEventListener(
    "submit",
    function (event) {

      // Stop page refresh
      event.preventDefault();


      // Remove old messages
      newsletterError.textContent =
        "";

      newsletterSuccess.style.display =
        "none";

      newsletterForm.classList.remove(
        "newsletter-invalid"
      );


      // Read email
      const email =
        newsletterEmail.value
          .trim()
          .toLowerCase();


      // Empty email
      if (email === "") {

        newsletterError.textContent =
          "Please enter your email address.";

        newsletterForm.classList.add(
          "newsletter-invalid"
        );

        return;

      }


      // Incorrect email format
      if (!isValidEmail(email)) {

        newsletterError.textContent =
          "Please enter a valid email address.";

        newsletterForm.classList.add(
          "newsletter-invalid"
        );

        return;

      }


      // Valid email
      newsletterSuccess.style.display =
        "block";


      // Clear email input
      newsletterForm.reset();

    }
  );

}
// =====================================
// SCROLL TO TOP
// =====================================

// Create the button using JavaScript
const scrollTopButton =
  document.createElement("button");


scrollTopButton.className =
  "scroll-top-btn";


scrollTopButton.type =
  "button";


scrollTopButton.setAttribute(
  "aria-label",
  "Scroll to top"
);


scrollTopButton.innerHTML = `
  <i class="fas fa-arrow-up"></i>
`;


// Add the button to the page
document.body.appendChild(
  scrollTopButton
);


// Show or hide button while scrolling
window.addEventListener(
  "scroll",
  function () {

    if (window.scrollY > 400) {

      scrollTopButton.classList.add(
        "show"
      );

    } else {

      scrollTopButton.classList.remove(
        "show"
      );

    }

  }
);


// Return to top when clicked
scrollTopButton.addEventListener(
  "click",
  function () {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
);
// =====================================
// FLOATING WHATSAPP BUTTON
// =====================================

const whatsappButton =
  document.createElement("a");


whatsappButton.className =
  "whatsapp-float";


whatsappButton.href =
  "https://wa.me/918327708601?text=Hello%20Freshhh%2C%20I%20need%20some%20help.";


whatsappButton.target =
  "_blank";


whatsappButton.rel =
  "noopener noreferrer";


whatsappButton.setAttribute(
  "aria-label",
  "Chat with Freshhh on WhatsApp"
);


whatsappButton.innerHTML = `
  <i class="fab fa-whatsapp"></i>
`;


document.body.appendChild(
  whatsappButton
);