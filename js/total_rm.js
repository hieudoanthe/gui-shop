// function removeProduct(productId) {
//     var productRow = document.getElementById(productId);
//     if (productRow) {
//         productRow.style.display = 'none';
//     }
// }

// Khai báo một đối tượng để lưu thông tin sản phẩm
var products = {
    "product-1": { quantity: 1, price: 130 },
    "product-2": { quantity: 1, price: 135 },
    "product-3": { quantity: 1, price: 120 },
    "product-4": { quantity: 1, price: 25 },
    "product-5": { quantity: 1, price: 123 },
};



// Hàm tăng số lượng
function incrementQuantity(productId) {
    var product = products[productId];
    var quantityInput = document.querySelector("#" + productId + "-quantity");
    product.quantity++;
    quantityInput.value = product.quantity;
    var totalPrice = product.quantity * product.price;
    document.querySelector("#" + productId + "-total").textContent = "$" + totalPrice;
    updateTotal();
}

// Hàm giảm số lượng
function decrementQuantity(productId) {
    var product = products[productId];
    var quantityInput = document.querySelector("#" + productId + "-quantity");
    if (product.quantity > 1) {
        product.quantity--;
        quantityInput.value = product.quantity;
        var totalPrice = product.quantity * product.price;
        document.querySelector("#" + productId + "-total").textContent = "$" + totalPrice;
        updateTotal();
    }
}

// Hàm cập nhật tổng cộng toàn bộ
function updateTotal() {
    var total = 0;
    for (var productId in products) {
        var product = products[productId];
        total += product.quantity * product.price;
    }
    document.getElementById("total").textContent = "$" + total;
}

// Hàm xóa sản phẩm
function removeProduct(productId) {
    var productRow = document.getElementById(productId);
    productRow.remove();
    delete products[productId];
    updateTotal();
}
