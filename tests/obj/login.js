var login = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/login';
    
    /* Elemente */
    var inputMail = element(by.css('form[name=login] input[name=email]'));
    var inputPassword = element(by.css('form[name=login] input[name=password]'));
    var buttonLogin = element(by.css('[type=submit]'));
    var linkCreateAccount = element(by.className('panel-footer wrapper text-lg text-center'));
    var linkForgotPassword = element(by.linkText('Forgot password?'));
    var errorMail = element(by.css('div[valdr-message=email]'));
    var errorPassword = element(by.css('div[valdr-message=password]'));
    var errorLogin = element(by.css('div[role=alert]'));

    var menuUser = element.all(by.css('a.dropdown-toggle')).first();
//    var menuUser = element(by.css('a.dropdown-toggle'));
    var linkLogout = element(by.linkText('Logout'));
    var linkProfile = element(by.linkText('Profile'));

    this.getURL = function () {
        browser.get(URL);
    };

    this.setInputMail = function (mail) {
        inputMail.sendKeys(mail);
    };

    this.setInputPassword = function (password) {
        inputPassword.sendKeys(password);
    };

    this.clickButtonLogin = function () {
        buttonLogin.click();
    };

    this.logout = function () {
        this.getURL();
        menuUser.click();
        linkLogout.click();
    };

    this.profileLink = function () {
        this.getURL();
        menuUser.click();
        linkProfile.click();
    };

    this.clickCreateAccount = function () {
        linkCreateAccount.click();
    };

    this.forgotPasswordLink = function () {
        linkForgotPassword.click();
    };

    this.getMailErrorMessage = function () {
        return errorMail.getText();
    };

    this.getPasswordErrorMessage = function () {
        return errorPassword.getText();
    };

    this.getLogInErrorMessage = function () {
        return errorLogin.getText();
    };

    this.loginDefault = function () { // Login mit Standardwerten
        var conf = require('../conf.js');
        this.getURL();
        this.setInputMail(conf.config.defaultMail);
        this.setInputPassword(conf.config.defaultPassword);
        this.clickButtonLogin();
    };

    this.loginInput = function (mail, password) { // Login mit übergebenen Werten
        this.getURL();
        this.setInputMail(mail);
        this.setInputPassword(password);
        this.clickButtonLogin();
    };
};
module.exports = new login();