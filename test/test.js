import getStatHealh from '../src/index';

test('checking health', () => {
  const input = [
    {
      name: 'petro',
      health: 10,
    },
    {
      name: 'igor',
      health: 43,
    },
    {
      name: 'nagibator',
      health: 99,
    },
  ];

  expect(getStatHealh(input[0])).toBe('critical');
  expect(getStatHealh(input[1])).toBe('wounded');
  expect(getStatHealh(input[2])).toBe('healty');
});
