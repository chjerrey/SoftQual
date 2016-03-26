exports.config = {
    framework: 'jasmine', // Jasmin Framework
    jasmineNodeOpts: {
        showColors: true // Farben in Ergebnisprotokoll
    },
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    multiCapabilities: [{ // mehrere Browser
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],
    
    suites: { // die Testfälle
        login: ['spec/login/login_no_success.js', 'spec/login/login_no_mail.js', 'spec/login/login_invalid_mail.js', 'spec/login/login_no_password.js', 'spec/login/login_success.js'],
        logout: ['spec/logout/logout_logout_new_device.js', 'spec/logout/logout_success.js']
    },

    defaultMail: 'admin@ceventis.com', // Standardwert Mail
    defaultPassword: 'password' // Standardwert Passwort
}
