document.getElementById('name-input').addEventListener('input', function() {
    const nameInput = document.getElementById('name-input').value;
    const nameOutput = document.getElementById('name-output');
    
    if (nameInput.trim() === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = nameInput;
    }
});