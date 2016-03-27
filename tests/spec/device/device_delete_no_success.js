var utility = require('../../obj/utility.js');
var device = require('../../obj/device.js');

describe('profile delete',function(){
    it('should show warning before deleting',function(){
        utility.loginInput();

        var pageDevice = new device();
        pageDevice.getURL();
        pageDevice.deleteDevice(1);

        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/device');

        expect(pageDevice.getDeviceWarning().isPresent()).toBe(true);
    });

    afterEach(function () {
        utility.logout();
        console.log("\n------------------------------...............------------------------------\n");
    });
});