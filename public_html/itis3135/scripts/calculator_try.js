const calculator = document.querySelector('.calculator');
const keys= calculator.querySelector('.calculator_keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
                
        const key = e.target;
        const action = key.dataset.action;

        if (!action) {
            console.log('number key');
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key');
        }

        if (action === 'decimal') {
            console.log('decimal key');
        }

        if (action === 'clear') {
            console.log('clear key');
        }

        if (action === 'calculate') {
            console.log('equal key');
        }

        const display = document.querySelector('.calculator_display');

        keys.addEventListener('click', e => {
            if (e.target.matches('button')) {
                const key = e.target;
                const action = key.dataset.action;
                const keyContent = key.textContent;
                const displayedNum = display.textContent;
            }
        })

        if(!action) {
            if(displayNum === '0') {
                display.textContent = keyContent;
            }
        }

        if (!action) {
            if (displayedNum === '0') {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.';
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed');
        }

        Array.from(key.parentNode.children)
            .forEach (k => k.class.remove('is-depressed'))
    }
})
