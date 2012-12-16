'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
  	var scope, ctrl, $httpBackend;

  	beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones_data/phones.json').
        respond([{'name': 'Nexus S'}, {'name': 'Motorola DROID'}])

  		scope = $rootScope.$new();
  		ctrl = $controller(PhoneListCtrl, {$scope: scope});
  	}));

  	it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toBeUndefined();
      $httpBackend.flush();

      expect(scope.phones).toEqual([{'name': 'Nexus S'}, {'name': 'Motorola DROID'}]);
    });

    it('should set default dropdown to "By age"', function() {
    	expect(scope.orderProp).toBe('age');
    });
    
  });
});