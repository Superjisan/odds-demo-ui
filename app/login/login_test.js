'use strict';

fdescribe('odds.login module', function() {

  beforeEach(module('odds.login'));

  describe('login controller', function(){

  	var loginCtrl;
  	beforeEach(inject(function($controller) {
    	loginCtrl = $controller('LoginCtrl');
    }))

    it('should be defined', function() {
    	expect(loginCtrl).toBeDefined();
    });

  });
});
