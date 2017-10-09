# spartial

> Sparse partial function application - aka, spartial application
> based on Function.prototype.apply()

## Why?

Good question.

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
	
	// apply and mix on the right
	let fn3 = _.mixR(fn, null, [ 'two', void 0, void 0, 'five', void 0 ])

	fn3('one', 'three', 'four', 'six')
	//=> fn('one', 'two', 'three', 'four', 'five', 'six')
```

## API

### .fix(fn [, this[, args]])
### .fixR(fn [, this[, args]])
### .mix(fn [, this[, args]])
### .mixR(fn [, this[, args]])

## License

Unlicensed - TBD
