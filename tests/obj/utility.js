var login = require('./login.js');

var utility = function(){

    this.loginInput = function(){
        login.loginInput('admin@ceventis.com','password');
        expect(browser.getLocationAbsUrl()).toBe('/devices');
    };

    this.logout = function(){
        login.logout();
    };
};

module.exports = new utility();