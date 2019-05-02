
import Cat from '../src/cat'
describe('Cat', () => {
  it('has _name', () => {
    const obj = new Cat()
    expect(obj._name).toEqual('Cat')
  })
})
