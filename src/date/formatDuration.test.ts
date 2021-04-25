import { formatDuration } from './formatDuration'

test('格式化 -1001', () => {
  expect(formatDuration(-1001)).toBe('1 second, 1 millisecond')
})

test('格式化 1001', () => {
  expect(formatDuration(1001)).toBe('1 second, 1 millisecond')
})

test('格式化 34325055574', () => {
  expect(formatDuration(34325055574)).toBe('397 days, 6 hours, 44 minutes, 15 seconds, 574 milliseconds')
})