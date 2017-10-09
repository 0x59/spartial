'use strict';

const
	chai = require('chai'),
	assert = chai.assert,

	spartial = require('../'),
	fixR = spartial.fixR

describe('fixR', function() {

	it('should only require the first argument (a function)', function() {
		function fn() { return this }

		var p = fixR(fn)
		
		assert.strictEqual(p(), fn(), 'first argument is not a function')
	})

	it('should allow the second argument (context) to be null', function() {
		function fn() { return this }

		var p = fixR(fn, null)
		
		assert.equal(p(), fn(), 'second argument is not null or undefined')
	})

	it('should allow the second argument (context) to be an object and same', function() {
		function fn() { return this }

		var ctx = {},
			p = fixR(fn, ctx)
		
		assert.strictEqual(p(), ctx, 'context is not an object and same')
	})

	it('should allow the third argument (argument array) to be empty', function() {
		function fn() { return arguments.length }

		var ctx = {},
			p = fixR(fn, ctx, [])
		
		assert.equal(p('test'), fn('test'), 'arguments applied are not zero in number')
	})

	it('should apply arguments last', function() {
		function fn() { return Array.prototype.slice.call(arguments) }

		var ctx = {},
			args = [ 't3', 't4' ],
			p = fixR(fn, ctx, args)

		assert.deepEqual(p('t1', 't2').slice(2, 4), args, 'applied arguments were not seen last')
	})

	it('should apply arguments in array order', function() {
		function fn() { return Array.prototype.slice.call(arguments) }

		var ctx = {},
			args = [ 't1', 't2', 't3', 't4' ],
			p = fixR(fn, ctx, args)

		assert.deepEqual(p(), args,	'applied arguments are not in array order')
	})
})
