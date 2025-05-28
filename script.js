// Login functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('dashboard').style.display = 'flex';
});

// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked nav item
        this.classList.add('active');
        
        // Hide all content sections
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Show the selected section
        const sectionId = this.getAttribute('data-section') + 'Section';
        document.getElementById(sectionId).style.display = 'block';
    });
});

// Alert dismiss functionality
const dismissButtons = document.querySelectorAll('.alert-dismiss');
dismissButtons.forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.alert-item').style.display = 'none';
    });
});

// Toggle button functionality
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all toggle buttons in the same container
        const parentContainer = this.closest('.toggle-container');
        parentContainer.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
    });
});

// Simulate real-time clock on dashboard
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelector('.time').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 60000);
updateClock();
