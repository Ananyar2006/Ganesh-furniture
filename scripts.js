// Function to handle adding items to the cart
function addToCart(productName, price) {
    let cart = localStorage.getItem('cart');
  
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
  
    // Check if the product is already in the cart
    const productIndex = cart.findIndex(item => item.productName === productName);
  
    if (productIndex !== -1) {
      alert('Product is already in the cart!');
      return;
    }
  
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
    displayCart(); // Update cart display after adding
  }
  
  // Function to handle removing items from the cart
  function removeFromCart(productName) {
    let cart = localStorage.getItem('cart');
  
    if (!cart) {
      return;
    }
  
    cart = JSON.parse(cart);
  
    const updatedCart = cart.filter(item => item.productName !== productName);
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Product removed from cart!');
    displayCart(); // Update cart display after removing
  }
  
  // Function to display cart items
  function displayCart() {
    const cartItems = document.getElementById('cart-items');
  
    if (!cartItems) {
      
      return;
    }
  
    let cart = localStorage.getItem('cart');
  
    if (!cart) {
      cartItems.innerHTML = '<p>Cart is empty</p>';
      return;
    }
  
    cart = JSON.parse(cart);
  
    if (cart.length === 0) {
      cartItems.innerHTML = '<p>Cart is empty</p>';
      return;
    }
  
    // Clear the previous contents
    cartItems.innerHTML = '';
  
    // Display each item in the cart
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.productName} - ₹${item.price}`;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.onclick = function() {
        removeFromCart(item.productName); // Remove by product name
      };
  
      listItem.appendChild(removeButton);
      cartItems.appendChild(listItem);
    });
  }
  
  // Call displayCart initially to show cart contents when the page loads
  displayCart();
  