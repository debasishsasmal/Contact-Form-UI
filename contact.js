// Get the form and the success message element
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('success-msg');

// Add an event listener for the form's 'submit' event
form.addEventListener('submit', function(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Show the success message
    successMsg.style.display = 'block';

    // Optional: Hide the message and reset the form after a few seconds
    setTimeout(() => {
        successMsg.style.display = 'none';
        form.reset(); // Clears all the input fields
    }, 4000); // 4000 milliseconds = 4 seconds
});