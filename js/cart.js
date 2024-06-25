// Sample item data, replace with dynamic data as necessary
const items = [
    { id: 1, name: "Product 1", img: "./img/Category offer/pexels-micaasato-1082529.jpg", price: 29.99, tax: 2.99 },
    { id: 2, name: "Product 2", img: "./img/Category offer/pexels-kish-1488464.jpg", price: 39.99, tax: 3.99 },
    { id: 3, name: "Product 3", img: "./img/Category offer/pexels-pixabay-46212.jpg", price: 25.99, tax: 2.09 },
    { id: 4, name: "Product 4", img: "./img/Category offer/pexels-pixabay-267320.jpg", price: 55.99, tax: 5.60 }
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
