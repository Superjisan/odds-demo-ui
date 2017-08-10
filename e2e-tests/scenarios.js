'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('ODDS', function() {


  it('should automatically redirect to /login when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/login");
  });

  

});
