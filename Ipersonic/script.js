class PersonalityQuiz {
    constructor() {
        console.log("tes constructor");
        this.displayFooter();
    }

    displayAlert() {
        alert("running first on module");
    }

    displayLogo() {

    }

    displayDropdownTopMenu() {

    }
    
    displayHeader() {

    }

    displayFooter() {
        let footerHTML = '<div class="container">';
        footerHTML += '<p>© iPersonic    Personality Test   Career Test   Persönlichkeitstest   Berufstest   Privacy Policy   Felicitas Heyne   Impressum   Help & Contact   iPersonic supports Audiopedia Foundation</p>';
        footerHTML += '<p>English | Deutsch | Español | Français | Português | 中文 | Русский | हिंदी | العربية | 日本語 | Bahasa Indonesia | Italiano | Svenska | Nederlands | עברית | Afrikaans | Bosanski | Català | Čeština | Hrvatski | Magyar | Română | Slovenski | Slovenský | Srpski | Български</p>';
        footerHTML += '</div>';
        const footerContainer = document.querySelector("#footer-container");
        footerContainer.innerHTML = footerHTML;
    }
}

// initiate Personality Quiz Module
new PersonalityQuiz();