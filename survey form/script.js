document.getElementById("survey-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const formData = new FormData(form);
    
    // Log each form entry
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });

    // Use Formspree's API to submit the form data
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Redirect to the thank you page
            window.location.href = 'thank-you.html';
        } else {
            // Handle error here (e.g., display a message)
            alert('There was a problem with your submission.');
        }
    })
    .catch(error => {
        // Handle network error here
        alert('There was a network error.');
    });
});

document.getElementById('other').addEventListener('change', function() {
    const textarea = document.getElementById('other-preference');
    // Toggle display based on checkbox status
    textarea.style.display = this.checked ? 'block' : 'none';
});

document.getElementById('other').addEventListener('change', function() {
    const textarea = document.getElementById('other-preference');
    textarea.style.display = this.checked ? 'block' : 'none';
    if (!this.checked) {
        textarea.value = ''; // Clear textarea if "Other" is unchecked
    }
});

document.getElementById('survey-form').addEventListener('submit', function(event) {
    const otherCheckbox = document.getElementById('other');
    const otherPreference = document.getElementById('other-preference').value;
    const combinedPreference = document.getElementById('combined-preference');

    if (otherCheckbox.checked && otherPreference) {
        combinedPreference.value = otherPreference;
    } else {
        combinedPreference.value = ""; // Clear if "Other" is unchecked or empty
    }
});

