// =====================================
// CART PAGE
// =====================================

(function () {

  console.log(
    "Cart-page.js connected"
  );


  // Find Cart-page HTML elements
  const cartItems =
    document.getElementById(
      "cart-items"
    );

  const emptyCart =
    document.getElementById(
      "empty-cart"
    );

  const cartContent =
    document.getElementById(
      "cart-content"
    );

  const cartPageCount =
    document.getElementById(
      "cart-page-count"
    );

  const cartSubtotal =
    document.getElementById(
      "cart-subtotal"
    );

  const deliveryChargeElement =
    document.getElementById(
      "delivery-charge"
    );

  const cartTotal =
    document.getElementById(
      "cart-total"
    );

  const checkoutButton =
    document.getElementById(
      "checkout-button"
    );


  // Stop if this is not Cart.html
  if (!cartItems) {
    return;
  }


  // =====================================
  // CREATE ONE CART ITEM
  // =====================================

  function createCartItem(
    product,
    quantity
  ) {

    const itemTotal =
      product.price * quantity;


    return `
      <article
        class="cart-item"
        data-product-id="${product.id}"
      >

        <!-- Product image -->
        <div class="cart-item-image">

          <img
            src="${product.image}"
            alt="${product.name}"
          >

        </div>


        <!-- Product information -->
        <div class="cart-item-details">

          <span class="cart-item-badge">
            ${product.badge}
          </span>

          <h3>${product.name}</h3>

          <p class="cart-item-unit">
            ₹${product.price} ${product.unit}
          </p>


          <!-- Quantity buttons -->
          <div class="cart-quantity">

            <button
              class="quantity-btn decrease-btn"
              type="button"
              aria-label="Decrease ${product.name} quantity"
            >
              <i class="fas fa-minus"></i>
            </button>


            <span class="quantity-number">
              ${quantity}
            </span>


            <button
              class="quantity-btn increase-btn"
              type="button"
              aria-label="Increase ${product.name} quantity"
            >
              <i class="fas fa-plus"></i>
            </button>

          </div>

        </div>


        <!-- Price and remove button -->
        <div class="cart-item-actions">

          <p class="cart-item-price">
            ₹${itemTotal}

            <small>
              ${quantity}
              ×
              ₹${product.price}
            </small>
          </p>


          <button
            class="remove-cart-btn"
            type="button"
            aria-label="Remove ${product.name} from cart"
          >
            <i class="fas fa-trash-alt"></i>
          </button>

        </div>

      </article>
    `;

  }


  // =====================================
  // DISPLAY CART
  // =====================================

  function displayCart() {

    const cart =
      getSavedCart();


    // Match saved IDs with the 68 products
    const cartProducts =
      cart
        .map(
          function (cartItem) {

            const product =
              products.find(
                function (productItem) {

                  return (
                    Number(productItem.id) ===
                    Number(cartItem.id)
                  );

                }
              );


            if (!product) {
              return null;
            }


            return {
              product: product,
              quantity:
                Number(cartItem.quantity)
            };

          }
        )
        .filter(
          function (item) {

            return item !== null;

          }
        );


    // Count total quantities
    const totalQuantity =
      cartProducts.reduce(
        function (total, item) {

          return (
            total + item.quantity
          );

        },
        0
      );


    // Update Cart-page count
    cartPageCount.textContent =
      `${totalQuantity} ${
        totalQuantity === 1
          ? "product"
          : "products"
      } in cart`;


    // =====================================
    // EMPTY CART
    // =====================================

    if (cartProducts.length === 0) {

      emptyCart.style.display =
        "block";

      cartContent.style.display =
        "none";

      cartItems.innerHTML = "";

      cartSubtotal.textContent =
        "₹0";

      deliveryChargeElement.textContent =
        "₹0";

      cartTotal.textContent =
        "₹0";

      checkoutButton.disabled =
        true;

      updateCartCount();

      return;

    }


    // =====================================
    // CART HAS PRODUCTS
    // =====================================

    emptyCart.style.display =
      "none";

    cartContent.style.display =
      "grid";

    checkoutButton.disabled =
      false;


    // Create the product cards
    cartItems.innerHTML =
      cartProducts
        .map(
          function (item) {

            return createCartItem(
              item.product,
              item.quantity
            );

          }
        )
        .join("");


    // Calculate subtotal
    const subtotal =
      cartProducts.reduce(
        function (total, item) {

          return (
            total +
            item.product.price *
            item.quantity
          );

        },
        0
      );


    // Delivery is free above ₹499
    const deliveryCharge =
      subtotal >= 499
        ? 0
        : 40;


    const finalTotal =
      subtotal + deliveryCharge;


    // Display prices
    cartSubtotal.textContent =
      `₹${subtotal}`;

    deliveryChargeElement.textContent =
      deliveryCharge === 0
        ? "Free"
        : `₹${deliveryCharge}`;

    cartTotal.textContent =
      `₹${finalTotal}`;


    updateCartCount();

  }


  // =====================================
  // QUANTITY AND REMOVE BUTTONS
  // =====================================

  cartItems.addEventListener(
    "click",
    function (event) {

      const cartItemElement =
        event.target.closest(
          ".cart-item"
        );


      if (!cartItemElement) {
        return;
      }


      const productId =
        Number(
          cartItemElement.dataset.productId
        );


      let cart =
        getSavedCart();


      const selectedItem =
        cart.find(
          function (item) {

            return (
              Number(item.id) ===
              productId
            );

          }
        );


      if (!selectedItem) {
        return;
      }


      // Increase quantity
      if (
        event.target.closest(
          ".increase-btn"
        )
      ) {

        selectedItem.quantity =
          Number(selectedItem.quantity) + 1;

      }


      // Decrease quantity
      else if (
        event.target.closest(
          ".decrease-btn"
        )
      ) {

        if (
          Number(selectedItem.quantity) > 1
        ) {

          selectedItem.quantity =
            Number(selectedItem.quantity) - 1;

        } else {

          // Remove product when quantity reaches zero
          cart =
            cart.filter(
              function (item) {

                return (
                  Number(item.id) !==
                  productId
                );

              }
            );

        }

      }


      // Remove product completely
      else if (
        event.target.closest(
          ".remove-cart-btn"
        )
      ) {

        cart =
          cart.filter(
            function (item) {

              return (
                Number(item.id) !==
                productId
              );

            }
          );

      } else {

        return;

      }


      // Save and redisplay
      saveCart(cart);

      displayCart();

  });


  // =====================================
  // CHECKOUT BUTTON
  // =====================================

  checkoutButton.addEventListener(
    "click",
    function () {

      const cart =
        getSavedCart();


      if (cart.length === 0) {
        return;
      }


      alert(
        "Checkout will be connected when we build the backend."
      );

  });


  // Display cart when Cart.html opens
  displayCart();

})();