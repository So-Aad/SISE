document.getElementById('languageSwitcher').addEventListener('change', function() {
    const selectedLanguage = this.value;
    const elements = document.querySelectorAll('[data-en], [data-ar]');
    const body = document.body; 
   

    if (selectedLanguage === 'en') {
        body.setAttribute('dir', 'ltr'); // Set direction to left-to-right
        body.style.textAlign = 'left'; // Optional: Align text to the left
    } else if (selectedLanguage === 'ar') {
        body.setAttribute('dir', 'rtl'); // Set direction to right-to-left
        body.style.textAlign = 'right'; // Optional: Align text to the right
    }

    elements.forEach(element => {
        if (selectedLanguage === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else if (selectedLanguage === 'ar') {
            element.textContent = element.getAttribute('data-ar');
        }
    });
});

// Initialize the page with the default language
document.getElementById('languageSwitcher').dispatchEvent(new Event('change'));
