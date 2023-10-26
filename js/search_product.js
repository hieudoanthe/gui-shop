const originalProducts = [
    { name: "Princess dress", price: 133.00, originalPrice: 170.00, imgFileName: "product-12.jpg" },
    { name: "White Silk Off Shoulder Dress", price: 103.00, originalPrice: 150.00, imgFileName: "product-14.jpg" },
    { name: "Long-sleeved T-shirts", price: 120.00, originalPrice: 140.00, imgFileName: "product-3.jpg" },
    { name: "Striped shirt men's", price: 25.00, originalPrice: 98.00, imgFileName: "product-4.jpg" },
    { name: "Men's Korean Plaid Shirt", price: 123.00, originalPrice: 160.00, imgFileName: "product-5.jpg" },
    { name: "Embroidered Khaki Jacket", price: 99.00, originalPrice: 120.00, imgFileName: "product-6.jpg" },
    { name: "Round neck crop top set", price: 180.00, originalPrice: 220.00, imgFileName: "product-7.jpg" },
    { name: "Thermal Jacket", price: 145.00, originalPrice: 180.00, imgFileName: "product-8.jpg" },
    { name: "White Off-Shoulder Dress", price: 85.00, originalPrice: 110.00, imgFileName: "product-15.jpg" }
];

const searchContainer = document.querySelector('#search-container');
const searchResults = document.querySelector('#search-results');
const searchInput = document.querySelector('#search-input');

const originalSearchResults = searchResults.innerHTML; // Lưu trạng thái ban đầu của kết quả tìm kiếm

searchInput.addEventListener('input', updateSearchResults);

function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.className = "col-lg-4 col-md-6 col-sm-12 pb-1";

    const productTemplate = `
        <div class="card product-item border-0 mb-4">
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                 <img class="img-fluid w-100" src="img/${product.imgFileName}" alt="">
            </div>
            <div class="card-body border-left border-right text-center p-0 pt-4 pb-3">
                <h6 class="text-truncate mb-3">${product.name}</h6>
                <div class="d-flex justify-content-center">
                    <h6>$${product.price.toFixed(2)}</h6>
                    <h6 class="text-muted ml-2"><del>$${product.originalPrice.toFixed(2)}</del></h6>
                </div>
            </div>
            <div class="card-footer d-flex justify-content-between bg-light border">
                <a href="" class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>View Detail</a>
                <a href="" class "btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
            </div>
        </div>
    `;

    productCard.innerHTML = productTemplate;
    return productCard;
}

function updateSearchResults() {
    // const searchTerm = searchInput.value.toLowerCase();
    const searchTerm = searchInput.value;

    // Khôi phục trạng thái ban đầu nếu không có kết quả tìm kiếm
    if (searchTerm === '') {
        searchResults.innerHTML = originalSearchResults;
        return;
    }

    // Xóa danh sách sản phẩm hiện tại.
    while (searchResults.firstChild) {
        searchResults.removeChild(searchResults.firstChild);
    }

    const filteredProducts = originalProducts.filter(product => product.name.includes(searchTerm));

    if (filteredProducts.length > 0) {
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            searchResults.appendChild(productCard);
        });
    } else {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No products found.";
        searchResults.appendChild(noResultsMessage);
    }
}