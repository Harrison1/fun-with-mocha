var assert = require("chai").assert;
var aClass = require("../app/js/className.js");

describe('addClass', function() {
	it('should add class to element', function(){
		var element = { className: '' };

		aClass.addClass(element, 'test-class');

		assert.equal(element.className, 'test-class');
	});

	it('should not add class which already exits', function () {
		var element = { className: 'exists'};

		aClass.addClass(element, 'exists');

		var numClasses = element.className.split(' ').length;
		assert.equal(numClasses, 1);
	});
});