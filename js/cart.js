/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // document.getElementById('cart-container').innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
 // DONE: Find the table body
 let showCartTB = document.querySelector('#cart tbody');
 console.log(showCartTB);
 // TODO: Iterate over the items in the cart
 for (let item in cart.items) {
   // TODO: Create a TR
 let showCartRow = document.createElement('tr');
 // TODO: Create a TD for the delete link, quantity,  and the item
 let cartDeleteTD = document.createElement('td');
 let cartQuantityTD = document.createElement('td');
 let cartItemTD = document.createElement('td');
 showCartTB.appendChild(showCartRow);
 showCartRow.appendChild(cartDeleteTD);
 showCartRow.appendChild(cartQuantityTD);
 showCartRow.appendChild(cartItemTD);
 // TODO: Add the TR to the TBODY and each of the TD's to the TR
 };
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();





