// Function to navigate between screens
function navigateTo(screenId) {
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    const target = document.getElementById(screenId);
    if (target) {
        target.classList.add('active');
    }

    // Call initializeMap when navigating to the 'location' screen
    // This check 'typeof L !== 'undefined'' ensures Leaflet library is loaded before calling its functions
    if (screenId === 'location' && typeof L !== 'undefined') {
        initializeMap();
    }
}

// Function to go back in browser history
function goBack() {
    window.history.back();
}

// Declare map variable globally so it can be accessed by initializeMap and locateVehicle
let map;
let userMarker; // Also declare userMarker globally for updating user's location

// Function to initialize the Leaflet map
function initializeMap() {
    // Check if map already exists to prevent re-initialization
    // If it exists, remove it before creating a new one to avoid errors
    if (map) {
        map.remove();
    }

    // Default location (e.g., Hafeezpet, Hyderabad)
    const defaultLat = 17.4715;
    const defaultLng = 78.3570;

    // Initialize the map on the 'map' div with a default view
    map = L.map('map').setView([defaultLat, defaultLng], 15);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker for the vehicle's default location
    L.marker([defaultLat, defaultLng])
        .addTo(map)
        .bindPopup("Vehicle Location: Hafeezpet, Hyderabad")
        .openPopup();
}

// Function to locate the user's vehicle (or user's current location)
function locateVehicle() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                // Set map view to user's current location
                map.setView([lat, lng], 16);

                // Update existing marker or create a new one
                if (userMarker) {
                    userMarker.setLatLng([lat, lng]);
                } else {
                    userMarker = L.marker([lat, lng])
                        .addTo(map)
                        .bindPopup("Your Current Location")
                        .openPopup();
                }
            },
            (error) => {
                // Handle geolocation errors
                console.error("Geolocation error:", error);
                alert("Unable to retrieve your location. Please enable location services and try again.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}


// Event listener to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initial navigation to the entry screen
    navigateTo('programme-entry');

    // Fix Login Navigation (assuming the button has an ID or is the first button in the login screen)
    // It's better to add a specific ID to the login button, e.g., <button id="loginBtn">Login</button>
    const loginBtn = document.querySelector('#login button'); // Selects the first button inside the #login screen
    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default form submission or page reload
            navigateTo('home');    // Navigate to Home screen
        });
    }

    // Attach click listeners to bottom navigation items if they exist
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetScreen = item.getAttribute('data-target');
            if (targetScreen) {
                navigateTo(targetScreen);
            }
        });
    });

    // Handle clicks for buttons inside .home-buttons that navigate
    const homeButtons = document.querySelectorAll('.home-buttons button');
    homeButtons.forEach(button => {
        // Ensure the button has an onclick that is not already handled for navigation
        // Or remove the inline onclicks and handle all navigation here
        if (!button.hasAttribute('onclick')) { // Only add if no inline onclick
            button.addEventListener('click', (event) => {
                const screenId = event.target.getAttribute('onclick').match(/navigateTo\('([^']+)'\)/);
                if (screenId && screenId[1]) {
                    navigateTo(screenId[1]);
                }
            });
        }
    });


    // Add event listeners for the control panel switches if they're purely JS controlled
    document.querySelectorAll('.control-panel .switch input').forEach(toggle => {
        toggle.addEventListener('change', (event) => {
            const statusSpan = event.target.closest('.action-row').querySelector('.toggle-status');
            if (statusSpan) {
                statusSpan.textContent = event.target.checked ? 'ON' : 'OFF';
            }
        });
    });

});
