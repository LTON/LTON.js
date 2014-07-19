describe('LTON.escape', function() {

	it('should escape double quotes', function(){

		var str = '"None at all"';
		var actual = LTON.escape(str);
		expect(actual).toEqual('\\"None at all\\"');

	});

	it('should escape newlines', function() {

		var str = 'Don\'t\nPanic';
		var actual = LTON.escape(str);
		expect(actual).toEqual('Don\'t\\nPanic');

	});

	it ('should escape carriage returns', function() {

		var str = 'Don\'t\rPanic';
		var actual = LTON.escape(str);
		expect(actual).toEqual('Don\'t\\rPanic');

	});

	it ('should escape carriage return + newline', function() {

		var str = 'Don\'t\r\nPanic';
		var actual = LTON.escape(str);
		expect(actual).toEqual('Don\'t\\r\\nPanic');

	});

	it ('should escape backslashes', function() {

		var str = 'C:\\Temp';
		var actual = LTON.escape(str);
		expect(actual).toEqual('C:\\\\Temp');

	});

});