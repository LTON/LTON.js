var LTON;
(function(LTON) {

	function escape(string) {
		return string.replace(/\\/gm, '\\\\')
			.replace(/"/gm, '\\"')
			.replace(/\r/gm, '\\r')
			.replace(/\n/gm, '\\n');
	}

	var zeroes = '0000000000000000000000000000000000000';

	function pad(number, length) {
		if (typeof length === 'undefined') length = 2;
		var str = '' + number,
				add = length - str.length;
		if (add > 0) {
			str = zeroes.substr(0, add) + str;
		}
		return str;
	}

	function timezoneOffset(date) {
		var plusOrMinus,
			  offset = date.getTimezoneOffset();
		if (offset === 0) {
			return 'Z';
		}
		if (offset < 0) {
			plusOrMinus = '+';
			offset = Math.abs(offset);
		} else {
			plusOrMinus = '-';
		}
		var minutes = offset % 60;
		return plusOrMinus + pad(Math.floor(offset / 60)) + (minutes ? pad(minutes) : '');
	}

	function isDate(value) {
		return value instanceof Date && !isNaN(value.valueOf());
	}

	function toIsoString(date) {
    return date.getFullYear() + '-' +
        pad(date.getMonth() + 1) + '-' +
        pad(date.getDate()) + 'T' +
        pad(date.getHours()) + ':' +
        pad(date.getMinutes()) + ':' +
        pad(date.getSeconds()) + '.' +
        pad(date.getMilliseconds(), 3) +
        timezoneOffset(date);
	}

	function format(key, value) {
		var delimit;
		switch (typeof value) {
			case 'number':
				delimit = '##';
				break;
			case 'string':
				delimit = '""';
				value = escape(value);
				break;
			case 'boolean':
				delimit = '??';
				value = value ? 1 : 0;
				break;
			default:
				if (isDate(value)) {
					delimit = '//';
					value = toIsoString(value);
				} else {
					console.log('Fail: ' + value);
				}
		}

		return delimit[0] + key + '=' + value + delimit[1];
	}

	function stringify(object) {
		var bits = [];
		for (var key in object) {
			if (object.hasOwnProperty(key)) {
				bits.push(format(key, object[key]));
			}
		}
		return '{=' + bits.join('') + '}';
	}

	LTON.stringify = stringify;
	LTON.escape = escape;

})(LTON || (LTON = {}));