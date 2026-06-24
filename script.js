const products = [
    { name: "iPhone 15", price: 139900, icon: "📱" }, { name: "MacBook M3", price: 114900, icon: "💻" },
    { name: "Cotton Shirt", price: 999, icon: "👕" }, { name: "Sports Shoes", price: 1999, icon: "👟" },
    { name: "Smart Watch", price: 2499, icon: "⌚" }, { name: "Headphones", price: 1499, icon: "🎧" },
    { name: "Backpack", price: 899, icon: "🎒" }, { name: "Coffee Mug", price: 299, icon: "☕" },
    { name: "Gaming Mouse", price: 1200, icon: "🖱️" }, { name: "Sunglasses", price: 500, icon: "🕶️" },
    { name: "Wallet", price: 700, icon: "👛" }, { name: "Book", price: 300, icon: "📚" },
    { name: "Camera", price: 45000, icon: "📷" }, { name: "Water Bottle", price: 400, icon: "💧" },
    { name: "Perfume", price: 1200, icon: "🧴" }, { name: "Yoga Mat", price: 800, icon: "🧘" },
    { name: "Bluetooth Speaker", price: 2500, icon: "🔊" }, { name: "Desk Lamp", price: 600, icon: "💡" },
    { name: "Cricket Bat", price: 3000, icon: "🏏" }, { name: "Football", price: 900, icon: "⚽" },
    { name: "Headband", price: 150, icon: "🎗️" }, { name: "Notebook", price: 100, icon: "📒" },
    { name: "Calculator", price: 500, icon: "🧮" }, { name: "Keyboard", price: 1500, icon: "⌨️" },
    { name: "Power Bank", price: 1800, icon: "🔋" }, { name: "Umbrella", price: 400, icon: "☂️" },
    { name: "Cap", price: 300, icon: "🧢" }, { name: "Gloves", price: 250, icon: "🧤" },
    { name: "Keyring", price: 50, icon: "🔑" }, { name: "Pillow", price: 600, icon: "🛌" },
    { name: "Toaster", price: 2000, icon: "🍞" }, { name: "Iron", price: 1200, icon: "🔌" },
    { name: "Hard Disk", price: 4000, icon: "💾" }, { name: "Webcam", price: 3500, icon: "📹" },
    { name: "Headset", price: 2000, icon: "🎧" }, { name: "Pendrive", price: 600, icon: "💾" },
    { name: "Smart Bulb", price: 900, icon: "💡" }, { name: "Extension Cord", price: 400, icon: "🔌" },
    { name: "Microphone", price: 1500, icon: "🎤" }, { name: "Tripod", price: 1200, icon: "📸" },
    { name: "Raincoat", price: 800, icon: "🧥" }, { name: "Socks", price: 150, icon: "🧦" },
    { name: "Necktie", price: 400, icon: "👔" }, { name: "Belt", price: 500, icon: "🥋" },
    { name: "Slippers", price: 300, icon: "🩴" }, { name: "Blanket", price: 1500, icon: "🛌" },
    { name: "Towel", price: 300, icon: "🧖" }, { name: "Comb", price: 100, icon: "🪮" },
    { name: "Scissors", price: 200, icon: "✂️" }, { name: "Glue Stick", price: 50, icon: "🧴" }
];

let cart = [];

function renderProducts() {
    const filter = document.getElementById('search').value.toLowerCase();
    const container = document.getElementById('product-container');
    container.innerHTML = products.filter(p => p.name.toLowerCase().includes(filter)).map((p) => `
        <div class="card">
            <span style="font-size: 3rem;">${p.icon}</span>
            <h3>${p.name}</h3>
            <p>₹${p.price.toLocaleString()}</p>
            <button class="btn" onclick="addToCart('${p.name}')">Add to Cart</button>
        </div>
    `).join('');
}

function addToCart(name) {
    const item = products.find(p => p.name === name);
    cart.push(item);
    updateCartUI();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total-price').innerText = total.toLocaleString();
    document.getElementById('cart-items').innerHTML = cart.map((item, i) => `
        <div class="cart-item">
            <span>${item.name} - ₹${item.price.toLocaleString()}</span>
            <button class="remove-btn" onclick="removeFromCart(${i})">Remove</button>
        </div>
    `).join('');
}

document.getElementById('theme-toggle').onclick = () => document.body.classList.toggle('dark-mode');
renderProducts();
