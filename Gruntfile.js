module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            },
            release: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "css/styles.css": "less/styles.less"
                }
            }
        },
        clean: {
            app: ['js/apps/**']
        },
        watch: {
            styles: {
                files: ['less/**/*.less'],
                tasks: ['less'],
                options: {
                    nospawn: true
                }
            },
            angular: {
                files: ['apps/app.js', 'apps/**/*.js', 'apps/**/*.html'],
                tasks: ['build:app'],
                options: {
                    nospawn: true
                }
            }
        },
        'angular-builder': {
            options: {
                mainModule: 'app',
                externalModules: []
            },
            app: {
                src: ['apps/app.js', 'apps/**/*.js'],
                dest: 'js/apps/build.js'
            }
        },
        ngtemplates: {
            options: {
                module:  'app.templates',
                htmlmin: {
                    removeComments:               true,  // Only if you don't use comment directives!
                    removeCommentsFromCDATA:      false, // Remove HTML comments from inside <script> and <style>.
                    removeCDATASectionsFromCDATA: false, // Remove CDATA sections from inside <script> and <style>.
                    collapseWhitespace:           true,
                    collapseBooleanAttributes:    true,  // <input disabled="disabled"> => <input disabled>
                    removeAttributeQuotes:        true,  // Remove attribute quotes when it's safe to do so.
                    removeRedundantAttributes:    false, // Remove redundant attributes like type="text/javascript".
                    removeEmptyAttributes:        false, // Remove empty (or blank) attributes.
                    removeOptionalTags:           true,  // Some elements are allowed to have their tags omitted, like </td>.
                    removeEmptyElements:          false  // Experimental
                }
            },
            app:     {
                options: { base: '' },
                src:     '<%= requiredTemplates %>',
                dest:    'js/apps/templates.js'
            }
        },
        concat: {
            app: {
                src: ['js/apps/*.js'],
                dest: 'js/apps/app.js'
            }
        },
        uglify: {
            app: {
                files: {
                    'js/apps/app.js' : ['js/apps/build.js', 'js/apps/templates.js']
                },
                options: {
                    mangle: false,
                    beautify: false
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-angular-builder');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build:app', ['clean:app', 'angular-builder:app', 'ngtemplates:app', 'concat:app']);

    grunt.registerTask('release', ['build:app', 'uglify:app', 'less:release']);

    grunt.registerTask('default', ['build:app', 'less:development', 'watch']);
};