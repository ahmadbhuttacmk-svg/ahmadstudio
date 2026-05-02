// ========================================
// Ahmad Studio - JavaScript
// ========================================

// Product Data
const products = [
    { id: 1, name: 'Caisi NP-FW50 1030mAh Replacement Camera Battery', category: 'accessories', price: 3700, oldPrice: 4500, image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=300', hot: true },
    { id: 2, name: 'Caisi Dual Charger For Sony FW50 Battery', category: 'accessories', price: 2300, oldPrice: 3000, image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd552?w=300', sale: '-23%' },
    { id: 3, name: 'Caisi CS-S210 Pro Profession LED Light Stand', category: 'lighting', price: 2100, oldPrice: 2500, image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=300', sale: '-16%' },
    { id: 4, name: 'Mamen SL-C60R LED Video BI Color +RGB Light', category: 'lighting', price: 21000, oldPrice: 22500, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff70?w=300', hot: true },
    { id: 5, name: 'Mamen Sl-B06 LED RGB Stick Light', category: 'lighting', price: 20000, oldPrice: 28000, image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300', sale: '-29%' },
    { id: 6, name: 'Jmary KP-2208 Multifunctional Tripod + Monopod', category: 'accessories', price: 3500, oldPrice: 4000, image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300', sale: '-13%' },
    { id: 7, name: 'Jmary MW-15 2.4G Wireless Microphone', category: 'audio', price: 5500, oldPrice: 0, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff70?w=300' },
    { id: 8, name: 'BOYA Mini 17 For Android Type C Wireless Mic', category: 'audio', price: 7900, oldPrice: 9000, image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd552?w=300', sale: '-12%' },
    { id: 9, name: 'Jmary KP-2209 Overhead Tripod for camera & mobile', category: 'accessories', price: 3600, oldPrice: 4500, image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300', sale: '-20%' },
    { id: 10, name: 'ZSYB W80B 80W Handheld Outdoor Photography Light', category: 'lighting', price: 22000, oldPrice: 27500, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300', sale: '-20%' },
    { id: 11, name: 'ZSYB CL-80Bi Bi-Color 3200-5600K LED Light', category: 'lighting', price: 16500, oldPrice: 0, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff70?w=300' },
    { id: 12, name: 'Zoom H6 All Black 6-Input/6-Track Portable Recorder', category: 'audio', price: 75000, oldPrice: 85000, image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd552?w=300', sale: '-12%' },
    { id: 13, name: '5 in 1 Reflector (5 Colors)', category: 'lighting', price: 3500, oldPrice: 4000, image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300', sale: '-13%' },
    { id: 14, name: 'Amzdeal Backdrop Stand Kits with 3 Chroma Clothes', category: 'lighting', price: 8500, oldPrice: 15000, image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=300', sale: '-43%' },
    { id: 15, name: 'Aputure Amaran 100X S Bi-Color Continues Light', category: 'lighting', price: 65000, oldPrice: 68000, image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300', sale: '-4%' },
    { id: 16, name: 'Aputure Amaran 150C RGB Continues Light', category: 'lighting', price: 98000, oldPrice: 100000, image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=300', sale: '-2%' },
    { id: 17, name: 'Aputure Amaran 200X S Bi-Color Continues Light', category: 'lighting', price: 85000, oldPrice: 92000, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff70?w=300', sale: '-8%' },
    { id: 18, name: 'Backdrop Paper Roll Size 9x36 Feet', category: 'lighting', price: 18500, oldPrice: 0, image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff70?w=300' },
    { id: 19, name: 'Bowl Reflector For Studio Lights', category: 'lighting', price: 1500, oldPrice: 3500, image: 'https://images.unsplash.com/photo-1519638831568-d9897f54ed69?w=300', sale: '-57%' },
    { id: 20, name: 'BOYA BY-BA30 Microphone Boom Arm With 3 Year Warranty', category: 'audio', price: 30000, oldPrice: 0, image: 'https://images.unsplash.com/photo-1520390138845-fd2d229dd552?w=300' }
];

// Cart and Wishlist
let cart = [];
let wishlist = [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartCount();
    updateWishlistCount();
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Product Filter Tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });

    // Close modals on outside click
    window.onclick = function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    };
});

// Load Products
function loadProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    let html = '';
    products.slice(0, 8).forEach(product => {
        html += createProductCard(product);
    });
    grid.innerHTML = html;
}

// Create Product Card
function createProductCard(product) {
    let badge = '';
    if (product.hot) badge = '<span class="sale-badge hot">HOT</span>';
    else if (product.sale) badge = `<span class="sale-badge">${product.sale}</span>`;
    
    let priceHtml = product.oldPrice > 0 
        ? `<span class="old-price">₨${product.oldPrice.toLocaleString()}</span><span class="new-price">₨${product.price.toLocaleString()}</span>`
        : `<span class="new-price">₨${product.price.toLocaleString()}</span>`;
    
    return `
        <div class="product-card">
            ${badge}
            <button class="wishlist" onclick="toggleWishlist(${product.id})"><i class="far fa-heart"></i></button>
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="category">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="price">${priceHtml}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `;
}

// Filter Products
function filterProducts(filter) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    let filteredProducts = filter === 'all' 
        ? products 
        : products.filter(p => p.category === filter);
    
    let html = '';
    filteredProducts.forEach(product => {
        html += createProductCard(product);
    });
    grid.innerHTML = html;
    
    // Update active tab
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.getAttribute('data-filter') === filter) {
            tab.classList.add('active');
        }
    });
    
    // Scroll to products
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartCount();
    showToast(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('cartCount');
    if (badge) badge.textContent = count;
}

// Toggle Wishlist
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const index = wishlist.findIndex(item => item.id === productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast(`${product.name} removed from wishlist`);
    } else {
        wishlist.push(product);
        showToast(`${product.name} added to wishlist!`);
    }
    
    updateWishlistCount();
}

// Update Wishlist Count
function updateWishlistCount() {
    const badge = document.getElementById('wishlistCount');
    if (badge) badge.textContent = wishlist.length;
}

// Modal Functions
function toggleCartModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        updateCartModal();
    }
}

function toggleWishlistModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('wishlistModal');
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
        updateWishlistModal();
    }
}

function toggleAccountModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('accountModal');
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
}

function updateCartModal() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    } else {
        let html = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            html += `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <p>₨${item.price.toLocaleString()} x ${item.quantity}</p>
                    </div>
                    <button onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                </div>
            `;
        });
        container.innerHTML = html;
    }
    
    if (totalEl) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalEl.textContent = `₨${total.toLocaleString()}`;
    }
}

