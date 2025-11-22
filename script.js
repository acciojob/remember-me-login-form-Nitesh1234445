//your JS code here. If required.
const form = document.getElementById('loginForm');
let usernameInput = document.getElementById('username');
let passwordInput = document.getElementById('password');
let checkbox = document.getElementById('checkbox');
const existingBtn = document.getElementById('existing');
let submit = document.getElementById('submit');

submit.addEventListener("click", (e) => {
    e.preventDefault();

    let username = usernameInput.value.trim();
    let password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
    }

    // update visibility after saving
    updateExistingButton();
});

// --- FUNCTION TO UPDATE VISIBILITY ---
function updateExistingButton() {
    let localUsername = localStorage.getItem('username');
    let localPassword = localStorage.getItem('password');

    if (localUsername && localPassword) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
}

updateExistingButton();

existingBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let savedUsername = localStorage.getItem('username');
    let savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        alert(`Logged in as ${savedUsername}`);
    }
});
