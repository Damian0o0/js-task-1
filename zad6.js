const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', function() {
    const inputValue = inputField.value;
    const expectedLength = parseInt(inputField.getAttribute('data-length'));

    if (inputValue.length === expectedLength) {
        inputField.classList.remove('invalid');
        inputField.classList.add('valid');
    } else {
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
});