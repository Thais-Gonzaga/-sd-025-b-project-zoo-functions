const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('sem parâmetros, retorna undefined', () => {
    const actual = handlerElephants();
    expect(actual).toBeUndefined();
  });

  it('quando passado um parâmetros diferente de uma string, retorna "Parâmetro inválido, é necessário uma string"', () => {
    const actual = handlerElephants([]);
    expect(actual).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('quando passado "name", retorna o seguinte array ["Ilana", "Orval", "Bea", "Jefferson"]', () => {
    const actual = handlerElephants('names');
    expect(actual).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('quando passado "averageAge", retornar um número próximo a 10.5', () => {
    const actual = handlerElephants('averageAge');
    expect(actual).toBe(10.5);
  });

  it('quando passado um argumento string não existente , retornar null', () => {
    const actual = handlerElephants('elephants');
    expect(actual).toBeNull();
  });

  it('quando passado " location" , retornar a localização NW', () => {
    const actual = handlerElephants('location');
    expect(actual).toBe('NW');
  });

  it('quando passado " popularity" , retornar um typeof number', () => {
    const actual = handlerElephants('popularity');
    expect(typeof actual).toBe('number');
  });

  it('quando passado " count" , retornar 4', () => {
    const actual = handlerElephants('count');
    expect(actual).toBe(4);
  });
});
