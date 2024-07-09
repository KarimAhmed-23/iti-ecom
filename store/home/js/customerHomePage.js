// Check if the user is authenticated and authorized
function checkAuth(role) {
    const userRole = localStorage.getItem('userRole');
}

// Check authentication on page load
window.onload = function () {
    const pageRole = document.querySelector('title').innerText.split(' ')[1];
    checkAuth(pageRole);
};



