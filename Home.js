// Get modal element
const modal = document.getElementById('loginModal');
const openModalButton = document.getElementById('open-login-modal');
const closeModalButton = document.querySelector('.close');

// Open the login modal
openModalButton.addEventListener('click', function () {
    modal.style.display = 'block';
});

// Close the login modal when the user clicks the close button
closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Handle the login form submission (for demo purposes)
document.getElementById('login').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simple validation (You can expand this to match your server-side logic)
    if (!email || !password) {
        document.getElementById('login-error').textContent = 'Please enter both email and password.';
        return;
    }

    // Simulate a successful login (for demo purposes)
    document.getElementById('login-error').textContent = '';
    alert('Login successful!');
    modal.style.display = 'none';
});

// Hamburger menu toggle for sidebar
const hamburgerIcon = document.getElementById('hamburger-icon');
const nav = document.querySelector('nav');

// Toggle the nav sidebar
hamburgerIcon.addEventListener('click', function () {
    nav.classList.toggle('active');
});

// Optional: Add keyboard accessibility for the hamburger menu (for better usability)
hamburgerIcon.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
        nav.classList.toggle('active');
    }
});
 // Get elements
 const Popup = document.getElementById("myPopup");
 const btn = document.getElementById("openPopupBtn");
 const closeBtn = document.querySelector(".close");

 // Open modal on button click
 btn.onclick = function() {
   Popup.style.display = "block";
 }

 // Close modal on close button click
 closeBtn.onclick = function() {
   Popup.style.display = "none";
 }

 // Close modal if user clicks outside the modal content
 window.onclick = function(event) {
   if (event.target === Popup) {
     Popup.style.display = "none";
   }
 }

