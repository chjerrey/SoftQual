var login = require('../../obj/login.js');
var reset = require('../../obj/forgot_password.js');

describe('reset no mail', function() {
    it('should display error message for mail', function() {
        login.getURL();
        login.forgotPasswordLink();
        expect(browser.getLocationAbsUrl()).toBe('/forgotpwd');

        var pageReset = new reset();
        pageReset.getURL();
        pageReset.resetInput('');

        browser.waitForAngular();
        expect(pageReset.getMailErrorMessage()).toEqual("This field is required.");
    });
});