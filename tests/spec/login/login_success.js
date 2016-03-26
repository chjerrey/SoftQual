var utility = require('../../obj/utility.js');

describe('login success', function() {
    it('should login', function() {
        var login = require('../../obj/login.js');
        login.getURL();
        login.loginDefault();
        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/devices');
    });

    afterEach(function () {
        utility.logout();
        console.log("\n------------------------------...............------------------------------\n");
    });
});