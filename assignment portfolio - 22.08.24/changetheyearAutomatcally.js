// Get the current year
const year = new Date().getFullYear();
// Set the current year into the HTML
document.getElementById('year').textContent = year;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
