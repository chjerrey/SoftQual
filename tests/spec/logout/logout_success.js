



describe('login success', function() {
    it('should login', function() {
        var login = require('../../obj/login.js');
        login.getURL();
        login.logout();
        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/login');
    });
});