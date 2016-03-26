var device = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/devices';

    /* Elemente */
    var expandNavSpan = element(by.css('.caret'));
    var logoutLink = element(by.linkText('Logout'));
    var createDevice = element(by.css('button[href="#/devices/new"]'));
    var allDevices = element.all(by.tagName('md-card'));

    var login = require('./login.js');

/*    this.selectSingleDeviceEdit = function (position) {
        allDevices.get(position).element(by.linkText('EDIT')).click();
    };*/

/*    this.getDeviceInformation = function (position) {
        var currentDevice = allDevices.get(position).element(by.tagName('ul')).all(by.tagName('li'));
    };*/

/*    this.selectSingleDeviceView = function (position) {
        allDevices.get(position).element(by.linkText('VIEW')).click();
    };*/

/*    this.getDeviceCount = function () {
        return allDevices.count();
    };*/

    this.clickCreateNewDevice = function () {
        createDevice.click();
    };

/*    this.deletDevice = function (position) {
        allDevices.get(position).element(by.css('md-icon[md-font-icon="mdi mdi-delete-variant"]')).click();
    };*/

/*    this.deleteSingleDevice = function (position) {
        allDevices.get(position).element(by.css('button .md-icon-button md-button .md-ink-ripple')).click();
    };*/

    this.getURL = function () {
        browser.get(URL);
    };

/*    this.expandNav = function () {
        expandNavSpan.click();
    };*/

/*    this.logout = function () {
        expandNavSpan.click();
        logoutLink.click();
    };*/
};
module.exports = device;