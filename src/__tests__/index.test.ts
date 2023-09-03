import { add } from '../index'

describe('index.ts', () => {
  it('should add 1 + 2 and get 3 as return value', () => {
    expect(add(1, 2)).toBe(3)
  })
})
