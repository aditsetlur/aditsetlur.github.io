// Wait for the HTML document to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', () => {
    
    // Grab elements from the HTML by their IDs
    const magicBtn = document.getElementById('magicBtn');
    const outputMessage = document.getElementById('outputMessage');

    // Add a 'click' event listener to our button
    magicBtn.addEventListener('click', () => {
        // Change the text content of the output paragraph when clicked
        outputMessage.textContent = "🎉 Awesome job! You made JavaScript work!";
    });

});
