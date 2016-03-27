var device_form = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/devices';

    /* Variablen */
    var CATEGORY_POSITION = 0;
    var DEVICEGROUP_POSITION = 1;
    var MEDIUM_POSITION = 2;

    /* Elemente */
    var dropdownEdit = element.all(by.css('i.caret.pull-right'));
    var label = element(by.css('input[name=labels]'));
    var designation = element(by.css('input[name="designation"]'));
    var serialNumber = element(by.css('input[name="serial"]'));
    var comment = element(by.css('textarea[name="comment"]'));
    var warningDevice = element(by.css('div[role=alert]'));

    this.setLabel = function (newLabel) {
        label.clear();
        label.sendKeys(newLabel)
    };

    this.setDesignation = function (newDesignation) {
        designation.clear();
        designation.sendKeys(newDesignation);
    };

    this.setSerialNumber = function (neSerialNumber) {
        serialNumber.clear();
        serialNumber.sendKeys(neSerialNumber);
    };

    this.setComment = function (newComment) {
        comment.clear();
        comment.sendKeys(newComment);
    };

    var selectDropdownPosition = function (position) {
        browser.sleep(1000);
        element.all(by.css('a.ui-select-choices-row-inner')).get(position).click();
    };

    this.selectCategory = function (position) {
        dropdownEdit.get(CATEGORY_POSITION).click().then(function () {
            selectDropdownPosition(position);
        });
    };

    this.selectDeviceGroup = function (position) {
        dropdownEdit.get(DEVICEGROUP_POSITION).click();
        selectDropdownPosition(position);
    };

    this.selectMedium = function (position) {
        dropdownEdit.get(MEDIUM_POSITION).click();
        selectDropdownPosition(position);
    };

    this.fillInNewInputFieldsOnDeviceSection = function (label, designation, serial, comment) {
        this.setLabel(label);
        this.setDesignation(designation);
        this.setSerialNumber(serial);
        this.setComment(comment);
    };

    this.selectDropdownFromDeviceSection = function (categoryPosition, groupPosition, mediumPosition) {
        this.selectCategory(categoryPosition);
        this.selectDeviceGroup(groupPosition);
        this.selectMedium(mediumPosition);
    };

    this.getDeviceWarning = function () {
        return warningDevice.getText();
    };
};
module.exports = device_form;