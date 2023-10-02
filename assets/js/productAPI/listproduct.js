// mengambil data dari API
fetch('https://my-json-server.typicode.com/Farkhandika12b/my-json-server21/product')
    .then(response => response.json())
    .then(data => {
        var products = data; // Simpan data dari API ke dalam variabel products

        // menampilkan produk di dalam halaman HTML
        function displayProducts() {
            var productListContainer = document.querySelector('.produk-list');

            // Iterasi array produk
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
    })
    .catch(error => console.error('Error:', error));
