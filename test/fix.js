'use strict';

const
	chai = require('chai'),
	assert = chai.assert,

	spartial = require('../'),
	fix = spartial.fix

describe('spartial#fix', function() {
	it('should only require the first argument (a function)', function() {
		function fn() { return this }

		var	p = fix(fn)

		assert.strictEqual(p(), fn(), 'first argument is not a function')
	})

	it('should allow the second argument (context) to be null', function() {
		function fn() { return this }

		var	p = fix(fn, null)

		assert.equal(p(), fn(), 'second argument is not null or undefined')
	})

	it('should allow the second argument (context) to be an object and same', function() {
		function fn() { return this }

		var	ctx = {},
			p = fix(fn, ctx)

		assert.strictEqual(p(), ctx, 'context is not an object and same')
	})

	it('should allow the third argument (argument array) to be empty', function() {
		function fn() { return arguments.length }

		var	ctx = {},
			p = fix(fn, ctx, [])

		assert.equal(p('test'), fn('test'), 'arguments applied are not zero in number')
	})

	it('should apply arguments first', function() {
		function fn() { return Array.prototype.slice.call(arguments) }

		var	ctx = {},
			args = [ 't1', 't2' ],
			p = fix(fn, ctx, args)

		assert.deepEqual(p('t3', 't4').slice(0, 2), args, 'applied arguments were not seen first')
	})

	it('should apply arguments in array order', function() {
		function fn() { return Array.prototype.slice.call(arguments) }

		var	ctx = {},
			args = [ 't1', 't2', 't3', 't4' ],
			p = fix(fn, ctx, args)

		assert.deepEqual(p(), args, 'applied arguments are not in array order')
	})

	it('should be able to execute the partial function multiple times', function() {
		function fn() { return Array.prototype.slice.call(arguments) }

		var	ctx = {},
			args = [ 't1' ],
			finalArgs = [ 't1', 't2', 't3', 't4', 't5' ],
			p = fix(fn, ctx, args)

		assert.deepEqual(p('t2', 't3', 't4', 't5'), finalArgs, 'applied arguments were not seen first')
		assert.deepEqual(p('t2', 't3', 't4', 't5'), finalArgs, 'was not able to execute function multiple times')
	})
})
