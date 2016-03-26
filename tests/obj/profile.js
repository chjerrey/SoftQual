var login = function () {
    /* URL zur Website */
    var URL = 'http://localhost:9000/#/profile';

    /* Elemente */
    var buttonDelete = element(by.buttonText('Delete'));
    var buttonEdit = element(by.buttonText('Edit'));

    this.getURL = function () {
        browser.get(URL);
    };

    this.clickButtonDelete = function () {
        buttonDelete.click();
    };

    this.clickButtonDeleteDummy = function () {
        return true;
    };

    this.clickButtonEdit = function () {
        buttonEdit.click();
    };
};
module.exports = new login();