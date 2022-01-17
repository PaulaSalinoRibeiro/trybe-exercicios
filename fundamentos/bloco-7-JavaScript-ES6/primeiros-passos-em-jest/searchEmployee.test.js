const searchEmployee = require('./searchEmployee.js');

describe('validation of function searchEmployee', () => {

  it('test if exist', () => {
    expect(typeof searchEmployee).toBe('function');
  });

  it('test if find id = 8579-6 and detail = firstName', () => {
    const id ='8579-6';
    const detail = 'firstName';
    expect(searchEmployee(id, detail)).toBe('Ana');
  });

  it('test a id invalid', () => {
    const id = '0000-0';
    const detail = 'firstName';
    expect(() => { searchEmployee(id, detail) }).toThrow();
  });

  it('test error.mesagem for id invalid', () => {
    const id = '0000-0';
    const detail = 'firstName';
    expect(() => { searchEmployee(id, detail) }).toThrowError(new Error('ID não identificada'));
  });

  it('test a detail invalid', () => {
    const id = '8579-6';
    const detail = 'xablau';
    expect(() => { searchEmployee(id, detail) }).toThrow();
  });

  it('test error.mensage for detail invalid', () => {
    const id = '8579-6';
    const detail = 'xablau';
    expect(() => { searchEmployee(id, detail) }).toThrowError(new Error('Informação indisponível'))
  });

});
