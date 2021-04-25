/**
 * 创建一个包含当前 URL 参数的对象
 * @param url url 字符串
 * @returns 参数对象
 * 
 * @example
 * ```ts
 * getURLParameters('google.com'); // {}
 * getURLParameters('http://url.com/page?name=Adam&surname=Smith');
 * // {name: 'Adam', surname: 'Smith'}
 * ```
 */
export const getURLParameters = (url: string) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
    ),
    {}
  );