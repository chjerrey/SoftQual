var device = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/devices';

    /* Elemente */
    var createDevice = element(by.css('button[href="#/devices/new"]'));
    var allDevices = element.all(by.tagName('md-card'));
    var warningDevice = element(by.css('div[role=alert]'));

    this.clickCreateNewDevice = function () {
        createDevice.click();
    };

    this.deleteDevice = function (position) {
        allDevices.get(position).element(by.css('md-icon[md-font-icon="mdi mdi-delete-variant"]')).click();
    };

    this.getDeviceWarning = function () {
        return warningDevice.getText();
    };

    this.getURL = function () {
        browser.get(URL);
    };
};
module.exports = device;