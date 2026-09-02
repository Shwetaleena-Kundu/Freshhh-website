// =====================================
// FRESHHH PRODUCT CATALOGUE
// =====================================

const productGroups = {
  fruits: [
    ["Fresh Red Apples", 180, "/ kg", "./Images/Kashmir apples.png", "Best Seller"],
    ["Green Seedless Grapes", 120, "/ kg", "./Images/grapes.png", "Fresh"],
    ["Juicy Oranges", 100, "/ kg", "./Images/orange.png", "Seasonal"],
    ["Sweet Bananas", 60, "/ dozen", "./Images/banana.png", "Popular"],
    ["Fresh Mangoes", 220, "/ kg", "./Images/Mangoes.png", "Seasonal"],
    ["Red Pomegranate", 190, "/ kg", "./Images/Pomagranate.png", "Fresh"],
    ["Ripe Papaya", 65, "/ piece", "./Images/Papaya.png", "Fresh"],
    ["Golden Pineapple", 90, "/ piece", "./Images/Pineapple.png", "Popular"],
    ["Sweet Watermelon", 45, "/ kg", "./Images/watermelon.png", "Fresh"],
    ["Fresh Guava", 80, "/ kg", "./Images/Guava.png", "Fresh"],
    ["Green Kiwi", 160, "/ pack", "./Images/Green kiwi.png", "New"],
    ["Juicy Pears", 150, "/ kg", "./Images/Juicy pears.png", "Fresh"],
    ["Fresh Strawberries", 180, "/ box", "./Images/Fresh strawberries.png", "Popular"],
    ["Blueberries", 250, "/ box", "./Images/Blueberries.png", "Premium"],
    ["Sweet Chikoo", 95, "/ kg", "./Images/Sweet chikoo.png", "Fresh"],
    ["Dragon Fruit", 140, "/ piece", "./Images/Dragon Fruit.png", "New"],
    ["Sweet Lime", 110, "/ kg", "./Images/Sweet Lime.png", "Fresh"],
    ["Fresh Coconut", 55, "/ piece", "./Images/Fresh Coconut.png", "Natural"]
  ],

  vegetables: [
    ["Farm Fresh Tomatoes", 40, "/ kg", "./Images/fresh tomatoes.png", "20% Off"],
    ["Farm Potatoes", 28, "/ kg", "./Images/Potato.png", "Best Seller"],
    ["Fresh Cauliflower", 35, "/ piece", "./Images/cauliflower.png", "Fresh"],
    ["Green Cabbage", 32, "/ piece", "./Images/Green Cabbage.png", "Fresh"],
    ["Crunchy Carrots", 55, "/ kg", "./Images/Crunchy Carrots.png", "Popular"],
    ["French Beans", 75, "/ kg", "./Images/Fresh Beans.png", "Fresh"],
    ["Green Peas", 90, "/ kg", "./Images/Green Peas.png", "Seasonal"],
    ["Green Capsicum", 85, "/ kg", "./Images/Green Capsicum.png", "Fresh"],
    ["Purple Brinjal", 50, "/ kg", "./Images/Purple brinjal.png", "Fresh"],
    ["Tender Okra", 65, "/ kg", "./Images/okra.png", "Popular"],
    ["Fresh Beetroot", 48, "/ kg", "./Images/beetroot.png", "Natural"],
    ["White Radish", 35, "/ kg", "./Images/radish.png", "Fresh"],
    ["Fresh Pumpkin", 40, "/ kg", "./Images/pumpkin.png", "Natural"],
    ["Bottle Gourd", 38, "/ piece", "./Images/Bottle gourd.png", "Fresh"],
    ["Bitter Gourd", 60, "/ kg", "./Images/Bitter Gourd.png", "Fresh"],
    ["Red Onions", 42, "/ kg", "./Images/Red Onions.png", "Popular"],
    ["Fresh Garlic", 160, "/ kg", "./Images/Garlic.png", "Natural"],
    ["Fresh Ginger", 140, "/ kg", "./Images/Ginger.png", "Natural"]
  ],

  herbs: [
    ["Fresh Spinach", 25, "/ bunch", "./Images/Spinach.png", "Fresh"],
    ["Green Corriander", 20, "/ bunch", "./Images/Corriander.png", "Fresh"],
    ["Fresh Mint Leaves", 22, "/ bunch", "./Images/Mint.png", "Natural"],
    ["Fenugreek Leaves", 28, "/ bunch", "./Images/Fenugreek.png", "Seasonal"],
    ["Fresh Curry Leaves", 20, "/ pack", "./Images/Curry leaves.png", "Fresh"],
    ["Green Basil", 45, "/ pack", "./Images/Basil.png", "Premium"],
    ["Fresh Dill Leaves", 30, "/ bunch", "./Images/Dill.png", "Fresh"],
    ["Green Lettuce", 55, "/ piece", "./Images/Lettuce.png", "Popular"],
    ["Spring Onions", 35, "/ bunch", "./Images/Spring Onions.png", "Fresh"],
    ["Fresh Parsley", 50, "/ pack", "./Images/Parsley.png", "Premium"]
  ],

  organic: [
    ["Organic Cucumber", 30, "/ kg", "./Images/cucumber.png", "Organic"],
    ["Organic Apples", 220, "/ kg", "./Images/Kashmir apples.png", "Organic"],
    ["Organic Bananas", 85, "/ dozen", "./Images/banana.png", "Organic"],
    ["Organic Tomatoes", 65, "/ kg", "./Images/fresh tomatoes.png", "Organic"],
    ["Organic Carrots", 80, "/ kg", "./Images/Crunchy Carrots.png", "Organic"],
    ["Organic Potatoes", 55, "/ kg", "./Images/potato.png", "Organic"],
    ["Organic Spinach", 45, "/ bunch", "./Images/Spinach.png", "Organic"],
    ["Organic Turmeric", 180, "/ kg", "./Images/Turmeric.png", "Organic"],
    ["Organic Lemons", 120, "/ kg", "./Images/Sweet Lime.png", "Organic"],
    ["Organic Broccoli", 140, "/ piece", "./Images/Broccoli.png", "Organic"],
    ["Organic Zucchini", 110, "/ kg", "./Images/Zucchini.png", "Organic"],
    ["Organic Avocados", 280, "/ pack", "./Images/Avocados.png", "Organic"]
  ],

  seasonal: [
    ["Alphonso Mangoes", 350, "/ dozen", "./Images/Mangoes.png", "Seasonal"],
    ["Fresh Litchi", 180, "/ kg", "./Images/Litchi.png", "Seasonal"],
    ["Red Cherries", 320, "/ box", "./Images/Cherries.png", "Seasonal"],
    ["Fresh Jamun", 160, "/ box", "./Images/Jamun.png", "Seasonal"],
    ["Custard Apple", 140, "/ kg", "./Images/Custard apple.png", "Seasonal"],
    ["Winter Red Carrots", 70, "/ kg", "./Images/Red carrots.png", "Seasonal"],
    ["Winter Green Peas", 110, "/ kg", "./Images/Peas.png", "Seasonal"],
    ["Sweet Corn", 45, "/ pack", "./Images/Corn.png", "Seasonal"],
    ["Tender Coconut", 75, "/ piece", "./Images/Fresh Coconut.png", "Seasonal"],
    ["Fresh Jackfruit", 90, "/ kg", "./Images/Jackfruit.png", "Seasonal"]
  ]
};


