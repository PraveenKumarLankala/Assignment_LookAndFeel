// Sample item data, replace with dynamic data as necessary
const items = [
    { id: 1, name: "Men's Nike Cap", img: "./img/Men/img7.png", price: 80.00, tax: 2.99 },
    { id: 2, name: "Women Air Shirt", img: "./img/Women/img7.png", price: 120.00, tax: 3.99 },
    { id: 3, name: "Nike Kids Dress", img: "./img/Kids/img7.png", price: 180.00, tax: 2.09 },
    { id: 4, name: "Men's Nike shoes", img: "./img/Men/img4.png", price: 100.00, tax: 5.60 }
];

function populateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear existing items
    let total = 0;
    let totalTax = 0;

    items.forEach(item => {
        const itemTotal = item.price + item.tax;
        total += item.price;
        totalTax += item.tax;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${item.img}" alt="${item.name}" style="width: 100px; height: auto;"> ${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${item.tax.toFixed(2)}</td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${item.id})" class="btn btn-danger">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });

    // Update the total price and tax in the table footer
    document.getElementById('totalPrice').textContent = `$${(total + totalTax).toFixed(2)}`;
}

function removeItem(itemId) {
    const index = items.findIndex(item => item.id === itemId);
    if (index > -1) {
        items.splice(index, 1); // Remove item from the array
        populateCart(); // Repopulate cart after removal
    }
}

// Initial population of the cart
document.addEventListener('DOMContentLoaded', populateCart);
