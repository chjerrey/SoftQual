var reset = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/forgotpwd';

    /* Elemente */
    var inputMail = element(by.css('form input[name=email]'));
    var buttonReset = element(by.css('[type=submit]'));
    var errorMail = element(by.css('div[valdr-message=email]'));

    var linkLogin = element(by.className('panel-footer wrapper text-lg'));

    this.getURL = function () {
        browser.get(URL);
    };

    this.setInputMail = function (mail) {
        inputMail.sendKeys(mail);
    };

    this.clickButtonReset = function () {
        buttonReset.click();
    };

    this.loginLink = function () {
     linkLogin.click();
     };

    this.getMailErrorMessage = function () {
        return errorMail.getText();
    };

    this.resetInput = function (mail) {
        this.getURL();
        this.setInputMail(mail);
        this.clickButtonReset();
    };
};
module.exports = reset;