let counterValue = 0;

        const decrementBtn = document.querySelector('[data-action="decrement"]');
        const incrementBtn = document.querySelector('[data-action="increment"]');
        const valueSpan = document.getElementById('value');
        
        decrementBtn.addEventListener('click', () => {
            counterValue--;
            valueSpan.innerText = counterValue;
        });

        incrementBtn.addEventListener('click', () => {
            counterValue++;
            valueSpan.innerText = counterValue;
        }); 