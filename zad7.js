const fontSizeControl = document.getElementById('font-size-control');
const textSpan = document.getElementById('text');

fontSizeControl.addEventListener('input', function() {
    const fontSize = this.value; 
    textSpan.style.fontSize = fontSize + 'px'; 
}); 