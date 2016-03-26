

describe('login invalid mail', function() {
    it('should display error message for mail', function() {
        var login = require('../../obj/login.js');
        login.getURL();
        login.loginInput('{}/+^~|%&=?', '');
        browser.waitForAngular();
        expect(login.getMailErrorMessage()).toEqual("Not a valid e-mail address.");
    });
});