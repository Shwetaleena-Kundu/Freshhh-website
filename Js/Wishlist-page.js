// =====================================
// WISHLIST PAGE
// =====================================

(function () {

  console.log(
    "Wishlist-page.js connected"
  );


  // Find Wishlist-page elements
  const wishlistGrid =
    document.getElementById(
      "wishlist-grid"
    );

  const emptyWishlist =
    document.getElementById(
      "empty-wishlist"
    );

  const wishlistPageCount =
    document.getElementById(
      "wishlist-page-count"
    );


  // Stop if this is not wishlist.html
  if (!wishlistGrid) {
    return;
  }


  // =====================================
  // READ SAVED WISHLIST IDS
  // =====================================

  function getSavedWishlist() {

    const savedWishlist =
      JSON.parse(
        localStorage.getItem(
          "freshhhWishlist"
        )
      ) || [];


    // Make sure every ID is a number
    return savedWishlist.map(Number);

  }


  // =====================================
  // CREATE ONE WISHLIST CARD
  // =====================================

  function createWishlistCard(product) {

    return `
      <div class="col-xl-3 col-lg-4 col-sm-6">

        <article
          class="shop-product-card"
          data-product-id="${product.id}"
          data-category="${product.category}"
        >

          <div class="shop-product-image">

            <span class="product-badge">
              ${product.badge}
            </span>


            <button
              class="wishlist-btn active"
              type="button"
              aria-label="Remove ${product.name} from wishlist"
            >

              <i class="fas fa-heart"></i>

            </button>


            <img
              src="${product.image}"
              alt="${product.name}"
            >

          </div>


          <div class="shop-product-content">

            <h3>${product.name}</h3>

            <p class="shop-product-price">
              ₹${product.price}
              <span>${product.unit}</span>
            </p>

            <button
              class="shop-add-btn"
              type="button"
              data-product-id="${product.id}"
            >

              <i class="fas fa-shopping-cart"></i>
              Add to Cart

            </button>

          </div>

        </article>

      </div>
    `;

  }


  // =====================================
  // DISPLAY SAVED PRODUCTS
  // =====================================

  function displayWishlistProducts() {

    const savedWishlist =
      getSavedWishlist();


    // Find products whose IDs are saved
    const savedProducts =
      products.filter(
        function (product) {

          return savedWishlist.includes(
            Number(product.id)
          );

        }
      );


    // Update Saved Products count
    if (wishlistPageCount) {

      wishlistPageCount.textContent =
        `${savedProducts.length} ${
          savedProducts.length === 1
            ? "product"
            : "products"
        } saved`;

    }


    // No saved products
    if (savedProducts.length === 0) {

      emptyWishlist.style.display =
        "block";


      wishlistGrid.innerHTML = "";


      return;

    }


    // Wishlist contains products
    emptyWishlist.style.display =
      "none";


    wishlistGrid.innerHTML =
      savedProducts
        .map(createWishlistCard)
        .join("");

  }


  // =====================================
  // REMOVE PRODUCT FROM WISHLIST
  // =====================================

  wishlistGrid.addEventListener(
    "click",
    function (event) {

      const heartButton =
        event.target.closest(
          ".wishlist-btn"
        );


      // Ignore clicks outside heart buttons
      if (!heartButton) {
        return;
      }


      const productCard =
        heartButton.closest(
          ".shop-product-card"
        );


      const productId =
        Number(
          productCard.dataset.productId
        );


      let savedWishlist =
        getSavedWishlist();


      // Remove clicked product ID
      savedWishlist =
        savedWishlist.filter(
          function (id) {

            return id !== productId;

          }
        );


      // Save changed wishlist
      localStorage.setItem(
        "freshhhWishlist",
        JSON.stringify(savedWishlist)
      );


      // Update navbar count
      updateWishlistCount();


      // Display remaining products
      displayWishlistProducts();

    }
  );


  // Display wishlist when page opens
  displayWishlistProducts();

})();