import { replaceLast } from './replaceLast'

test('abcabdef 替换成 abcggdef', () => {
  expect(replaceLast('abcabdef', 'ab', 'gg')).toBe('abcggdef');
});

test('abcabdef 替换成 abcggdef', () => {
  expect(replaceLast('abcabdef', /ab/, 'gg')).toBe('abcggdef');
});

test('abcabdef 替换成 abcabdef', () => {
  expect(replaceLast('abcabdef', 'ad', 'gg')).toBe('abcabdef');
});

test('abcabdef 替换成 abcabdef', () => {
  expect(replaceLast('abcabdef', /ad/, 'gg')).toBe('abcabdef');
});