// Function to encode text to number code
function encodeText(text) {
    // Convert each character to its char code and join with commas
    return Array.from(text).map(char => char.charCodeAt(0)).join(' ');
}

// Function to decode number code to text
function decodeText(code) {
    try {
        // Split by spaces and convert each number back to character
        return code.split(' ').map(num => String.fromCharCode(parseInt(num))).join('');
    } catch (error) {
        throw new Error('Invalid code format');
    }
}

// DOM Elements
const textInput = document.getElementById('textInput');
const encodeBtn = document.getElementById('encodeBtn');
const encodedResult = document.getElementById('encodedResult');
const codeOutput = document.getElementById('codeOutput');
const copyCodeBtn = document.getElementById('copyCodeBtn');

const codeInput = document.getElementById('codeInput');
const decodeBtn = document.getElementById('decodeBtn');
const decodedResult = document.getElementById('decodedResult');
const textOutput = document.getElementById('textOutput');

// Encode button event listener
encodeBtn.addEventListener('click', () => {
    const text = textInput.value.trim();
    
    if (!text) {
        alert('Please enter some text to encode');
        return;
    }
    
    try {
        const encoded = encodeText(text);
        codeOutput.value = encoded;
        encodedResult.classList.remove('hidden');
    } catch (error) {
        alert('Error encoding text: ' + error.message);
    }
});

// Copy code button event listener
copyCodeBtn.addEventListener('click', () => {
    if (codeOutput.value) {
        codeOutput.select();
        document.execCommand('copy');
        const originalText = copyCodeBtn.textContent;
        copyCodeBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyCodeBtn.textContent = originalText;
        }, 2000);
    }
});

// Decode button event listener
decodeBtn.addEventListener('click', () => {
    const code = codeInput.value.trim();
    
    if (!code) {
        alert('Please enter a code to decode');
        return;
    }
    
    try {
        const decoded = decodeText(code);
        textOutput.value = decoded;
        decodedResult.classList.remove('hidden');
    } catch (error) {
        alert('Error decoding code: ' + error.message);
    }
});

// Auto-resize textareas
function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

textInput.addEventListener('input', () => autoResize(textInput));
textOutput.addEventListener('input', () => autoResize(textOutput));

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Set focus on text input
    textInput.focus();
});