var device_form = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/devices';

    /* Variablen */
    var CATEGORY_POSITION = 0;
    var DEVICEGROUP_POSITION = 1;
    var MEDIUM_POSITION = 2;
    var INTERVAL_POSITION = 3;
    var REMINDER_POSITION = 4;
    var MAINTENANCE_TOGGLE = 0;
    var NOTIFICATION_TOGGLE = 1;
    
    var position;

    /* Elemente */
    var buttonSave = element(by.css('button.btn.btn-primary.m-r-sm'));
    var buttonClear = element(by.css('button.btn.btn-default'));
    var dropdownEdit = element.all(by.css('i.caret.pull-right'));
    var label = element(by.css('input[name=labels]'));
    var designation = element(by.css('input[name="designation"]'));
    var serialNumber = element(by.css('input[name="serial"]'));
    var comment = element(by.css('textarea[name="comment"]'));
    var periodStart = element(by.css('input[name="period"]'));
    var mail = element(by.css('input[name="email"]'));

    var isMaintenance = false;
    var isNotification = false;

    this.getDevice = function (position) {
        this.position = position;
        browser.get(URL + position + '/edit');
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
    
    var selectDropdownPosition = function (position) {
        browser.sleep(1000);
        element.all(by.css('a.ui-select-choices-row-inner')).get(position).click();
    };

    this.clickButtonSave = function () {
        buttonSave.click();
    };

    this.clickButtonClear = function () {
        buttonClear.click();
    };

    this.setLabel = function (newLabel) {
        label.clear();
        label.sendKeys(newLabel)
    };

    this.appendLabel = function (appendLble) {
        label.sendKeys(" " + appendLble);
    };

    this.setDesignation = function (newDesignation) {
        designation.clear();
        designation.sendKeys(newDesignation);
    };

    this.appendDesignation = function (appendDesignation) {
        designation.sendKeys(appendDesignation);
    };

    this.setSerialNumber = function (neSerialNumber) {
        serialNumber.clear();
        serialNumber.sendKeys(neSerialNumber);

    };

    this.appendSerialNumber = function (appendSerialNumber) {
        serialNumber.sendKeys(appendSerialNumber);
    };

    this.setComment = function (newComment) {
        comment.clear();
        comment.sendKeys(newComment);
    };

    this.appendComment = function (appendComment) {
        comment.sendKeys(appendComment);
    };

    this.toggleMaintenanceMode = function () {
        browser.executeScript("$('input[type=checkbox]').first().click()")
    };

    this.toggleNotificationMode = function () {
        browser.executeScript("$('input[type=checkbox]').last().click()")
    };

    this.selectMaintenanceInterval = function (intervalPosition) {
        dropdownEdit.get(INTERVAL_POSITION).click();
        browser.waitForAngular();
        //console.log(expect());
        //selectDropdowPosition(intervalPosition);
    };

    this.setPeriodStart = function (startDate) {
        periodStart.clear();
        periodStart.sendKeys(startDate);
    };

    this.selectReminder = function (reminderInterval) {
        dropdownEdit.get(REMINDER_POSITION).click();
        selectDropdownPosition(reminderInterval);
    };

    this.setNotificationEmail = function (newEmail) {
        mail.clear();
        mail.sendKeys(newEmail);
    };

    this.appendNotificationEmail = function (appendEmail) {
        mail.sendKeys(appendEmail);
    };

    this.fillInNewInputFieldsOnDeviceSection = function (label, designation, serial, comment) {
        this.setLabel(label);
        this.setDesignation(designation);
        this.setSerialNumber(serial);
        this.setComment(comment);
    };

    this.appendToInputFieldsOnDeviceSection = function (label, designation, serial, comment) {
        this.appendLabel(label);
        this.appendDesignation(designation);
        this.appendSerialNumber(serial);
        this.appendComment(comment);
    };

    this.selectDropdownFromDeviceSection = function (categoryPosition, groupPosition, mediumPosition) {
        this.selectCategory(categoryPosition);
        this.selectDeviceGroup(groupPosition);
        this.selectMedium(mediumPosition);
    };

    this.setMaintenanceSection = function (interval, date) {
        if (!isMaintenance) {
            isMaintenance = true;
            this.toggleMaintenanceMode();
        }
        this.selectMaintenanceInterval(interval);
        this.setPeriodStart(date);
    };

    this.disableMaintenanceSection = function(){
        if (isMaintenance) {
            isMaintenance = false;
            this.toggleMaintenanceMode();
        }
    };

    this.setNotificationSection = function(reminderInterval,email){
        if(!isNotification){
            isNotification = true;
            this.toggleNotificationMode();
        }
        this.selectReminder(reminderInterval);
        this.setNotificationEmail(email);
    };

    this.disableNotifcationSection = function(){
        if(isNotification){
            isNotification = false;
            this.toggleNotificationMode();
        }
    };
};
module.exports = device_form;