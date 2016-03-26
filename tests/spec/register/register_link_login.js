var login = require('../../obj/login.js');
var register = require('../../obj/register.js');

describe('logout new device',function(){
    it('should show a warning',function(){
        login.getURL();
        login.clickCreateAccount();

        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/register');

        var pageRegister = new register();
        pageRegister.getURL();
        pageRegister.loginLink();

        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/login');
    });
});