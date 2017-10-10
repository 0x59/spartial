'use strict';

const
	chai = require('chai'),
	assert = chai.assert,

	spartial = require('../'),
	mix = spartial.mix

describe('mix', function() {

	it('should only require the first argument (a function)', function() {
		function fn() { return this }

		var	p = mix(fn)

		assert.strictEqual(p(), fn(), 'first argument is not a function')
	})

	it('should allow the second argument (context) to be null', function() {
		function fn() { return this }

		var	p = mix(fn, null)

		assert.equal(p(), fn(), 'second argument is not null or undefined')
	})

	it('should allow the second argument (context) to be an object and same', function() {
		function fn() { return this }

		var	ctx = {},
			p = mix(fn, ctx)

		assert.strictEqual(p(), ctx, 'context is not an object and same')
	})

	it('should allow the third argument (argument array) to be empty', function() {
		function fn() { return arguments.length }

		var	ctx = {},
			p = mix(fn, ctx, [])

		assert.equal(p('test'), fn('test'), 'arguments applied are not zero in number')
	})

	it('should apply sparse arguments first', function() {
		function fn() { return Array.prototype.slice.call(arguments) }

		var	ctx = {},
			args = [ 't1', void 0, 't2' ],
			p = mix(fn, ctx, args),
			actual = p('p1', 'p2'),
			expect = [ 't1', 'p1', 't2', 'p2' ]

		assert.deepEqual(actual, expect, 'applied arguments were not seen first')
	})

	it('should apply sparse arguments in array order', function() {
		function fn() { return Array.prototype.slice.call(arguments) }

		var	ctx = {},
			args = [ 't1', void 0, 't2', void 0, void 0, 't3' ],
			p = mix(fn, ctx, args),
			actual = p('p1', 'p2', 'p3', 'p4', 'p5'),
			expect = [ 't1', 'p1', 't2', 'p2', 'p3', 't3', 'p4', 'p5' ]

		assert.deepEqual(actual, expect, 'applied arguments are not in array order')
	})
})
