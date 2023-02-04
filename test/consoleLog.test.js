describe('this will include some console log data', () => {
  test('test1', () => {
    console.log('hello world!');
    expect(1).toBe(1);
  });

  test('test2', () => {
    console.log(
      JSON.stringify({ name: 'dr', age: 14, sex: 'boy', widget: 60 })
    );
    expect(1).toBe(1);
  });
});



describe('this will include some console log data 2', () => {
  test('test1', () => {
    console.dir('hello world!');
    expect(1).toBe(1);
  });

  test('test2', () => {
    console.warn(
      JSON.stringify({ name: 'dr', age: 14, sex: 'boy', widget: 60 }, null, 2 )
    );
    expect(1).toBe(1);
  });

  test('test2', () => {
    console.info(
      JSON.stringify({ name: 'dr', age: 14, sex: 'boy', widget: 60 }, null, 2)
    );
    expect(1).toBe(1);
  });
});
