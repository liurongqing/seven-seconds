import { getURLParameters } from './getURLParameters'

test('解析url google.com', () => {
  expect(getURLParameters('google.com')).toEqual({})
})

test('解析url http://url.com/page?name=Adam&surname=Smith', () => {
  const obj = { name: 'Adam', surname: 'Smith' }
  expect(getURLParameters('http://url.com/page?name=Adam&surname=Smith')).toEqual(obj)
})