describe('multiple tests all passed', () => {
  test('succeed examples 1', () => {
    expect(1).toBe(1);
  });

  test('succeed examples 2', () => {
    expect(1).toBe(1);
  });

  test('succeed examples 3', () => {
    expect(1).toBe(1);
  });

  test('succeed examples 4', () => {
    expect(1).toBe(1);
  });

  test('succeed examples 5', () => {
    expect(1).toBe(1);
  });

  test('succeed examples 6', () => {
    expect(1).toBe(1);
  });

  describe('multiple tests all passed inner level', () => {
    test('succeed inner level examples 1', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 2', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 3', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 4', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 5', () => {
      expect(1).toBe(1);
    });
  });

  describe('multiple tests all passed inner level 2', () => {
    test('succeed inner level 2 examples 1', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level 2 examples 2', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level 2 examples 3', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level 2 examples 4', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level 2 examples 5', () => {
      expect(1).toBe(1);
    });
  });
});

describe('multiple tests others', () => {
  test.todo('multiple examples todo');

  test.skip('multiple examples skip', () => {
    expect(1).toBe(1);
  });

  test('multiple examples 3', () => {
    expect(1).toBe(2);
  });

  test('succeed examples 4', () => {
    expect(1).toBe(1);
  });


  describe('multiple tests all passed inner level', () => {
    test.skip('multiple inner level examples 1', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 2', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 3', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 4', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level examples 5', () => {
      expect(1).toBe(1);
    });
  });

  describe('multiple tests all passed inner level 2', () => {
    test('multiple inner level 2 examples 1', () => {
      expect(1).toBe(2);
    });
  
    test('succeed inner level 2 examples 2', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level 2 examples 3', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level 2 examples 4', () => {
      expect(1).toBe(1);
    });
  
    test('succeed inner level 2 examples 5', () => {
      expect(1).toBe(1);
    });
  });
});