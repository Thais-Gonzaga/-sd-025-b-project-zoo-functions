const countAnimals = require('../src/countAnimals');

describe('5 - Implemente a função `countAnimals` que contabiliza a quantidade de espécies de animais residentes no zoológico', () => {
  it('sem parâmetros, retorna todas as espécies e a quantidade de residentes de cada uma', () => {
    const expected = {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6,
    };
    const actual = countAnimals();

    expect(actual).toStrictEqual(expected);
  });

  it('recebendo como parâmetro um objeto com a chave \'specie\', retorna a quantidade de animais daquela espécie', () => {
    {
      const actual = countAnimals({ specie: 'penguins' });
      const expected = 4;
      expect(actual).toBe(expected);
    }

    {
      const actual = countAnimals({ specie: 'giraffes' });
      const expected = 6;
      expect(actual).toBe(expected);
    }
  });

  it('recebendo como parâmetro um objeto com a chave \'specie\' e \'sex\', retorna a quantidade de animais daquela espécie, no sexo selecionado', () => {
    {
      const actual = countAnimals({ specie: 'bears', sex: 'female' });
      const expected = 0;
      expect(actual).toBe(expected);
    }

    {
      const actual = countAnimals({ specie: 'elephants', sex: 'male' });
      const expected = 2;
      expect(actual).toBe(expected);
    }
  });
});
