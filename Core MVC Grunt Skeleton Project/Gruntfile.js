/// <binding />
'use strict';
const sass = require('node-sass');
/// <binding ProjectOpened='all' />
module.exports = function (grunt) {
    grunt.initConfig({

        // TypeScript Grunt Tasks
        clean: ["wwwroot/lib/typescript*", "wwwroot/lib/typescript/temp/"],
        concat: {
            all: {
                src: ['TypeScript/Tastes.js', 'TypeScript/Food.js'],
                dest: 'wwwroot/lib/typescript/temp/combined.js'
            }
        },
        jshint: {
            files: ['wwwroot/lib/typescript/temp/*.js'],
            options: {
                '-W069': false,
            }
        },
        uglify: {
            all: {
                src: ['wwwroot/lib/typescript/temp/combined.js'],
                dest: 'wwwroot/lib/typescript/combined.min.js'
            }
        },

        // Sass Grunt Tasks
        sass: {
            options: {
                implementation: sass,
                sourceMap: true, // Create source map
                outputStyle: 'compressed' // Minify output
            },
            dist: {
                files: [
                    {
                        expand: true, // Recursive
                        cwd: "Style", // The startup directory
                        src: ["**/*.scss"], // Source files
                        dest: "wwwroot/css", // Destination
                        ext: ".css" // File extension
                    }
                ]
            }
        },

        // Watch Task(s)
        watch: {
            files: ["TypeScript/*.js", "Style/*.scss"],
            tasks: ["updateJS", "updateCSS"],
            views: {
                files: ['Views/**/*.cshtml',
                        "TypeScript/*.js",
                        "Style/*.scss",
                        'bin/**/*.dll'],
                options: {
                    livereload: true,
                }
            }
        }
    });

    // Typescript Load Tasks
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Sass Load Tasks
    grunt.loadNpmTasks('grunt-sass');

    // Typescript Register Task(s)
    grunt.registerTask("updateJS", ['clean', 'concat', 'jshint', 'uglify']);

    // Sass Register Task(s)
    grunt.registerTask('updateCSS', ['sass']);


};