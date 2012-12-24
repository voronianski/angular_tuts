'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {
	it('should redirect index.html to index.html#!', function() {
		browser().navigateTo('../../app/index.html');
		expect(browser().location().url()).toBe('/');
	});

	describe('PhoneList view', function() {
		beforeEach(function() {
			browser().navigateTo('../../app/index.html#!/phones');
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

		it('should render correct phone links', function() {
			input('query').enter('nexus');
			element('.phones li a').click();
			expect(browser().location().url()).toBe('/phones/nexus-s');
		});
	});
	
	describe('PhoneDetail view', function() {
		beforeEach(function() {
			browser().navigateTo('../../app/index.html#!/phones/nexus-s');
		});

		it('should display nexus-s page', function() {
			expect(binding('phone.name')).toBe('Nexus S');
		});

		it('should display 4 thumbs', function() {
			expect(repeater('.phone-thumbs li').count()).toBe(4);
		});

		it('should display first array phone image as main phone image', function() {
			expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
		});

		it('should change main image when thumbnail is clicked', function() {
			element('.phone-thumbs li:nth-child(3) img').click();
			expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.2.jpg');

			element('.phone-thumbs li:nth-child(1) img').click();
			expect(element('img.phone').attr('src')).toBe('img/phones/nexus-s.0.jpg');
		});
	});
});
