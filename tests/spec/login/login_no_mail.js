

describe('login no mail', function() {
    it('should display error message for mail', function() {
        var login = require('../../obj/login.js');
        login.getURL();
        login.loginInput('', 'mailrequired');
        browser.waitForAngular();
        expect(login.getMailErrorMessage()).toEqual("This field is required.");
    });
});