function updateWishlistModal() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;
    
    if (wishlist.length === 0) {
        container.innerHTML = '<p class="empty-wishlist">Your wishlist is empty</p>';
    } else {
        let html = '';
        wishlist.forEach(item => {
            html += `
                <div class="wishlist-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="wishlist-item-info">
                        <h4>${item.name}</h4>
                        <p>₨${item.price.toLocaleString()}</p>
                        <button onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartModal();
    showToast('Item removed from cart');
}

// Quick View
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('quickViewModal');
    const content = document.getElementById('quickViewContent');
    if (!modal || !content) return;
    
    content.innerHTML = `
        <div class="quick-view-details">
            <img src="${product.image}" alt="${product.name}">
            <div class="quick-view-info">
                <span class="category">${product.category}</span>
                <h2>${product.name}</h2>
                <div class="price">
                    ${product.oldPrice > 0 ? `<span class="old-price">₨${product.oldPrice.toLocaleString()}</span>` : ''}
                    <span class="new-price">₨${product.price.toLocaleString()}</span>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id}); closeQuickView();">Add to Cart</button>
            </div>
        </div>
    `;
    modal.style.display = 'block';
}

function closeQuickView() {
    const modal = document.getElementById('quickViewModal');
    if (modal) modal.style.display = 'none';
}

// Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }
}

function toggleMobileSubmenu(element) {
    const submenu = element.nextElementSibling;
    if (submenu) {
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    }
}

// Chat
function toggleChat() {
    const modal = document.getElementById('chatModal');
    if (modal) {
        modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    
    const messages = document.querySelector('.chat-messages');
    if (messages) {
        messages.innerHTML += `
            <div class="chat-message user">
                <p>${message}</p>
            </div>
        `;
        messages.innerHTML += `
            <div class="chat-message bot">
                <p>Thank you for your message! Our team will get back to you shortly.</p>
            </div>
        `;
    }
    input.value = '';
}

function handleChatKeyPress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

// Newsletter
function subscribeNewsletter(e) {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    if (email) {
        showToast('Thank you for subscribing!');
        document.getElementById('newsletterEmail').value = '';
    }
}

// Search
function searchProducts() {
    const input = document.getElementById('searchInput');
    const query = input?.value.trim().toLowerCase();
    if (!query) return;
    
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
    );
    
    const grid = document.getElementById('productsGrid');
    if (grid && filtered.length > 0) {
        let html = '';
        filtered.forEach(product => {
            html += createProductCard(product);
        });
        grid.innerHTML = html;
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
    } else if (grid) {
        grid.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:40px;">No products found</p>';
    }
}

// Show Page (for About/Contact)
function showPage(page) {
    if (page === 'about') {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    } else if (page === 'contact') {
        showToast('Contact us at: +92 309 0001969');
    }
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    showToast('Proceeding to checkout...');
    // In a real implementation, this would redirect to checkout page
}

// Toast Notification
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Login
function login(e) {
    e.preventDefault();
    showToast('Login successful!');
    toggleAccountModal();
}

// Console Welcome
console.log('%c Welcome to Ahmad Studio! ', 'background: #ff6b00; color: white; font-size: 20px; padding: 10px;');
console.log('%c Best Online Camera Store in Pakistan ', 'color: #333; font-size: 14px;');
            const email = this.querySelector('input').value;
            
            if (email) {
                alert('Thank you for subscribing! You will receive our latest updates and promotions.');
                this.querySelector('input').value = '';
            }
        });
    }

    // ========================================
    // Search Box Enhancement
    // ========================================
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput.value.trim();
            if (query) {
                alert('Searching for: ' + query);
                // In a real implementation, this would redirect to search results
            }
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = this.value.trim();
                if (query) {
                    alert('Searching for: ' + query);
                }
            }
        });
    }

    // ========================================
    // Header Search Focus Effect
    // ========================================
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // Product Card Hover Effect
    // ========================================
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========================================
    // Category Card Animation
    // ========================================
    const categoryCards = document.querySelectorAll('.category-card, .shop-category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ========================================
    // Sticky Navigation
    // ========================================
    const mainNav = document.querySelector('.main-nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            mainNav.style.position = 'fixed';
            mainNav.style.top = '0';
            mainNav.style.width = '100%';
            mainNav.style.zIndex = '9999';
        } else {
            mainNav.style.position = 'relative';
        }
    });

    // ========================================
    // Newsletter Email Validation
    // ========================================
    const newsletterInput = document.querySelector('.newsletter-form input');
    
    if (newsletterInput) {
        newsletterInput.addEventListener('input', function() {
            this.style.border = 'none';
        });
    }

    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c Welcome to Ahmad Studio! ', 'background: #ff6b00; color: white; font-size: 20px; padding: 10px;');
    console.log('%c Best Online Camera Store in Pakistan ', 'color: #333; font-size: 14px;');
    console.log('%c Visit us at: www.ahmadstudio.pk ', 'color: #666; font-size: 12px;');
});

// ========================================
// Utility Functions
// ========================================

// Format price with Pakistani Rupee symbol
function formatPrice(price) {
    return '₨' + price.toLocaleString('en-PK');
}

// Add to cart function
function addToCart(productId, quantity = 1) {
    // In a real implementation, this would add to cart via API
    console.log('Adding product ' + productId + ' to cart, quantity: ' + quantity);
}

// Add to wishlist function
function addToWishlist(productId) {
    // In a real implementation, this would add to wishlist via API
    console.log('Adding product ' + productId + ' to wishlist');
}

// Get product by ID (placeholder)
function getProduct(productId) {
    // In a real implementation, this would fetch product from API
    return null;
}