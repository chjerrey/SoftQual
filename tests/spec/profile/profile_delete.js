var utility = require('../../obj/utility.js');
var login = require('../../obj/login.js');
var profile = require('../../obj/profile.js');

describe('profile delete',function(){
    it('should show warning before deleting',function(){
        utility.loginInput();

        login.profileLink();

        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/profile');

        var pageProfile = new profile();
        expect(pageProfile.clickButtonDeleteDummy()).toBe(false);
    });

    afterEach(function () {
        utility.logout();
        console.log("\n------------------------------...............------------------------------\n");
    });
});