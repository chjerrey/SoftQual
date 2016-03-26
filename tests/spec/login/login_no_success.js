

describe('login no success', function() {
    it('should display error message', function() {
        var login = require('../../obj/login.js');
        login.getURL();
        login.loginInput('a@b', '1');
        browser.waitForAngular();
        expect(login.getLogInErrorMessage()).toEqual("Invalid credentials");
    });
});