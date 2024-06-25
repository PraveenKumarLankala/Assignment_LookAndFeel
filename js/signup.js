document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.needs-validation');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // Custom validation for email match
            const email = document.getElementById('email').value;
            const confirmEmail = document.getElementById('confirmEmail').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;

            if (email !== confirmEmail) {
                document.getElementById('confirmEmail').classList.add('is-invalid');
                return false; // Stop submission if emails do not match
            } else {
                document.getElementById('confirmEmail').classList.remove('is-invalid');
            }

            if (!firstName.trim() || !lastName.trim()) {
                alert('First name and last name must be filled out!');
                return false; // Stop submission if names are empty
            }
        }

        form.classList.add('was-validated'); // Proceed with validation
        form.submit(); // Submit the form if everything is valid
    });
});
