document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const inputs = form.querySelectorAll('input');
        let valid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                alert('Please fill out all fields.');
            }
        });

        if (valid) {
            const name = form.querySelector('input[type="text"]').value;
            alert(`Thank you for registering, ${name}!`);
            form.reset();
        }
    });
});
