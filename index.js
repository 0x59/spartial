'use strict';

module.exports = {

	fix: function fix( fn, ctx, fixedArgs_ ) {
		var	fixedArgs = fixedArgs_ || [],
			i = 0,
			I = fixedArgs.length || 0,
			args = []

		for( ; i < I; ++i ) {
			args[i] = fixedArgs[i]
		}

		return function() {
			var	J = arguments.length,
				j = 0

			for( ; j < J; ++i, ++j ) {
				args[i] = arguments[j]
			}

			return fn.apply(ctx, args)
		}
	},

	fixR: function fixR( fn, ctx, fixedArgs_ ) {
		var	fixedArgs = fixedArgs_ || [],
			args = []

		return function() {
			var	I = arguments.length,
				J = fixedArgs.length || 0,
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

	mix: function mix( fn, ctx, fixedArgs_ ) {
		var	fixedArgs = fixedArgs_ || [],
			mixedArgs = []

		return function() {
			var	I = fixedArgs.length,
				J = arguments.length,
				i = 0,
				j = 0

			for( ; i < I; ++i ) {
				mixedArgs[i] = fixedArgs[i] === void 0 ? arguments[j++] : fixedArgs[i]
			}

			for( ; j < J; ++i, ++j ) {
				mixedArgs[i] = arguments[j]
			}

			return fn.apply(ctx, mixedArgs)
		}
	},

	mixR: function mixR( fn, ctx, fixedArgs_ ) {
		var	fixedArgs = fixedArgs_ || [],
			mixedArgs = [],
			args = []

		return function() {
			var	I = fixedArgs.length,
				J = arguments.length,
				K = I,
				i = I - 1,
				j = J - 1,
				k

			for( ; i > -1; --i ) {
				mixedArgs[i] = fixedArgs[i] === void 0 && j > -1 ? arguments[j--] : fixedArgs[i]
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
