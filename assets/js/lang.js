// Function to update content based on selected language
function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key === "flag") {
            element.src = langData[key];
        }
        else {
            // If slashes in key, split by slashes and access nested properties
            if (key.includes('/')) {
                try { 
                    const keys = key.split('/');
                    // console.log(`Resolving translation key "${key}" to nested properties: ${keys.join(' -> ')}`);
                    newElement = keys?.reduce((acc, curr) => { return acc[curr]; }, langData);
                    // console.info(`Translation key "${key}" resolved to "${newElement}".`);
                } catch (error) {
                    // Catch errors to avoid breaking the script if a key is not found
                    console.error(`Error resolving translation key "${key}":`, error);
                    newElement = undefined;
                }
            } 
            // If the key is a simple string, directly access the property
            else {
                newElement = langData[key];
            }
            // If the key is not found in the language data, log a warning
            // and do not update the element to avoid errors
            if (newElement === undefined) {
                console.warn(`Translation key "${key}" not found in language data.`);
                return;
            }
            // If no slashes, modify the innerHTML or textContent of the element
            else {
                // console.log(`Updating element with key "${element.innerHTML}" to "${newElement}".`);
                element.innerHTML = newElement;
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