//List Product
var products = [
    {
        title: "Acer Aspire 3",
        imageSrc: "/assets/product-list/Acer-Aspire-3.png",
        price: "$358"
    },
    {
        title: "Acer Nitro 7",
        imageSrc: "/assets/product-list/Acer-nitro-7.png",
        price: "$459"
    },
    {
        title: "Acer Swift 3",
        imageSrc: "/assets/product-list/Acer-swift-3.png",
        price: "$338"
    },
    {
        title: "Acer Swift 3",
        imageSrc: "/assets/product-list/Acer-swift-3.png",
        price: "$338"
    },
    {
        title: "Acer Swift 3",
        imageSrc: "/assets/product-list/Acer-swift-3.png",
        price: "$338"
    },
    {
        title: "Acer Swift 3",
        imageSrc: "/assets/product-list/Acer-swift-3.png",
        price: "$338"
    }
];

// Fungsi untuk menampilkan produk di dalam halaman HTML
function displayProducts() {
    var productListContainer = document.querySelector('.produk-list'); // Ganti dengan kelas atau ID yang sesuai di halaman Anda

    // Iterasi melalui array produk
    products.forEach(function(product) {
        var productElement = document.createElement('div');
        productElement.classList.add('produk');

        productElement.innerHTML = `
            <p class="produk-title">${product.title}</p>
            <img src="${product.imageSrc}" alt="${product.title}">
            <div class="price-cart">
                <div class="price-container">
                    <h5>Price</h6>
                    <p id="price">${product.price}</p>
                </div>
                <p></p>
                <div class="cart-container">
                    <a href=""><img src="../assets/cart.png" alt="cart" class="cart"></a>
                </div>
            </div>
        `;

        productListContainer.appendChild(productElement);
    });
}
displayProducts();
