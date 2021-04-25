/**
 * 格式化时间戳
 * @param ms 时间毫秒
 * @returns 可读格式的字符串
 * 
 * @example
 * ```ts
 * import { formatDuration } from './formatDuration'
 * formatDuration(1001); // '1 second, 1 millisecond'
 * formatDuration(34325055574);
 * // '397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds'
 * ```
 */
export const formatDuration = (ms: number) => {
  if (ms < 0) ms = -ms
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
    second: Math.floor(ms / 1000) % 60,
    millisecond: Math.floor(ms) % 1000
  }

  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
    .join(', ')

}