// Convert the groups into one array of 68 products
const products = [];
let nextProductId = 1;

Object.entries(productGroups).forEach(function ([category, group]) {
  group.forEach(function (item) {
    products.push({
      id: nextProductId,
      name: item[0],
      price: item[1],
      unit: item[2],
      image: item[3],
      badge: item[4],
      category: category,
      organic: category === "organic",
      popularity: 100 - nextProductId
    });

    nextProductId++;
  });
});


// =====================================
// PRODUCT PAGE
// =====================================

(function () {

  // Find Product-page HTML elements
  const productGrid =
    document.getElementById("product-grid");

  const productCount =
    document.getElementById("product-count");

  const productPagination =
    document.getElementById("product-pagination");

  const categoryLinks =
    document.querySelectorAll(
      ".category-list a[data-filter]"
    );

  const priceRange =
    document.getElementById("price-range");

  const organicFilter =
    document.getElementById("organic-filter");

  const productSort =
    document.getElementById("product-sort");


  // Stop if this is not product.html
  if (!productGrid) {
    return;
  }


  // =====================================
  // PRODUCT-PAGE SETTINGS
  // =====================================

  const productsPerPage = 8;

  let currentPage = 1;
  let selectedCategory = "all";
  let maximumPrice = 500;
  let showOrganicOnly = false;
  let selectedSort = "popularity";


  // Read saved wishlist IDs
  let wishlist =
    (
      JSON.parse(
        localStorage.getItem(
          "freshhhWishlist"
        )
      ) || []
    ).map(Number);


  // Read search sent through URL
  let productSearchText =
    new URLSearchParams(
      window.location.search
    ).get("search") || "";

  productSearchText =
    productSearchText
      .trim()
      .toLowerCase();


  // =====================================
  // FILTER AND SORT PRODUCTS
  // =====================================

  function getVisibleProducts() {

    const visibleProducts =
      products.filter(function (product) {

        const matchesCategory =
          selectedCategory === "all" ||
          product.category === selectedCategory;


        const matchesPrice =
          product.price <= maximumPrice;


        const matchesOrganic =
          !showOrganicOnly ||
          product.organic;


        const matchesSearch =
          product.name
            .toLowerCase()
            .includes(productSearchText);


        return (
          matchesCategory &&
          matchesPrice &&
          matchesOrganic &&
          matchesSearch
        );

      });


    // Price: Low to High
    if (selectedSort === "price-low") {

      visibleProducts.sort(
        function (a, b) {
          return a.price - b.price;
        }
      );

    }

    // Price: High to Low
    else if (selectedSort === "price-high") {

      visibleProducts.sort(
        function (a, b) {
          return b.price - a.price;
        }
      );

    }

    // Name: A–Z
    else if (selectedSort === "name") {

      visibleProducts.sort(
        function (a, b) {

          return a.name.localeCompare(
            b.name
          );

        }
      );

    }

    // Newest first
    else if (selectedSort === "newest") {

      visibleProducts.sort(
        function (a, b) {
          return b.id - a.id;
        }
      );

    }

    // Popularity
    else {

      visibleProducts.sort(
        function (a, b) {

          return (
            b.popularity -
            a.popularity
          );

        }
      );

    }


    return visibleProducts;

  }


  // =====================================
  // CREATE ONE PRODUCT CARD
  // =====================================

  function createProductCard(product) {

    const isWishlisted =
      wishlist.includes(product.id);


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
              class="wishlist-btn ${
                isWishlisted
                  ? "active"
                  : ""
              }"
              type="button"
              aria-label="${
                isWishlisted
                  ? "Remove"
                  : "Add"
              } ${product.name} ${
                isWishlisted
                  ? "from"
                  : "to"
              } wishlist"
            >

              <i class="${
                isWishlisted
                  ? "fas"
                  : "far"
              } fa-heart"></i>

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
  // DISPLAY PRODUCTS
  // =====================================

  function displayProducts() {

    const visibleProducts =
      getVisibleProducts();


    const totalPages =
      Math.max(
        1,
        Math.ceil(
          visibleProducts.length /
          productsPerPage
        )
      );


    if (currentPage > totalPages) {
      currentPage = totalPages;
    }


    const startIndex =
      (currentPage - 1) *
      productsPerPage;


    const endIndex =
      startIndex +
      productsPerPage;


    const pageProducts =
      visibleProducts.slice(
        startIndex,
        endIndex
      );


    // No matching products
    if (pageProducts.length === 0) {

     productGrid.innerHTML = `
  <div class="col-12">

    <div class="no-products-message">

      <i class="fas fa-search"></i>

      <h2>No products found</h2>

      <p>
        Try changing your search or filters.
      </p>

    </div>

  </div>
`;

    }

    // Display matching products
    else {

      productGrid.innerHTML =
        pageProducts
          .map(createProductCard)
          .join("");

    }


    updateProductCount(
      visibleProducts.length,
      startIndex,
      pageProducts.length
    );


    displayPagination(totalPages);

  }


  // =====================================
  // PRODUCT COUNT
  // =====================================

  function updateProductCount(
    total,
    startIndex,
    amountShown
  ) {

    if (!productCount) {
      return;
    }


    if (total === 0) {

      productCount.textContent =
        "No products found";

      return;

    }


    const firstNumber =
      startIndex + 1;


    const lastNumber =
      startIndex +
      amountShown;


    productCount.textContent =
      `Showing ${firstNumber}–${lastNumber} of ${total} products`;

  }


  // =====================================
  // PAGINATION
  // =====================================

  function displayPagination(totalPages) {

    if (!productPagination) {
      return;
    }


    let paginationHTML = `

      <a
        href="#"
        data-page="${currentPage - 1}"
        aria-label="Previous page"
        class="${
          currentPage === 1
            ? "disabled"
            : ""
        }"
        ${
          currentPage === 1
            ? 'aria-disabled="true"'
            : ""
        }
      >

        <i class="fas fa-chevron-left"></i>

      </a>

    `;


    // Create page numbers
    for (
      let pageNumber = 1;
      pageNumber <= totalPages;
      pageNumber++
    ) {

      paginationHTML += `

        <a
          href="#"
          data-page="${pageNumber}"
          class="${
            pageNumber === currentPage
              ? "active"
              : ""
          }"
          ${
            pageNumber === currentPage
              ? 'aria-current="page"'
              : ""
          }
        >

          ${pageNumber}

        </a>

      `;

    }


    paginationHTML += `

      <a
        href="#"
        data-page="${currentPage + 1}"
        aria-label="Next page"
        class="${
          currentPage === totalPages
            ? "disabled"
            : ""
        }"
        ${
          currentPage === totalPages
            ? 'aria-disabled="true"'
            : ""
        }
      >

        <i class="fas fa-chevron-right"></i>

      </a>

    `;


    productPagination.innerHTML =
      paginationHTML;

  }


  // Pagination click
  productPagination?.addEventListener(
    "click",
    function (event) {

      const pageButton =
        event.target.closest(
          "a[data-page]"
        );


      if (!pageButton) {
        return;
      }


      event.preventDefault();


      if (
        pageButton.classList.contains(
          "disabled"
        )
      ) {
        return;
      }


      currentPage =
        Number(
          pageButton.dataset.page
        );


      displayProducts();


      document
        .querySelector(".product-shop")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }
  );


  // =====================================
  // CATEGORY FILTER
  // =====================================

  categoryLinks.forEach(
    function (categoryLink) {

      categoryLink.addEventListener(
        "click",
        function (event) {

          event.preventDefault();


          selectedCategory =
            categoryLink.dataset.filter;


          currentPage = 1;


          categoryLinks.forEach(
            function (link) {

              link.classList.remove(
                "active"
              );

            }
          );


          categoryLink.classList.add(
            "active"
          );


          displayProducts();

        }
      );

    }
  );


  // =====================================
  // PRICE FILTER
  // =====================================

  priceRange?.addEventListener(
    "input",
    function () {

      maximumPrice =
        Number(priceRange.value);


      currentPage = 1;


      const priceLabels =
        document.querySelectorAll(
          ".price-values span"
        );


      if (priceLabels.length > 1) {

        priceLabels[1].textContent =
          `₹${maximumPrice}`;

      }


      displayProducts();

    }
  );


  // =====================================
  // ORGANIC FILTER
  // =====================================

  organicFilter?.addEventListener(
    "change",
    function () {

      showOrganicOnly =
        organicFilter.checked;


      currentPage = 1;


      displayProducts();

    }
  );


  // =====================================
  // PRODUCT SORTING
  // =====================================

  productSort?.addEventListener(
    "change",
    function () {

      selectedSort =
        productSort.value;


      currentPage = 1;


      displayProducts();

    }
  );


  // =====================================
  // PRODUCT SEARCH
  // =====================================

  const productPageSearchBox =
    document.querySelector(
      ".search-box"
    );


  if (productPageSearchBox) {

    const productPageSearchInput =
      productPageSearchBox
        .querySelector("input");


    const productPageSearchButton =
      productPageSearchBox
        .querySelector("button");


    // Display URL search in the input
    if (productSearchText) {

      productPageSearchInput.value =
        productSearchText;

    }


    function searchFullCatalogue() {

      productSearchText =
        productPageSearchInput.value
          .trim()
          .toLowerCase();


      currentPage = 1;


      displayProducts();

    }


    productPageSearchButton
      .addEventListener(
        "click",
        searchFullCatalogue
      );


    productPageSearchInput
      .addEventListener(
        "keydown",
        function (event) {

          if (event.key === "Enter") {

            searchFullCatalogue();

          }

        }
      );

  }


  // =====================================
  // WISHLIST HEART
  // =====================================

  productGrid.addEventListener(
    "click",
    function (event) {

      const wishlistButton =
        event.target.closest(
          ".wishlist-btn"
        );


      if (!wishlistButton) {
        return;
      }


      const productCard =
        wishlistButton.closest(
          ".shop-product-card"
        );


      const productId =
        Number(
          productCard.dataset.productId
        );


      const heartIcon =
        wishlistButton.querySelector("i");


      // Remove from wishlist
      if (wishlist.includes(productId)) {

        wishlist =
          wishlist.filter(
            function (id) {

              return id !== productId;

            }
          );


        wishlistButton.classList.remove(
          "active"
        );


        heartIcon.classList.remove(
          "fas"
        );


        heartIcon.classList.add(
          "far"
        );

      }

      // Add to wishlist
      else {

        wishlist.push(productId);


        wishlistButton.classList.add(
          "active"
        );


        heartIcon.classList.remove(
          "far"
        );


        heartIcon.classList.add(
          "fas"
        );

      }


      // Save wishlist
      localStorage.setItem(
        "freshhhWishlist",
        JSON.stringify(wishlist)
      );


      // Update navbar count
      updateWishlistCount();

  });


  // Display page when it opens
  displayProducts();

})();