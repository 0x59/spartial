[![Build Status](https://travis-ci.org/0x59/spartial.svg?branch=master)](https://travis-ci.org/0x59/spartial)  [![Coverage Status](https://coveralls.io/repos/github/0x59/spartial/badge.svg?branch=master)](https://coveralls.io/github/0x59/spartial?branch=master)

# spartial

> Sparse partial function application - aka, spartial application.
> Based on the supplied function's apply method

## Why?

Good question ... more on that later.

## Install

```
$ npm i spartial -S
```

## Usage

```js
	var _ = require('spartial')

	var fn = function(one, two) {}

	// apply on the left
	var fn0 = _.fix(fn, null, [ 'one' ])
	
	fn0('two')
	//=> fn('one', 'two')

	// apply on the right
	var fn1 = _.fixR(fn, null, [ 'two' ])

	fn1('one')
	//=> fn('one', 'two')

	// apply and mix on the left
	var fn2 = _.mix(fn, null, [ void 0, 'two', void 0, void 0, 'five' ])

	fn2('one', 'three', 'four', 'six')
	//=> fn('one', 'two', 'three', 'four', 'five', 'six')
	
	// apply and mix on the right. (note, one can define a sparse array
	// also note, [,] is an array of one element; i.e., the equivalent
	// of the array literal below would be [ 'two',,,'five',, ]
	var fn3 = _.mixR(fn, null, [ 'two', void 0, void 0, 'five', void 0 ])

	fn3('one', 'three', 'four', 'six')
	//=> fn('one', 'two', 'three', 'four', 'five', 'six')
```

## API

### .placeholder([placeholder])

### .fix(fn [, this[, args]])
### .fixR(fn [, this[, args]])
### .mix(fn [, this[, args[, placeholder]]])
### .mixR(fn [, this[, args[, placeholder]]])

## License

Unlicensed - TBD
