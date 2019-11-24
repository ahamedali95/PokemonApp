import mockAxios from '../__mocks__/axios';
import fetchPokemons from '../api/fetchPokemons';

describe('fetchPokemons', () => {
  const pokemons = [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    }
  ];

  it('returns an array of pokemons', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.resolve({ data: { results: pokemons } });
    });

    const response = await fetchPokemons();
    expect(response).toEqual(pokemons);
  });

  it('returns an empty array if it fails to fetch pokemons', async () => {
    mockAxios.get.mockImplementationOnce(() => {
      return Promise.reject([]);
    });

    const response = await fetchPokemons();
    expect(response).toEqual([]);
  });
});