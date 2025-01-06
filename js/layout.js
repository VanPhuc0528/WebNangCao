document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            alert(`You clicked on ${link.textContent}!`);
        });
    });
});

function handleLogout() {
    // Simulate a logout request
    console.log("User logged out");
    // Redirect to home or login page after logout
    window.location.href = "/login";
}