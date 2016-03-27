var utility = require('../../obj/utility.js');
var device = require('../../obj/device.js');
var deviceForm = require('../../obj/device_form.js');

describe('logout new device',function(){
    it('should show a warning',function(){
        utility.loginInput();

        var pageDevice = new device();
        pageDevice.getURL();
        pageDevice.clickCreateNewDevice();

        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/devices/new');

        var pageDeviceEdit = new deviceForm();
        pageDeviceEdit.fillInNewInputFieldsOnDeviceSection("Label1","Name","1234-5678-93","Comment");
        pageDeviceEdit.selectDropdownFromDeviceSection(1,1,1);

        utility.logout();

        browser.waitForAngular();
        expect(browser.getLocationAbsUrl()).toBe('/devices/new');
        
        expect(pageDeviceEdit.getDeviceWarning().isPresent()).toBe(true);
    });

    afterEach(function () {
        utility.logout();
        console.log("\n------------------------------...............------------------------------\n");
    });
});