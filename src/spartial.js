'use strict';

var _placeholder

module.exports = {

	placeholder: function placeholder( v ) {
		_placeholder = v
	},

	fix: function fix( fn, ctx, fixedArgs_ ) {
		var	fixedArgs = fixedArgs_ || [],
			args = [],
			I = fixedArgs.length || 0,
			i = 0
		
		for( ; i < I; ++i ) {
			args[i] = fixedArgs[i]
		}

		return function() {
			var	J = arguments.length,
				j = 0,
				k = i

			for( ; j < J; ++k, ++j ) {
				args[k] = arguments[j]
			}

			return fn.apply(ctx, args)
		}
	},

	fixR: function fixR( fn, ctx, fixedArgs_ ) {
		var	fixedArgs = fixedArgs_ || [],
			args = [],
			J = fixedArgs.length || 0

		return function() {
			var	I = arguments.length,
				i = 0,
				j = 0

			for( ; i < I; ++i ) {
				args[i] = arguments[i]
			}

			for( ; j < J; ++i, ++j ) {
				args[i] = fixedArgs[j]
			}

			return fn.apply(ctx, args)
		}
	},

	mix: function mix( fn, ctx, fixedArgs_, placeholder_ ) {
		var	fixedArgs = fixedArgs_ || [],
			mixedArgs = [],
			placeholder = placeholder_ || _placeholder,
			I = fixedArgs.length

		return function() {
			var	J = arguments.length,
				i = 0,
				j = 0

			for( ; i < I; ++i ) {
				mixedArgs[i] = fixedArgs[i] === placeholder ? arguments[j++] : fixedArgs[i]
			}

			for( ; j < J; ++i, ++j ) {
				mixedArgs[i] = arguments[j]
			}

			return fn.apply(ctx, mixedArgs)
		}
	},

	mixR: function mixR( fn, ctx, fixedArgs_, placeholder_ ) {
		var	fixedArgs = fixedArgs_ || [],
			mixedArgs = [],
			args = [],
			placeholder = placeholder_ || _placeholder,
			I = fixedArgs.length

		return function() {
			var	J = arguments.length,
				K = I,
				i = I - 1,
				j = J - 1,
				k

			for( ; i > -1; --i ) {
				mixedArgs[i] = fixedArgs[i] === placeholder && j > -1 ? arguments[j--] : fixedArgs[i]
			}

			k = j + 1
			for( ; j > -1; --j ) {
				args[j] = arguments[j]
			}

			for( K += k, i = 0; k < K; ++k, ++i ) {
				args[k] = mixedArgs[i]
			}

			return fn.apply(ctx, args)
		}
	}

}
