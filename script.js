let cart = [];
let total = 0;

// Elements select karna
const countDisplay = document.getElementById('cart-count');
const totalPriceDisplay = document.getElementById('total-price');
const cartItemsList = document.getElementById('cart-items-list');
const emptyMessage = document.getElementById('empty-message');
const modal = document.getElementById('cart-modal');
const cartStatusBtn = document.querySelector('.cart-status');
const closeBtn = document.querySelector('.close-btn');

// 1. Add to Cart Logic
document.querySelectorAll('.product-card').forEach(card => {
    const button = card.querySelector('.buy-btn');
    const name = card.querySelector('h3').innerText;
    // Price me se ₹ aur comma hata kar number banana
    const price = parseInt(card.querySelector('.price').innerText.replace('₹', '').replace(',', ''));

    button.addEventListener('click', () => {
        // Item ko cart array me push karna
        cart.push({ name, price });
        total += price;
        
        // Counter aur Total update karna
        countDisplay.innerText = cart.length;
        totalPriceDisplay.innerText = total.toLocaleString('en-IN');
        
        // UI update karna
        updateCartUI();
    });
});

// 2. Cart Items ki list screen par dikhana (Naya Code)
function updateCartUI() {
    cartItemsList.innerHTML = ''; // Pehle list saaf karo
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<p id="empty-message">Your cart is empty!</p>';
        return;
    }

    // Har item ke aage ❌ button lagane ke liye
    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <div>
                <strong style="margin-right: 10px;">₹${item.price.toLocaleString('en-IN')}</strong>
                <span onclick="removeItem(${index})" style="cursor:pointer; color:red; font-weight:bold;">❌</span>
            </div>
        `;
        cartItemsList.appendChild(itemElement);
    });
}

// 3. Item Remove karne ka asli logic
window.removeItem = function(index) {
    total -= cart[index].price; // Total paise kam karo
    cart.splice(index, 1);      // List se item hatao
    
    countDisplay.innerText = cart.length; // Counter kam karo
    totalPriceDisplay.innerText = total.toLocaleString('en-IN'); // Naya total dikhao
    updateCartUI(); // Cart ko refresh karo
};


// 3. Modal Open/Close Logic
cartStatusBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Bahar click karne par modal band hona
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
// 4. Search Filter Logic
const searchInput = document.getElementById('search-input');
const productCards = document.querySelectorAll('.product-card');

searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();

    productCards.forEach(card => {
        const productName = card.querySelector('h3').innerText.toLowerCase();
        
        // Agar product ka naam search text se match karta hai toh dikhao, nahi toh chhupao
        if (productName.includes(searchText)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
// 5. Dark Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Icon badalne ke liye logic
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.innerText = '☀️';
    } else {
        themeToggleBtn.innerText = '🌙';
    }
});
