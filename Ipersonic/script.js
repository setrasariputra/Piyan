class PersonalityQuiz {
    constructor() {
        this.init();
    }

    init() {
        this.displayLogo();
        this.displayDropdownTopMenu();
        this.displayFooter();
    }

    displayDropdownTopMenu() {
        let topmenuHTML = '<ul>';
        topmenuHTML += '<li>';
        topmenuHTML += '<a href="#">';
        topmenuHTML += '<span class="show-767"><i class="fa fa-bars" aria-hidden="true"></i></span>';
        topmenuHTML += '<span class="hide-767">Tipe kepribadian <i class="fa fa-caret-down icon-sm" aria-hidden="true"></i></span>';
        topmenuHTML += '</a>';
        topmenuHTML += '<ul>';
        topmenuHTML += '<li><a href="#">Idealis Penyelaras</a></li>';
        topmenuHTML += '<li><a href="#">Idealis Terlibat</a></li>';
        topmenuHTML += '<li><a href="#">Pemikir Dinamis</a></li>';
        topmenuHTML += '<li><a href="#">Pemikir Pendobrak</a></li>';
        topmenuHTML += '<li><a href="#">Idealis Spontan</a></li>';    
        topmenuHTML += '</ul>';
        topmenuHTML += '</li>';
        topmenuHTML += '<li class="hide-767"><a href="#">Bahasa Indonesia</a></li>';
        topmenuHTML += '</ul>';

        const topmenuContainer = document.querySelector("#topmenu-container");
        topmenuContainer.innerHTML = topmenuHTML;
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