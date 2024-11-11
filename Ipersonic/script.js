class PersonalityQuiz {
    constructor() {
        this.displayLogo();
        this.displayFooter();
    }

    displayDropdownTopMenu() {

    }

    displayLogo() {
        let logoHTML = '<a href="index.html"><img src="ipersonic-logo.png" width="100"></a>&nbsp;&nbsp;';
        logoHTML += '<a href="test.html" class="btn btn-sm btn-orange">Mulai tes <i class="fa fa-play icon-sm" aria-hidden="true"></i></a>';
        
        const logoContainer = document.querySelector("#logo-container");
        logoContainer.innerHTML = logoHTML;
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