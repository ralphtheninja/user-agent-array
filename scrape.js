#!/usr/bin/env node

// Scrapes the text file from hfreire/random-http-useragent and spits out a
// sorted json array to stdout

const hq = require('hyperquest')
const split = require('split2')

const result = []

hq('https://raw.githubusercontent.com/hfreire/random-http-useragent/master/share/user-agents.txt')
  .pipe(split())
  .on('data', line => {
    result.push(line)
  })
  .on('end', () => {
    result.sort()
    console.log(JSON.stringify(result, null, 2))
  })
