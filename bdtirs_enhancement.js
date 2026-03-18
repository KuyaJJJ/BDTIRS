// bdtirs_enhancement.js

// Email Registration
function registerEmail(email) {
    if (!validateEmail(email)) {
        console.log('Invalid email address');
        return false;
    }
    // Code to register the email (e.g., sending to server)
    console.log('Email registered:', email);
    return true;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

// Language Translation
let currentLanguage = 'ENG'; // Default language
const translations = {
    'ENG': {
        greeting: 'Hello',
        farewell: 'Goodbye'
    },
    'FIL': {
        greeting: 'Kamusta',
        farewell: 'Paalam'
    }
};

function setLanguage(lang) {
    if (translations[lang]) {
        currentLanguage = lang;
        console.log('Language set to:', lang);
    } else {
        console.log('Language not supported');
    }
}

function getTranslation(key) {
    return translations[currentLanguage][key] || key;
}

// Settings Module
let settings = {
    backgroundImage: '',
};

function setBackgroundImage(imageUrl) {
    settings.backgroundImage = imageUrl;
    console.log('Background image set to:', imageUrl);
}

// Background Image Integration
function applyBackgroundImage() {
    if (settings.backgroundImage) {
        document.body.style.backgroundImage = `url(${settings.backgroundImage})`;
    }
}

// Example Usage
setLanguage('FIL');
console.log(getTranslation('greeting')); // Outputs: Kamusta

// Set a background image
setBackgroundImage('path/to/image.jpg');
applyBackgroundImage();
