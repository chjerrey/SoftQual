var utility = require('../../obj/utility.js');

describe('profile delete',function(){
    it('should show warning before deleting',function(){
        utility.loginInput();

        //TODO: implement delete no success

        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/device');
    });

    afterEach(function () {
        utility.logout();
        console.log("\n------------------------------...............------------------------------\n");
    });
});