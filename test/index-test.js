/*global describe, it */

describe('myAnimal()', () => {
  it('returns my animal', () => {
    expect(myAnimal()).to.equal('dog')
  })
})

describe('yourAnimal()', () => {
  it('returns your animal', () => {
    expect(yourAnimal()).to.equal('cat')
  })

  it('does not hard-code the answer', () => {
    expect(yourAnimal.toString()).not.to.contain("return 'cat'")
  })
})

describe('add2(n)', () => {
  it('adds two to n', () => {
    const n = Math.floor(Math.random() * 1000)
    expect(add2(n)).to.equal(n + 2)
  })
})

describe('funkyFunction()', () => {
  it('returns a function', () => {
    expect(funkyFunction()).to.be.a('function')
  })
})

describe('theFunk', () => {
  it('is "FUNKY!"', () => {
    expect(theFunk()).to.equal('FUNKY!')
  })

  it('does not hard-code the answer', () => {
    expect(file).to.contain('var theFunk = funkyFunction()')
  })
})
