/**
 * 自定义匹配器
 * expect(1).toBeTest()
 */
expect.extend({
  toBeTest() {
    const num = Math.random()
    if (num > 0.5) {
      return {
        message: () => `${num} > 0.5`,
        pass: true
      }
    } else {
      return {
        message: () => `${num} <= 0.5`,
        pass: false
      }
    }
  }
})