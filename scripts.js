// Shopping cart functionality
let cartItems = [];
let totalPrice = 0;

// The function to add an item to the cart
function addToCart(componentName, price) {
    // Create a new cart item object
    const newItem = {
        name: componentName,
        price: price
    };

    // Adds the item to the cart
    cartItems.push(newItem);

    // Updates the total price
    totalPrice += price;

    // Updates the shopping cart
    updateCart();
}

// The function to update the shopping cart
function updateCart() {
  const shoppingCart = document.getElementById('shoppingCart');
  shoppingCart.innerHTML = ''; // Clear the existing cart items

  // This will Loop through the cart items and create each item
  cartItems.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      // Adding a remove button to each item in the shopping cart
      const removeButton = document.createElement('img');
      removeButton.src = 'bin.png'; // adds a trach can image to the buttin
      removeButton.alt = 'Remove'; 
      removeButton.classList.add('remove-btn');
      removeButton.addEventListener('click', () => removeFromCart(index));
      listItem.appendChild(removeButton);
      shoppingCart.appendChild(listItem);
  });

  // This updates the total price
  const totalPriceElement = document.getElementById('totalPrice');
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
  totalPriceElement.style.fontWeight = 'bold'; 
}

function removeFromCart(index) {
  // This removes the item from the cart
  const removedItem = cartItems.splice(index, 1)[0];
  // This subtracts the removed item's price from the total
  totalPrice -= removedItem.price;
  updateCart();
}

// This function adds event listeners to the buttons
function addListenersToButtons() {
    const addToCartButtons = document.querySelectorAll('.btn-add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const componentName = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            addToCart(componentName, price);
        });
    });
}

// This function adds an event listener for the DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    addListenersToButtons();
});
