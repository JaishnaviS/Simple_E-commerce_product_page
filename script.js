let cartCount = 0;

document.getElementById('add-to-cart').addEventListener('click', function() {
    const quantity = parseInt(document.getElementById('quantity').value);
    
    if (quantity > 0) {
        cartCount += quantity;
        document.getElementById('cart-count').textContent = cartCount;
        document.getElementById('add-message').textContent = `${quantity} items added to cart!`;
        document.getElementById('add-message').style.color = 'green';
    } else {
        document.getElementById('add-message').textContent = 'Please enter a valid quantity.';
        document.getElementById('add-message').style.color = 'red';
    }

    setTimeout(function() {
        document.getElementById('add-message').textContent = '';
    }, 3000);  // Clear the message after 3 seconds
});
