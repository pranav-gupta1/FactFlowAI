// googleTranslateAPI.js

function translateText(text, targetLanguage) {
    const translations = {
        "en": text,
        "hi": "यह एक नकली अनुवाद है।",
        "es": "Esta es una traducción falsa.",
        //more...
    };
    return translations[targetLanguage] || text;
}

console.log(translateText("This is a random translation.", "hi"));
