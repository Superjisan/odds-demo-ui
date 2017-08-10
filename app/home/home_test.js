'use strict';

describe('odds.home module', function() {

  beforeEach(module('odds.home'));

  describe('home controller', function(){

  	var homeCtrl;
  	beforeEach(inject(function($controller) {
    	homeCtrl = $controller('HomeCtrl');
    }))

    it('should be defined', function() {
    	expect(homeCtrl).toBeDefined();
    });

    it('should have 8 initial users', function() {
    	expect(homeCtrl.users.length).toEqual(10);
    });

  });
});
