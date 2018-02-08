const test = require('tape')
const list = require('..')

test('sanity test, a list of strings', t => {
  t.equal(list.every(i => typeof i === 'string'), true, 'a list of user agent strings')
  t.end()
})
