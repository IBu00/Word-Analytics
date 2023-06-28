
const textareaEl = document.querySelector('.textarea')
const numberOfCharEl = document.querySelector('.stat_number--characters')
const twitterEl = document.querySelector('.stat_number--twitter')
const facebookEl = document.querySelector('.stat_number--facebook')
const numberOfWordsEl = document.querySelector('.stat_number--words')
const copyTextEl = document.querySelector('.copy')
const clearTextEl = document.querySelector('.clear')

const inputHandler = () => {

    // Alert for wrong input such as <script>

    if (textareaEl.value.includes('<script>')) {
        alert(`You can't use <script> in your text.`)
        textareaEl.value = textareaEl.value.replace('<script>', '')
    }

    // Words Counter
    let numberOfWords = textareaEl.value.split(' ').length;

    if (textareaEl.value.length === 0) {
        numberOfWords = 0
    } 
    numberOfWordsEl.textContent = numberOfWords

    // Character Counter
    const numberOfChar = textareaEl.value.length;
    numberOfCharEl.textContent = numberOfChar;

    // Twitter Counter
    const twitterLimit = 280 - numberOfChar;
    twitterEl.textContent = twitterLimit;

    // Visual indicator when limit is exceeded.
    if (twitterLimit < 0) {
        twitterEl.style.color = 'red';
    } else {
        twitterEl.style.color = '';
    }

    // Facebook Counter
    const facebookLimit = 2200 - numberOfChar;
    facebookEl.textContent = facebookLimit;

    // Visual indicator when limit is exceeded.
    if (facebookLimit < 0) {
        facebookEl.style.color = 'red';
    } else {
        facebookEl.style.color = '';
    }
}

textareaEl.addEventListener('input', inputHandler);

// Copy contents of the textarea

copyTextEl.addEventListener('click', function() {
    textareaEl.select();
    textareaEl.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Text copied!')
})

// Clear contents of the textarea

clearTextEl.addEventListener('click', function() {
    textareaEl.value = '';
    numberOfWords = 0;
    numberOfWordsEl.textContent = 0;
    numberOfCharEl.textContent = 0;
    facebookEl.textContent = 2200;
    twitterEl.textContent = 280;
})

