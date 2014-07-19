/* global module */

module.exports = function(grunt) {

	grunt.initConfig({

		jshint: {
			all: ['src/*.js']
		},

		uglify: {
			files: {
				'build/LTON.js': ['src/stringify.js']
			}
		},

		karma: {
		  unit: {
		    configFile: 'karma.conf.js',
		    singleRun: true,
		    browsers: ['PhantomJS'],
		    logLevel: 'ERROR'
		  }
		},

		watch: {
			files: ['src/*.js', 'tests/*.spec.js'],
			tasks: ['jshint', 'karma', 'uglify']
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-karma');
};