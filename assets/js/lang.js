// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key === "flag") {
            element.src = langData[key];
        }
        else {
            // If the key is not found in the language data, log a warning
            // and do not update the element to avoid errors
            if (langData[key] === undefined) {
                console.warn(`Translation key "${key}" not found in language data.`);
                return;
            }
            // If slashes in key, split by slashes and access nested properties (not used yet)
            if (key.includes('/')) {
                const keys = key.split('/');
                element.innerHTML = keys.reduce((acc, curr) => acc[curr], langData);
            } 
            // If no slashes, directly access the property
            else {
                element.innerHTML = langData[key];
            }
        }
    });
}

// Function to set the language preference
function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Function to fetch language data
async function fetchLanguageData(lang) {
    const response = await fetch(`assets/lang/${lang}.json`);
    return response.json();
}

// Function to change language
async function changeLanguage(lang) {
    await setLanguagePreference(lang);

    console.log(`Language preference set to ${lang}. Reloading page...`);
    const langData = await fetchLanguageData(lang);
    console.log(`Language data for ${lang} loaded successfully.`);
    updateContent(langData);
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'en';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
});