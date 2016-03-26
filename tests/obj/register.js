var register = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/register';

    /* Elemente */
    var linkLogin = element(by.className('panel-footer wrapper text-lg'));

    this.getURL = function () {
        browser.get(URL);
    };

    this.loginLink = function () {
        linkLogin.click();
    };
};
module.exports = register;