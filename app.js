// Function to filter anime cards based on user input
function filterAnime() {
    const input = document.getElementById('txt').value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to toggle the visibility of the login link
function toggleLogin() {
    const loginLink = document.querySelector('.toggle');
    if (loginLink.innerText === 'Login') {
        loginLink.innerText = 'Logout';
    } else {
        loginLink.innerText = 'Login';
    }
}

// Function to show an alert when an anime card is clicked
function showAlert(animeTitle) {
    alert(`You clicked on ${animeTitle}!`);
}

// Attach event listeners to the cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        showAlert(title);
    });
});

// Attach the filter function to the input field
document.getElementById('txt').addEventListener('input', filterAnime);

// Attach the toggle function to the login link
document.querySelector('.toggle').addEventListener('click', toggleLogin);