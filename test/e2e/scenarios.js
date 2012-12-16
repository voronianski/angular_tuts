'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
	describe('PhoneList view', function() {
		beforeEach(function() {
			browser().navigateTo('../../app/index.html');
		});

		it('should filter the phones when user types into search', function() {
			expect(repeater('.phones li').count()).toBe(20);

			input('query').enter('nexus');
			expect(repeater('.phones li').count()).toBe(1);

			input('query').enter('motorola');
			expect(repeater('.phones li').count()).toBe(8);
		});

		it('should display current filter value within #status element', function() {
			expect(element('#status').text()).toMatch(/Current filter: \s*$/);
			input('query').enter('nexus');
			expect(element('#status').text()).toMatch(/Current filter: nexus\s*$/);
		});

		it('should be possible to control phone order via the drop down select box', function() {
			input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

			expect(repeater('.phones li', 'Phone List').column('phone.name')).
				toEqual(["Motorola XOOM\u2122 with Wi-Fi", "MOTOROLA XOOM\u2122"]);

			select('orderProp').option('By name');

			expect(repeater('.phones li', 'Phone List').column('phone.name')).
				toEqual(["MOTOROLA XOOM\u2122", "Motorola XOOM\u2122 with Wi-Fi"]);
		});
	});
});
