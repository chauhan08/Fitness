document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;
    const cartItems = {};

    function addToCart(product, price, imageUrl, quantity) {
        cartCount += quantity;
        updateCartCount();

        if (cartItems[product]) {
            cartItems[product].quantity += quantity;
        } else {
            cartItems[product] = { price, imageUrl, quantity };
        }
        updateCartItems();
    }

    function updateCartCount() {
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cartCount;
    }

    function updateCartItems() {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';
        for (const [product, item] of Object.entries(cartItems)) {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${item.imageUrl}" alt="${product}">
                <span>${product}</span>
                <span class="quantity">x${item.quantity}</span>
                <span class="price">$${item.price * item.quantity}</span>
            `;
            cartList.appendChild(listItem);
        }
    }

    function toggleCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (cartItemsContainer.style.display === 'none' || cartItemsContainer.style.display === '') {
            cartItemsContainer.style.display = 'block';
        } else {
            cartItemsContainer.style.display = 'none';
        }
    }

    document.getElementById('cart-icon').addEventListener('click', function() {
        toggleCartItems();
    });

    // Event listener for the close button
    document.getElementById('close-cart').addEventListener('click', function() {
        toggleCartItems();
    });

    window.addToCart = function(product, price, imageUrl) {
        const quantityInput = event.target.previousElementSibling;
        const quantity = parseInt(quantityInput.value);
        addToCart(product, price, imageUrl, quantity);
    };
});




