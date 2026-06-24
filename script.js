const products = [
    { name: "iPhone 15", price: 139900, icon: "📱" }, { name: "MacBook M3", price: 114900, icon: "💻" },
    { name: "Cotton Shirt", price: 999, icon: "👕" }, { name: "Sports Shoes", price: 1999, icon: "👟" },
    { name: "Smart Watch", price: 2499, icon: "⌚" }, { name: "Headphones", price: 1499, icon: "🎧" },
    { name: "Backpack", price: 899, icon: "🎒" }, { name: "Coffee Mug", price: 299, icon: "☕" },
    { name: "Gaming Mouse", price: 1200, icon: "🖱️" }, { name: "Sunglasses", price: 500, icon: "🕶️" },
    { name: "Wallet", price: 700, icon: "👛" }, { name: "Book", price: 300, icon: "📚" },
    { name: "Camera", price: 45000, icon: "📷" }, { name: "Water Bottle", price: 400, icon: "💧" },
    { name: "Perfume", price: 1200, icon: "🧴" }
];

const container = document.getElementById('product-container');
let count = 0;

products.forEach(p => {
    container.innerHTML += `
        <div class="card">
            <span style="font-size: 3rem;">${p.icon}</span>
            <h3 style="margin: 10px 0;">${p.name}</h3>
            <p style="color: #6366f1; font-weight: bold;">₹${p.price.toLocaleString()}</p>
            <button class="btn" onclick="updateCart()">Add to Cart</button>
        </div>
    `;
});

function updateCart() {
    count++;
    document.getElementById('cart-count').innerText = count;
}

document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark-mode');


