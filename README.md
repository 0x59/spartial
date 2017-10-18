[![Build Status](https://travis-ci.org/0x59/spartial.svg?branch=master)](https://travis-ci.org/0x59/spartial)  [![Coverage Status](https://coveralls.io/repos/github/0x59/spartial/badge.svg?branch=master)](https://coveralls.io/github/0x59/spartial?branch=master)

# spartial

> Sparse partial function application - aka, spartial application
> based on Function.prototype.apply()

## Why?

Good question.

As with solving most problems, there are many ways to arrive at a solution, and one need not pick a solution here.  ES6 brings greater expressiveness, enabling more concise partial application. As for ES5 ...

### Performance considerations and ES5

Regarding partial fn application, extra work may be involved during the initial application and during the later execution.  Execution is a more relevant concern given the fn will likely be executed multiple times.

#### Stats 


## Install

```
$ npm i spartial -S
```

## Usage

```js
	const _ = require('spartial')

	let fn = function(one, two) {}

	// apply on the left
	let fn0 = _.fix(fn, null, [ 'one' ])
	
	fn0('two')
	//=> fn('one', 'two')

	// apply on the right
	let fn1 = _.fixR(fn, null, [ 'two' ])

	fn1('one')
	//=> fn('one', 'two')

	// apply and mix on the left
	let fn2 = _.mix(fn, null, [ void 0, 'two', void 0, void 0, 'five' ])

	fn2('one', 'three', 'four', 'six')
	//=> fn('one', 'two', 'three', 'four', 'five', 'six')
	
	// apply and mix on the right. (note, one can define a sparse array
	// also note, [,] is an array of one element; i.e., the equivalent
	// of the array literal below would be [ 'two',,,'five',, ]
	let fn3 = _.mixR(fn, null, [ 'two', void 0, void 0, 'five', void 0 ])

	fn3('one', 'three', 'four', 'six')
	//=> fn('one', 'two', 'three', 'four', 'five', 'six')
```

## API

### .fix(fn [, this[, args]])
### .fixR(fn [, this[, args]])
### .mix(fn [, this[, args[, placeholder]]])
### .mixR(fn [, this[, args[, placeholder]]])

## License

Unlicensed - TBD
