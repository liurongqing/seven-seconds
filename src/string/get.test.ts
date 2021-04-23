import { get } from './get'

test('get 从对象中取一组值出来', () => {
  const obj = {
    selector: { to: { val: 'val to select' } },
    target: [1, 2, { a: 'test' }],
  }
  expect(get(obj, 'selector.to.val', 'target[0]', 'target[2].a')).toEqual(['val to select', 1, 'test'])
})