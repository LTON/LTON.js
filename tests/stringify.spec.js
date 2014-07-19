describe('LTON.stringify', function() {

  it('should format a number', function() {

    var obj = {
      value: 42
    };
    var actual = LTON.stringify(obj);
    expect(actual).toEqual('{=#value=42#}');

  });

  it('should format a string', function() {

    var obj = {
      value: 'Marvin'
    };
    var actual = LTON.stringify(obj);
    expect(actual).toEqual('{="value=Marvin"}');

  });

  it('should format true', function() {

    var obj = {
      value: true
    };
    var actual = LTON.stringify(obj);
    expect(actual).toEqual('{=?value=1?}');

  });

  it('should format false', function() {

    var obj = {
      value: false
    };
    var actual = LTON.stringify(obj);
    expect(actual).toEqual('{=?value=0?}');

  });

  it('should format a Date', function() {

    var obj = {
      value: new Date(Date.parse('2014-07-18T20:19:00+01:00'))
    };
    var actual = LTON.stringify(obj);
    expect(actual).toEqual('{=/value=2014-07-18T20:19:00.000+01/}');

  });

});