/**
 * 从对象中按给定选择器的一组属性取出对应的一组值
 * 
 * @category Object
 * 
 * @param from 原对象
 * @param selectors 一组属性
 * @returns 一组值
 * 
 * @example
 * ```ts
 * import { get } from 'seven-seconds'
 * const obj = {
 *   selector: { to: { val: 'val to select' } },
 *   target: [1, 2, { a: 'test' }],
 * }
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a');
 * // ['val to select', 1, 'test']
 * ```
 */
export const get = (from: Object, ...selectors: string[]) =>
  [...selectors].map(s =>
    s.replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter((t: string) => t !== '')
      .reduce((prev: Object, cur: string) => prev && prev[cur], from)
  )