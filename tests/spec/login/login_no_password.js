

describe('login no password', function() {
    it('should display error message for password', function() {
        var login = require('../../obj/login.js');
        login.getURL();
        login.loginInput('password@required.com', '');
        browser.waitForAngular();
/*DEBUG        clientRowName = element(by.css('div[valdr-message=password]'));
        clientRowName.getText().then(function (text) {
            console.log('PasswordErrorMessage: '+text);
        });*/
        expect(element(by.css('div[valdr-message=password]')).getText()).toEqual("This field is required.");
//        expect(login.getPasswordErrorMessage).toEqual("This field is required.");
    });
});