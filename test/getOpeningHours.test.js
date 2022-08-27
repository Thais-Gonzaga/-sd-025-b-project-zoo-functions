const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  const result = 'The zoo is closed';
  it('sem parâmetros, retorna um object', () => {
    const actual = getOpeningHours();
    expect(typeof actual).toBe('object');
    expect(actual).not.toBeNull();
    expect(Array.isArray(actual)).toBeFalsy();
    expect(actual instanceof Object).toBeTruthy();
  });

  it('passando como parâmetros "Monday" e "09:00-AM", retorna uma string "The zoo is closed"', () => {
    const actual = getOpeningHours('Monday', '09:00-AM');
    expect(actual).toBe(result);
  });

  it('passando como parâmetros "Tuesday" e "09:00-AM", retorna uma string "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    expect(actual).toBe('The zoo is open');
  });

  it('passando como parâmetros hora em outro abreviado "09-AM", retorna um erro "The should `The what should represent a number` represent a number"', () => {
    expect(() => getOpeningHours('Tuesday', '09')).toThrow('The minutes should represent a number');
  });

  it('passando como parâmetros hora em outro formato, retorna um erro "The abbreviation must be \'AM\' or \'PM\'"', () => {
    expect(() => getOpeningHours('Tuesday', '09:00')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('passando como parâmetros "Tuesday" e "08:00-PM", retorna uma string "The zoo is closed"', () => {
    const actual = getOpeningHours('Tuesday', '08:00-PM');
    expect(actual).toBe(result);
  });

  it('passando uma hora maior que 12, retorna um erro "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Tuesday', '13:43-pm')).toThrow('The hour must be between 0 and 12');
  });

  it('passando minutos maior que 59 min, retorna um erro "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Tuesday', '09:63-AM')).toThrow('The minutes must be between 0 and 59');
  });

  it('passando um dia errado, retorna um erro  "The day must be valid. Example: Monday"', () => {
    expect(() => getOpeningHours('Uesday', '09:00-AM')).toThrow();
  });

  it('passando como parâmetros "Monday" e "12:00-AM", retorna uma string "The zoo is closed"', () => {
    const actual = getOpeningHours('Monday', '12:00-AM');
    expect(actual).toBe('The zoo is closed');
  });

  it('passando como parâmetros "Tuesday" e "12:00-AM", retorna uma string "The zoo is open"', () => {
    const actual = getOpeningHours('Tuesday', '12:00-PM');
    expect(actual).toBe('The zoo is open');
  });
});
